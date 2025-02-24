import {
  type CommandDefinition,
  DESCRIPTION,
  getCosmiconfigCommand,
} from '../../../src/command-builder.js';

export const commandDefinition: CommandDefinition = {
  commands: {
    init: {
      // Note that remark.config.js is not detected by the config resolver ಠ_ಠ
      configFile: '.remarkrc.js',
      configPackageJson: {
        remarkConfig: {
          plugins: ['@envsa/remark-config'],
        },
      },
      locationOptionFlag: true,
    },
    printConfig: {
      commands: [getCosmiconfigCommand('remark')],
      description: `Print the effective Remark configuration. ${DESCRIPTION.packageSearch} ${DESCRIPTION.monorepoSearch}`,
      positionalArgumentMode: 'none',
    },
  },
  description:
    "Envsa's Remark and Remark Lint shared configuration tools. (Actual linting and fixing is managed through @envsa/eslint-config.)",
  logColor: 'blue',
  logPrefix: '[remarklint]',
  name: 'envsa-remark',
  order: 8,
};
