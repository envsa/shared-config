import { getDefaultConfigLoader, resolveConfigFileImports } from 'cspell-lib';
import { constants } from 'node:fs';
import { access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stripVTControlCharacters } from 'node:util';
import { packageUp } from 'package-up';
import {
  type CommandDefinition,
  DESCRIPTION,
  executeCommands,
} from '../../../src/command-builder.js';
import { stringify } from '../../../src/json-utils.js';
import { createStreamFilter, createStreamTransform } from '../../../src/stream-utils.js';
import { checkForUnusedWords } from './unused-words.js';

async function getCspellIgnorePaths(): Promise<string> {
  // Resolve cspell ignore paths for Case Police

  // eslint-disable-next-line unicorn/no-useless-undefined
  const config = await getDefaultConfigLoader().searchForConfigFile(undefined);
  if (config === undefined) {
    throw new Error('No CSpell configuration found.');
  }

  const resolvedConfig = await resolveConfigFileImports(config);

  if (resolvedConfig.ignorePaths === undefined) {
    return '';
  }

  // Comma-delimited list of paths
  const globStrings: string[] = [];

  for (const globDefinitionOrString of resolvedConfig.ignorePaths) {
    globStrings.push(
      typeof globDefinitionOrString === 'string'
        ? globDefinitionOrString
        : globDefinitionOrString.glob,
    );
  }

  return globStrings.join(',');
}

async function checkForUnusedWordsCommand(
  logStream: NodeJS.WritableStream,
  positionalArguments: string[],
): Promise<number> {
  // Run the check used words script
  const unusedWords = await checkForUnusedWords(positionalArguments);

  if (unusedWords.length > 0) {
    const subStream = createStreamTransform('[Unused Words]', 'cyanBright');
    subStream.pipe(logStream);

    for (const unusedWord of unusedWords) {
      subStream.write(`${unusedWord}\n`);
    }

    // Consider this an error
    return 1;
  }

  return 0;
}

async function getCasePoliceDictionaryPath(): Promise<string> {
  // This is the path to the directory containing the export of the
  // package, so we still have to look "up" to get the root package directory.
  const packageDirectory = import.meta.resolve('@envsa/cspell-config');
  const sourcePackage = await packageUp({ cwd: path.dirname(fileURLToPath(packageDirectory)) });
  if (sourcePackage === undefined) {
    throw new Error('Could not find the Case Police dictionary parent package.');
  }

  const source = path.join(path.dirname(sourcePackage), 'dictionaries', 'case-police.json');

  try {
    await access(source, constants.F_OK);
  } catch {
    throw new Error(`Case Police dictionary "${source}" does not exist.`);
  }

  return source;
}

// We wrap this to filter out unwanted output, since there is no exported API
// and no options exposed to quiet the noise
async function casePoliceCommand(
  logStream: NodeJS.WritableStream,
  positionalArguments: string[],
): Promise<number> {
  const logPrefix = '[Case Police]';

  // Create filter stream
  const subStream = createStreamFilter((text) => {
    const plainText = stripVTControlCharacters(text);

    // Sample output:
    // [Case Police] Case Police v0.7.2
    // [Case Police]
    // [Case Police] 18 files found for checking, 486 words loaded
    // [Case Police]
    // [Case Police] GitHub → GitHub   ./src/command.ts:63:27
    // [Case Police]
    // [Case Police] 1 files contain case errors
    // [Case Police] run npx case-police --fix to fix
    // [Case Police]

    // Only allow word recommendations through
    const shouldStrip = !(plainText.startsWith(logPrefix) && plainText.includes('→'));
    return shouldStrip;
  });
  subStream.pipe(logStream);

  return executeCommands(
    subStream,
    positionalArguments,
    [],
    [
      {
        logColor: 'cyanBright',
        logPrefix,
        name: 'case-police',
        optionFlags: [
          '--dict',
          await getCasePoliceDictionaryPath(),
          '--ignore',
          await getCspellIgnorePaths(),
        ],
        receivePositionalArguments: true,
      },
    ],
  );
}

async function printCspellConfigCommand(logStream: NodeJS.WritableStream): Promise<number> {
  const configName = 'cspell';

  // eslint-disable-next-line unicorn/no-useless-undefined
  const config = await getDefaultConfigLoader().searchForConfigFile(undefined);
  if (config === undefined) {
    throw new Error('No CSpell configuration found.');
  }

  logStream.write(`Found ${configName} readme configuration at ${fileURLToPath(config.url)}"\n`);

  const resolvedConfig = await resolveConfigFileImports(config);
  const prettyAndColorfulJsonLines = stringify(resolvedConfig).split('\n');
  for (const line of prettyAndColorfulJsonLines) {
    logStream.write(`${line}\n`);
  }

  return 0;
}

export const commandDefinition: CommandDefinition = {
  commands: {
    init: {
      configFile: 'cspell.config.js',
      configPackageJson: {
        cspell: {
          import: '@envsa/cspell-config',
        },
      },
      locationOptionFlag: true,
    },
    lint: {
      commands: [
        {
          name: 'cspell',
          optionFlags: ['--quiet'],
          receivePositionalArguments: true,
        },
        {
          execute: checkForUnusedWordsCommand,
          name: checkForUnusedWordsCommand.name,
        },
        {
          execute: casePoliceCommand,
          name: casePoliceCommand.name,
        },
      ],
      description: `Check for spelling mistakes. ${DESCRIPTION.fileRun}`,
      positionalArgumentDefault: '**/*',
      positionalArgumentMode: 'optional',
    },
    printConfig: {
      commands: [
        {
          execute: printCspellConfigCommand,
          name: printCspellConfigCommand.name,
        },
      ],
      description: `Print the resolved CSpell configuration. ${DESCRIPTION.packageSearch} ${DESCRIPTION.monorepoSearch}`,
      positionalArgumentMode: 'none',
    },
  },
  description:
    "Envsa's CSpell shared configuration tools. (Automated fixes are handled by ESLint.)",
  logColor: 'cyan',
  logPrefix: '[CSpell]',
  name: 'envsa-cspell',
  order: 6,
};
