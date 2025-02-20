import { default as pluginEslintComments } from '@eslint-community/eslint-plugin-eslint-comments';
import { default as pluginTs } from '@typescript-eslint/eslint-plugin';
import * as pluginDepend from 'eslint-plugin-depend';
import { default as pluginUnicorn } from 'eslint-plugin-unicorn';
import {
  dependRecommendedRules,
  eslintCommentsRecommendedRules,
  eslintJavascriptRecommendedRules,
  eslintTypescriptDisableTypeCheckedRules,
  eslintTypescriptRecommendedOverridesRules,
  eslintTypescriptStrictTypeCheckedRules,
  eslintTypescriptStylisticTypeCheckedRules,
  unicornRecommendedRules,
  xoJavascriptRules,
  xoTypescriptRules,
} from '../presets';
import type { Rules, TypedFlatConfigItem } from '../types';

// ---------

const envsaSharedDisableTypeCheckedRules: Rules = {
  // 'jsdoc/check-tag-names': ['error', { typed: false }],
  // 'jsdoc/no-types': 'off'
};

/**
 * Rules shared by JS and TS scripts
 * Partial rule set requires `files` and `languageOptions` keys to be set appropriately in file-specific configs
 */
export const sharedScriptConfig: TypedFlatConfigItem = {
  plugins: {
    depend: pluginDepend,
    // eslint-disable-next-line ts/no-unsafe-assignment
    'eslint-comments': pluginEslintComments,
    ts: pluginTs,
    unicorn: pluginUnicorn,
  },
  rules: {
    ...eslintJavascriptRecommendedRules,
    ...eslintTypescriptRecommendedOverridesRules,
    ...eslintTypescriptStrictTypeCheckedRules,
    ...eslintTypescriptStylisticTypeCheckedRules,
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
        ignorePattern: String.raw`if|else|await|const|let|var|import|export|pragma|ignore|prettier-ignore|c8|type-coverage`,
      },
    ],
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    'max-params': ['warn', { max: 8 }],
    'no-await-in-loop': 'off',
    'no-unreachable': 'warn', // TSConfig must have allowUnreachableCode: false, this is preferable because it will flag but not spontaneously delete unreachable code
    'no-warning-comments': 'off',
    'ts/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'ts/naming-convention': [
      // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
      'error',
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
