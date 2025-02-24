import { default as pluginEslintComments } from '@eslint-community/eslint-plugin-eslint-comments';
import { default as pluginTs } from '@typescript-eslint/eslint-plugin';
import * as pluginDepend from 'eslint-plugin-depend';
import { default as pluginNode } from 'eslint-plugin-n';
import { default as pluginUnicorn } from 'eslint-plugin-unicorn';
import type { Rules, TypedFlatConfigItem } from '../types';
import {
  dependRecommendedRules,
  eslintCommentsRecommendedRules,
  eslintJavascriptRecommendedRules,
  eslintTypescriptDisableTypeCheckedRules,
  eslintTypescriptRecommendedOverridesRules,
  eslintTypescriptStrictTypeCheckedRules,
  eslintTypescriptStylisticTypeCheckedRules,
  nodeRecommendedRules,
  unicornRecommendedRules,
  xoJavascriptRules,
  xoTypescriptRules,
} from '../presets';

// ---------

/**
 * Recommended rules from the readme, but no preset config is exported from the
 * plugin. Using built-in approach instead pending
 * https://github.com/sweepline/eslint-plugin-unused-imports/issues/50
 * TODO What about react?
 * @see https://github.com/sweepline/eslint-plugin-unused-imports
 */
// const envsaUnusedImportsRules: Rules = {
//   'no-unused-vars': 'off', // Or "@typescript-eslint/no-unused-vars": "off",
//   'unused-imports/no-unused-imports': 'error',
//   'unused-imports/no-unused-vars': [
//     'warn',
//     {
//       args: 'after-used',
//       argsIgnorePattern: '^_',
//       vars: 'all',
//       varsIgnorePattern: '^_',
//     },
//   ],
// }

const envsaSharedDisableTypeCheckedRules: Rules = {};

/**
 * Rules shared by JS and TS scripts
 * Partial rule set requires `files` and `languageOptions` keys to be set appropriately in file-specific configs.
 */
export const sharedScriptConfig: TypedFlatConfigItem = {
  plugins: {
    depend: pluginDepend,
    // eslint-disable-next-line ts/no-unsafe-assignment
    'eslint-comments': pluginEslintComments,
    node: pluginNode,
    ts: pluginTs,
    unicorn: pluginUnicorn,
  },
  rules: {
    ...eslintJavascriptRecommendedRules,
    ...eslintTypescriptRecommendedOverridesRules,
    ...eslintTypescriptStrictTypeCheckedRules,
    ...eslintTypescriptStylisticTypeCheckedRules,
    ...nodeRecommendedRules,
    ...unicornRecommendedRules,
    ...xoJavascriptRules,
    ...xoTypescriptRules,
    ...eslintCommentsRecommendedRules,
    ...dependRecommendedRules,
    'capitalized-comments': [
      'error',
      'always',
      {
        ignoreConsecutiveComments: true,
        ignoreInlineComments: true,
        // Forgive some additional common patterns arising from temporarily commenting out lines of code
        ignorePattern: String.raw`if|else|await|const|let|var|import|export|pragma|ignore|prettier-ignore|c8|type-coverage:`,
      },
    ],
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'max-params': ['warn', { max: 8 }],
    'no-await-in-loop': 'off',
    'no-unreachable': 'warn', // TSConfig must have allowUnreachableCode: false, this is preferable because it will flag but not spontaneously delete unreachable code
    'no-warning-comments': 'off',
    'node/hashbang': 'off',
    'node/no-extraneous-import': 'off',
    'node/no-missing-import': 'off', // Trouble resolving in ts
    'node/no-process-exit': 'off', // Duplicated in unicorn
    'node/no-unsupported-features/node-builtins': ['error', { ignores: ['fs/promises.glob'] }],
    'sort-imports': 'off', // Conflicts with perfectionist/sort-imports (but never enabled)
    'ts/adjacent-overload-signatures': 'off', // Conflicts with perfectionist/sort-interfaces
    'ts/naming-convention': [
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
      'error',
      // Group selectors
      {
        format: ['camelCase'],
        // Matches everything
        selector: 'default',
      },
      {
        format: null,
        modifiers: ['requiresQuotes'],
        // Forgive quoted things
        selector: 'default',
      },
      {
        format: ['StrictPascalCase'],
        // Matches the same as class, enum, interface, typeAlias, typeParameter
        selector: 'typeLike',
      },
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        // Matches the same as function, parameter and variable
        selector: 'variableLike',
        trailingUnderscore: 'allow',
      },
      {
        format: ['camelCase', 'StrictPascalCase'],
        selector: 'import',
      },
      {
        format: ['camelCase', 'StrictPascalCase'],
        modifiers: ['destructured'],
        // Allow Component import
        selector: 'variable',
      },
      {
        format: ['UPPER_CASE', 'camelCase'],
        modifiers: ['const', 'exported'],
        // Allow UPPER_CASE const exports
        selector: 'variable',
      },
    ],
    'ts/no-non-null-assertion': 'off',
    'ts/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_$',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'ts/sort-type-constituents': 'off', // Conflicts with perfectionist/sort-intersection-types
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-object-as-default-parameter': 'off',
    'unicorn/prefer-top-level-await': 'off',
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
  },
};

/**
 * Disable typechecked rules shared by JS and TS scripts
 */
export const sharedScriptDisableTypeCheckedRules: Rules = {
  ...eslintTypescriptDisableTypeCheckedRules,
  ...envsaSharedDisableTypeCheckedRules,
};
