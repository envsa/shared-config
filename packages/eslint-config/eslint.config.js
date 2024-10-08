import pluginCspell from '@cspell/eslint-plugin';
import { includeIgnoreFile } from '@eslint/compat';
import eslint from '@eslint/js';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import fs from 'node:fs';
import path from 'node:path';
import typescriptEslint from 'typescript-eslint';

const gitignorePath = path.join(process.cwd(), '.gitignore');
const baseIgnore = fs.existsSync(gitignorePath) ? includeIgnoreFile(gitignorePath)?.ignores : [];

export default typescriptEslint.config(
  // Use project .gitignore file for a basis of ignored files
  {
    ignores: [...baseIgnore, '**/cpresources/**'],
  },
  // 1st party eslint config
  eslint.configs.recommended,
  // Unicorn config
  pluginUnicorn.configs['flat/recommended'],
  // Enable cspell plugin
  {
    name: 'CSpell config',
    plugins: {
      '@cspell': pluginCspell,
    },
    rules: {
      '@cspell/spellchecker': 1,
    },
  },
  // Typescript config
  {
    name: 'Typescript config',
    files: ['**/*.ts'],
    extends: [
      ...typescriptEslint.configs.recommendedTypeChecked,
      ...typescriptEslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.eslint.json'],
      },
    },
  },
  // Primary config
  {
    name: 'Primary config',
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2024,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // base rule overrides
      'no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: 'res|next|^err|^_',
          varsIgnorePattern: '^_',
        },
      ],
      // Unicorn rule overrides
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-object-as-default-parameter': 'off',
      'unicorn/prefer-top-level-await': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            dev: true,
            useDevServer: true,
            args: true,
          },
        },
      ],
    },
  },
  // Prettier must come last
  // Prettier config
  pluginPrettierRecommended,
  {
    name: 'Prettier config',
    rules: {
      'prettier/prettier': 'error',
    },
  },
);
