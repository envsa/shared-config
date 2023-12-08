#!/usr/bin/env zx
/* eslint-disable unicorn/prefer-module */
import minimist from 'minimist';
import { $, path } from 'zx';
import 'zx/globals';

async function main() {
	const options = ['init', 'fix', 'check'];
	const args = minimist(process.argv.slice(2), {
		boolean: options,
	});

	const argumentCount = options.reduce((count, argument) => count + (args[argument] ? 1 : 0), 0);
	if (argumentCount !== 1) {
		console.error(`[ESLint] Please provide exactly one of ${options.map((opt) => `--${opt}`).join(' or ')}`);
		process.exit(1);
	}

	process.env.FORCE_COLOR = '1';
	if (args.init) {
		await $`cp -Ri ${path.join(__dirname, 'init')}/. ${process.cwd()}`.nothrow();
	} else if (args.fix) {
		await $`eslint --fix .`;
	} else if (args.check) {
		await $`eslint .`;
	}
}

await main();
