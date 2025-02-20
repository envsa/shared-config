import type { Config as PrettierConfig } from 'prettier';
import { deepmerge } from 'deepmerge-ts';
import { sortOrder as sortPackageJsonSortOrder } from 'sort-package-json';

/**
 * Merge custom keys into the `sort-package-json` `order` array. Where
 * duplicated, delete existing and prioritize new keys.
 */
function customizeSortOrder(keys: string[], newKeys: string[]): string[] {
  // If new keys are in keys, remove them
  const filteredKeys = keys.filter((key) => !newKeys.includes(key));

  // Append new keys to the end
  return [...filteredKeys, ...newKeys];
}

const sharedPrettierConfig: PrettierConfig = {
  arrowParens: 'always',
  bracketSpacing: true,
  overrides: [
    {
      files: '*.json5',
      options: {
        parser: 'json5',
        quoteProps: 'preserve',
        singleQuote: false,
        trailingComma: 'none',
      },
    },
    {
      files: '*.php',
      options: {
        phpVersion: '8.2',
        printWidth: 80,
        parser: 'php',
        tabWidth: 4,
        trailingCommaPHP: true,
      },
    },
    {
      files: '*.{yml,yaml}',
      options: {
        singleQuote: false,
        tabWidth: 4,
      },
    },
    {
      files: ['*rc', '*ignore', '*.sh', '*.zsh', '*.bash', '*.fish'],
      options: {
        parser: 'sh',
        plugins: ['prettier-plugin-sh'],
      },
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
        plugins: ['prettier-plugin-svelte'],
      },
    },
    {
      files: '*.twig',
      options: {
        twigSingleQuote: false,
        twigMultiTags: [
          'apply,endapply',
          'cache,endcache',
          'ifchildren,endifchildren',
          'nav,endnav',
          'switch,case,default,endswitch',
        ],
      },
    },
    // Make this match eslint 'json-package/order-properties'
    // https://github.com/matzkoh/prettier-plugin-packagejson/issues/188
    // This must stay in sync with packages/eslint-config/src/configs/json.ts
    {
      files: 'package.json',
      options: {
        packageSortOrder: customizeSortOrder(sortPackageJsonSortOrder, [
          'cspell',
          'knip',
          'mdat',
          'prettier',
          'remarkConfig',
          'stylelint',
        ]),
      },
    },
  ],
  plugins: [
    '@prettier/plugin-php',
    '@prettier/plugin-xml',
    'prettier-plugin-packagejson',
    'prettier-plugin-sh',
    '@zackad/prettier-plugin-twig',
    'prettier-plugin-tailwindcss',
  ],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};

/**
 * **\@Kitschpatrol's Shared Prettier Configuration**
 * @see [@envsa/prettier-config](https://github.com/envsa/shared-config/tree/main/packages/prettier-config)
 * @see [@envsa/shared-config](https://github.com/envsa/shared-config)
 * @example
 * ```js
 * export default prettierConfig({
 *   printWidth: 120,
 * })
 * ```
 */
export function prettierConfig(config?: PrettierConfig): PrettierConfig {
  return deepmerge(sharedPrettierConfig, config);
}

export default sharedPrettierConfig;
