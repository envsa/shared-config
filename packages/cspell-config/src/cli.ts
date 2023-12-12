#!/usr/bin/env node
import { buildCommands } from '../../../src/command-builder.js';

await buildCommands('cspell-config', 'CSpell', {
	check: {
		command: 'cspell',
		defaultArguments: ['.'],
		options: ['--quiet'],
	},
	init: {},
	printConfig: {
		command: 'cspell',
		options: ['--debug'],
	},
});
