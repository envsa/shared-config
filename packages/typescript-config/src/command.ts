import { type CommandDefinition, DESCRIPTION } from '../../../src/command-builder.js';

export const commandDefinition: CommandDefinition = {
  commands: {
    init: {
      locationOptionFlag: false,
    },
    lint: {
      commands: [
        {
          cwdOverride: 'package-dir',
          name: 'tsc',
          optionFlags: ['--noEmit'],
        },
      ],
      // TODO confirm monorepo behavior
      description: `Run type checking on your project. ${DESCRIPTION.packageRun} ${DESCRIPTION.monorepoRun}`,
      positionalArgumentMode: 'none',
    },
    printConfig: {
      commands: [
        {
          name: 'tsc',
          optionFlags: ['--showConfig'],
          prettyJsonOutput: true,
        },
      ],
      // TODO confirm monorepo behaviour
      description: `Print the TypeScript configuration for the project. ${DESCRIPTION.packageSearch} ${DESCRIPTION.monorepoSearch}`,
      positionalArgumentMode: 'none',
    },
  },
  description: "Envsa's TypeScript shared configuration tools.",
  logColor: 'blueBright',
  logPrefix: '[TypeScript Config]',
  name: 'envsa-typescript',
  order: 3,
};
