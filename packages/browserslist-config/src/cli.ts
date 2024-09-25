#!/usr/bin/env node
import { buildCommands } from '$root/src/command-builder.ts';

await buildCommands('browserslist-config', '[Browserslist]', 'white', {
  init: {
    command: 'pnpm',
    defaultArguments: ['pkg', 'set', 'browserslist[0]=extends @envsa/browserslist-config'],
  },
});
