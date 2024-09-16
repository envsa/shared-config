#!/usr/bin/env node

import { buildCommands, executeJsonOutput } from '$root/src/command-builder.ts';

await buildCommands('eslint-config', `[ESLint]`, 'magenta', {
  check: {
    command: 'eslint',
    defaultArguments: ['.'],
  },
  fix: {
    command: 'eslint',
    defaultArguments: ['.'],
    options: ['--fix'],
  },
  init: {},
  printConfig: {
    async command(logStream, args) {
      return executeJsonOutput(
        logStream,
        {
          command: 'eslint',
          options: ['--print-config'],
        },
        args,
      );
    },
  },
});
