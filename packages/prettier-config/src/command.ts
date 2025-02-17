import {
  type CommandDefinition,
  DESCRIPTION,
  getCosmiconfigCommand,
} from '../../../src/command-builder.js';
import { getFilePathAtProjectRoot } from '../../../src/path-utils.js';

// TODO bad idea?
const sharedOptions = [
  '--log-level=warn',
  '--plugin=@prettier/plugin-php',
  '--plugin=@prettier/plugin-xml',
  '--plugin=prettier-plugin-packagejson',
  '--plugin=prettier-plugin-sh',
  '--plugin=prettier-plugin-svelte',
  '--plugin=prettier-plugin-tailwindcss',
  // Have to resolve to the project root for ignore to work when calling prettier in subdirectories
  `--ignore-path=${getFilePathAtProjectRoot('.gitignore') ?? '.gitignore'}`,
  `--ignore-path=${getFilePathAtProjectRoot('.prettierignore') ?? '.prettierignore'}`,
];

export const commandDefinition: CommandDefinition = {
  commands: {
    fix: {
      commands: [
        {
          name: 'prettier',
          optionFlags: [...sharedOptions, '--write'],
          receivePositionalArguments: true,
        },
      ],
      description: `Format files according to your Prettier configuration. ${DESCRIPTION.fileRun}`,
      positionalArgumentDefault: '.',
      positionalArgumentMode: 'optional',
    },
    init: {
      configFile: 'prettier.config.js',
      configPackageJson: {
        prettier: '@envsa/prettier-config',
      },
      locationOptionFlag: true,
    },
    lint: {
      commands: [
        {
          name: 'prettier',
          optionFlags: [...sharedOptions, '--check'],
          receivePositionalArguments: true,
        },
      ],
      description: `Check that files are formatted according to your Prettier configuration. ${DESCRIPTION.fileRun}`,
      positionalArgumentDefault: '.',
      positionalArgumentMode: 'optional',
    },
    printConfig: {
      // See also --find-config-path and --file-info options for fancier per-file approaches...
      commands: [getCosmiconfigCommand('prettier')],
      description: `Print the effective Prettier configuration. ${DESCRIPTION.packageSearch}. ${DESCRIPTION.monorepoSearch}.`,
      positionalArgumentMode: 'none',
    },
  },
  description: "Envsa's Prettier shared configuration tools.",
  logColor: 'blue',
  logPrefix: '[Prettier]',
  name: 'envsa-prettier',
  order: 9,
};
