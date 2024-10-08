#!/usr/bin/env node
import { buildCommands } from '$root/src/command-builder.ts';

await buildCommands('cspell-config', '[CSpell]', 'cyan', {
  check: {
    command: 'cspell',
    defaultArguments: ['.'],
    options: ['--quiet'],
  },
  init: {},
  printConfig: {
    // Doesn't work with executeJsonOutput
    // because of json parsing errors (regex related)
    command: 'cspell',
    defaultArguments: ['.'],
    options: ['--debug', '--no-exit-code', '--no-color'],
  },
});
