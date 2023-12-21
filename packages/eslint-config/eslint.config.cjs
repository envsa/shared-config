/* eslint-disable unicorn/no-null */
/* eslint-disable perfectionist/sort-objects */
const extendsPrefix = [
	'eslint:recommended',
	'plugin:n/recommended',
	'plugin:unicorn/recommended',
	'xo',
	'plugin:perfectionist/recommended-natural',
	'prettier', // Needed here as well for files not caught by overrides
]
const extendsTypescript = ['plugin:@typescript-eslint/recommended-type-checked', 'xo-typescript']
const extendsSuffix = ['prettier']

const globalRulesPrefix = {
	'max-params': 'off',
	'n/no-missing-import': 'off', // Trouble resolving in ts
	'n/no-process-exit': 'off', // Duplicated in unicorn
	'n/no-extraneous-import': 'off', // Monorepo problems
	'n/no-unpublished-import': 'off', // Monorepo problems
	'no-await-in-loop': 'off',
	'object-curly-spacing': 'off', // Shouldn't prettier get rid of this?
	'comma-dangle': 'off', // Shouldn't prettier get rid of this?
	'no-unused-vars': [
		'error',
		{
			argsIgnorePattern: '^_',
			destructuredArrayIgnorePattern: '^_',
		},
	],
	'no-warning-comments': 'off',
	'perfectionist/sort-imports': [
		'error',
		{
			'newlines-between': 'never',
		},
	],
	'unicorn/no-array-reduce': 'off',
	'unicorn/prevent-abbreviations': [
		'error',
		{
			replacements: {
				acc: false,
				arg: false,
				args: false,
				db: false,
				dev: false,
				doc: false,
				docs: false,
				env: false,
				fn: false,
				i: false,
				j: false,
				lib: false,
				param: false,
				params: false,
				pkg: false,
				prop: false,
				props: false,
				ref: false,
				refs: false,
				src: false,
				temp: false,
			},
		},
	],
	// Perfectionist conflict rules,
	'@typescript-eslint/adjacent-overload-signatures': 'off',
	'@typescript-eslint/sort-type-constituents': 'off',
	'import/order': 'off',
	'react/jsx-sort-props': 'off',
	'sort-imports': 'off',
}

const globalRulesTypescript = {
	'@typescript-eslint/no-unused-vars': [
		'error',
		{
			argsIgnorePattern: '^_',
			destructuredArrayIgnorePattern: '^_',
		},
	],
	'default-case': 'off', // TS checks
	'no-throw-literal': 'off', // Conflicts with @typescript-eslint version https://typescript-eslint.io/rules/no-throw-literal/#how-to-use
	// https://typescript-eslint.io/linting/troubleshooting/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
	'no-undef': 'off',
	'no-unused-vars': 'off',
	'@typescript-eslint/naming-convention': [
		'error',
		{
			selector: 'default',
			format: ['camelCase', 'StrictPascalCase'],
		},
		{
			selector: 'default',
			format: null,
			modifiers: ['requiresQuotes'],
		},
		{
			selector: 'variable',
			format: ['camelCase', 'StrictPascalCase'],
		},
		{
			selector: 'function',
			format: ['camelCase'],
		},
		{
			selector: 'typeLike',
			format: ['StrictPascalCase'],
		},
	],
}

/* @type {import('eslint').Linter.Config} */
module.exports = {
	extends: extendsPrefix,
	env: {
		browser: true,
		es2022: true, // TODO 2024 like xo?
		node: true,
	},
	parser: '@typescript-eslint/parser', // Todo right choice for jsdoc js?
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2022,
		extraFileExtensions: ['.svelte', '.astro'], // Essential for these file types to make it to the override
		project: 'tsconfig.eslint.json',
		sourceType: 'module',
	},
	rules: globalRulesPrefix,
	overrides: [
		// Markdown
		{
			extends: ['plugin:mdx/recommended'],
			files: ['*.md'],
			parser: 'eslint-mdx',
			rules: globalRulesPrefix,
		},
		// MDX
		{
			extends: ['plugin:mdx/recommended', ...extendsSuffix],
			files: ['*.mdx'],
			parser: 'eslint-mdx',
			rules: {
				...globalRulesPrefix,
				'no-unused-expressions': 'off',
				'no-unused-vars': 'off',

				// MDX files can be PascalCase OR kebab-case, depending on whether
				// the file's core nature is that of content or component
				'unicorn/filename-case': [
					'error',
					{
						cases: {
							kebabCase: true,
							pascalCase: true,
						},
					},
				],
			},
			settings: {
				'mdx/code-blocks': false,
			},
		},
		// Typescript
		{
			extends: [...extendsTypescript, ...extendsSuffix],
			files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
			// SvelteKit
			overrides: [
				{
					files: ['**/routes/**/+*.ts'],
					rules: {
						// Error often imported from from '@sveltejs/kit in SvelteKit files
						'@typescript-eslint/no-throw-literal': 'off',
					},
				},
			],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: true,
			},
			rules: {
				...globalRulesPrefix,
				...globalRulesTypescript,
			},
		},
		// Javascript
		{
			extends: [...extendsSuffix],
			files: ['*.jsx', '*.mjs', '*.cjs', '.js'],
			rules: {
				...globalRulesPrefix,
				...globalRulesTypescript,
			},
		},
		// Astro
		{
			extends: [
				...extendsTypescript,
				'plugin:astro/recommended',
				'plugin:astro/jsx-a11y-recommended',
				...extendsSuffix,
			],
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.astro'],
				parser: '@typescript-eslint/parser',
				project: true,
				sourceType: 'module',
			},
			rules: {
				...globalRulesPrefix,
				...globalRulesTypescript,
				'@typescript-eslint/no-unsafe-assignment': 'off', // Crashing
				'@typescript-eslint/no-unsafe-return': 'off', // Happens in templates
				// Astro components are usually PascalCase,
				// but when used as pages they are kebab-case
				'unicorn/filename-case': [
					'error',
					{
						cases: {
							kebabCase: true,
							pascalCase: true,
						},
						ignore: ['^\\[slug\\]\\.astro$'],
					},
				],
			},
		},
		// Svelte
		{
			extends: [
				...extendsTypescript,
				'plugin:svelte/recommended',
				...extendsSuffix,
				'plugin:svelte/prettier',
			],
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.svelte'],
				parser: '@typescript-eslint/parser',
				project: true,
				sourceType: 'module',
			},
			rules: {
				...globalRulesPrefix,
				...globalRulesTypescript,
				'@typescript-eslint/no-confusing-void-expression': 'off', // Reactive statements
				'@typescript-eslint/no-unused-expressions': 'off', // Needed for reactive statements
				'import/no-mutable-exports': 'off', // Allow prop export
				'no-sequences': 'off', // Reactive statements
				// https://github.com/typescript-eslint/typescript-eslint/blob/1cf9243/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
				'no-undef-init': 'off', // Initialize props to undefined
				'prefer-const': 'off', // Needed for let props
				'unicorn/filename-case': [
					// Svelte components are PascalCase
					'error',
					{
						case: 'pascalCase',
						ignore: [
							'^\\+', // SvelteKit +page.svelte etc.
						],
					},
				],
				'unicorn/no-useless-undefined': 'off', // Needed for let props
			},
		},
	],
}
