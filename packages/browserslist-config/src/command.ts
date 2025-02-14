import { CommandDefinition } from '../../../src/command-builder';

export const commandDefinition: CommandDefinition = {
  commands: {
    init: {
      commands: [
        {
          name: 'pnpm',
          optionFlags: ['pkg', 'set', 'browserslist[0]=extends @envsa/browserslist-config'],
        },
      ],
      locationOptionFlag: true,
    },
  },
  description: "Envsa's Browserslist shared configuration tool.",
  logColor: 'white',
  logPrefix: 'Browserslist',
  name: 'envsa-browserslist',
  order: 7,
};
