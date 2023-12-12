#!/usr/bin/env tsx
import esbuild from 'esbuild';

await esbuild.build({
	bundle: true,
	entryPoints: ['src/cli.ts'],
	format: 'esm',
	// Minify: true,
	outfile: 'bin/cli.js',
	packages: 'external',
	platform: 'node',
	target: 'node18',
});
