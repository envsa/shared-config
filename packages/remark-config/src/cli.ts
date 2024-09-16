#!/usr/bin/env node
import { buildCommands } from '$root/src/command-builder.ts';

await buildCommands('remark-config', '[remarklint]', 'blue', {
  init: {},
  printConfig: {},
});
