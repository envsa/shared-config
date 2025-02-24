import type { Rules } from '../types';

export const eslintTypescriptRecommendedOverridesRules: Rules = {
  // Begin expansion '@typescript-eslint/eslint-plugin' 'eslint-recommended.overrides[0]'
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-class-assign': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  'no-import-assign': 'off',
  'no-new-symbol': 'off',
  'no-new-native-nonconstructor': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-setter-return': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
  'no-var': 'error',
  'prefer-const': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  // End expansion
};

export const eslintTypescriptStrictTypeCheckedRules: Rules = {
  // Begin expansion '@typescript-eslint/eslint-plugin' 'strict-type-checked'
  'ts/await-thenable': 'error',
  'ts/ban-ts-comment': ['error', { minimumDescriptionLength: 10 }],
  'no-array-constructor': 'off',
  'ts/no-array-constructor': 'error',
  'ts/no-array-delete': 'error',
  'ts/no-base-to-string': 'error',
  'ts/no-confusing-void-expression': 'error',
  'ts/no-deprecated': 'error',
  'ts/no-duplicate-enum-values': 'error',
  'ts/no-duplicate-type-constituents': 'error',
  'ts/no-dynamic-delete': 'error',
  'ts/no-empty-object-type': 'error',
  'ts/no-explicit-any': 'error',
  'ts/no-extra-non-null-assertion': 'error',
  'ts/no-extraneous-class': 'error',
  'ts/no-floating-promises': 'error',
  'ts/no-for-in-array': 'error',
  'no-implied-eval': 'off',
  'ts/no-implied-eval': 'error',
  'ts/no-invalid-void-type': 'error',
  'ts/no-meaningless-void-operator': 'error',
  'ts/no-misused-new': 'error',
  'ts/no-misused-promises': 'error',
  'ts/no-misused-spread': 'error',
  'ts/no-mixed-enums': 'error',
  'ts/no-namespace': 'error',
  'ts/no-non-null-asserted-nullish-coalescing': 'error',
  'ts/no-non-null-asserted-optional-chain': 'error',
  'ts/no-non-null-assertion': 'error',
  'ts/no-redundant-type-constituents': 'error',
  'ts/no-require-imports': 'error',
  'ts/no-this-alias': 'error',
  'ts/no-unnecessary-boolean-literal-compare': 'error',
  'ts/no-unnecessary-condition': 'error',
  'ts/no-unnecessary-template-expression': 'error',
  'ts/no-unnecessary-type-arguments': 'error',
  'ts/no-unnecessary-type-assertion': 'error',
  'ts/no-unnecessary-type-constraint': 'error',
  'ts/no-unnecessary-type-parameters': 'error',
  'ts/no-unsafe-argument': 'error',
  'ts/no-unsafe-assignment': 'error',
  'ts/no-unsafe-call': 'error',
  'ts/no-unsafe-declaration-merging': 'error',
  'ts/no-unsafe-enum-comparison': 'error',
  'ts/no-unsafe-function-type': 'error',
  'ts/no-unsafe-member-access': 'error',
  'ts/no-unsafe-return': 'error',
  'ts/no-unsafe-unary-minus': 'error',
  'no-unused-expressions': 'off',
  'ts/no-unused-expressions': 'error',
  'no-unused-vars': 'off',
  'ts/no-unused-vars': 'error',
  'no-useless-constructor': 'off',
  'ts/no-useless-constructor': 'error',
  'ts/no-wrapper-object-types': 'error',
  'no-throw-literal': 'off',
  'ts/only-throw-error': 'error',
  'ts/prefer-as-const': 'error',
  'ts/prefer-literal-enum-member': 'error',
  'ts/prefer-namespace-keyword': 'error',
  'prefer-promise-reject-errors': 'off',
  'ts/prefer-promise-reject-errors': 'error',
  'ts/prefer-reduce-type-parameter': 'error',
  'ts/prefer-return-this-type': 'error',
  'ts/related-getter-setter-pairs': 'error',
  'require-await': 'off',
  'ts/require-await': 'error',
  'ts/restrict-plus-operands': [
    'error',
    {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumberAndString: false,
      allowRegExp: false,
    },
  ],
  'ts/restrict-template-expressions': [
    'error',
    {
      allowAny: false,
      allowBoolean: false,
      allowNever: false,
      allowNullish: false,
      allowNumber: false,
      allowRegExp: false,
    },
  ],
  'no-return-await': 'off',
  'ts/return-await': ['error', 'error-handling-correctness-only'],
  'ts/triple-slash-reference': 'error',
  'ts/unbound-method': 'error',
  'ts/unified-signatures': 'error',
  'ts/use-unknown-in-catch-callback-variable': 'error',
  // End expansion
};

export const eslintTypescriptStylisticTypeCheckedRules: Rules = {
  // Begin expansion '@typescript-eslint/eslint-plugin' 'stylistic-type-checked'
  'ts/adjacent-overload-signatures': 'error',
  'ts/array-type': 'error',
  'ts/ban-tslint-comment': 'error',
  'ts/class-literal-property-style': 'error',
  'ts/consistent-generic-constructors': 'error',
  'ts/consistent-indexed-object-style': 'error',
  'ts/consistent-type-assertions': 'error',
  'ts/consistent-type-definitions': 'error',
  'dot-notation': 'off',
  'ts/dot-notation': 'error',
  'ts/no-confusing-non-null-assertion': 'error',
  'no-empty-function': 'off',
  'ts/no-empty-function': 'error',
  'ts/no-inferrable-types': 'error',
  'ts/non-nullable-type-assertion-style': 'error',
  'ts/prefer-find': 'error',
  'ts/prefer-for-of': 'error',
  'ts/prefer-function-type': 'error',
  'ts/prefer-includes': 'error',
  'ts/prefer-nullish-coalescing': 'error',
  'ts/prefer-optional-chain': 'error',
  'ts/prefer-regexp-exec': 'error',
  'ts/prefer-string-starts-ends-with': 'error',
  // End expansion
};

export const eslintTypescriptDisableTypeCheckedRules: Rules = {
  // Begin expansion '@typescript-eslint/eslint-plugin' 'disable-type-checked'
  'ts/await-thenable': 'off',
  'ts/consistent-return': 'off',
  'ts/consistent-type-exports': 'off',
  'ts/dot-notation': 'off',
  'ts/naming-convention': 'off',
  'ts/no-array-delete': 'off',
  'ts/no-base-to-string': 'off',
  'ts/no-confusing-void-expression': 'off',
  'ts/no-deprecated': 'off',
  'ts/no-duplicate-type-constituents': 'off',
  'ts/no-floating-promises': 'off',
  'ts/no-for-in-array': 'off',
  'ts/no-implied-eval': 'off',
  'ts/no-meaningless-void-operator': 'off',
  'ts/no-misused-promises': 'off',
  'ts/no-misused-spread': 'off',
  'ts/no-mixed-enums': 'off',
  'ts/no-redundant-type-constituents': 'off',
  'ts/no-unnecessary-boolean-literal-compare': 'off',
  'ts/no-unnecessary-condition': 'off',
  'ts/no-unnecessary-qualifier': 'off',
  'ts/no-unnecessary-template-expression': 'off',
  'ts/no-unnecessary-type-arguments': 'off',
  'ts/no-unnecessary-type-assertion': 'off',
  'ts/no-unnecessary-type-parameters': 'off',
  'ts/no-unsafe-argument': 'off',
  'ts/no-unsafe-assignment': 'off',
  'ts/no-unsafe-call': 'off',
  'ts/no-unsafe-enum-comparison': 'off',
  'ts/no-unsafe-member-access': 'off',
  'ts/no-unsafe-return': 'off',
  'ts/no-unsafe-type-assertion': 'off',
  'ts/no-unsafe-unary-minus': 'off',
  'ts/non-nullable-type-assertion-style': 'off',
  'ts/only-throw-error': 'off',
  'ts/prefer-destructuring': 'off',
  'ts/prefer-find': 'off',
  'ts/prefer-includes': 'off',
  'ts/prefer-nullish-coalescing': 'off',
  'ts/prefer-optional-chain': 'off',
  'ts/prefer-promise-reject-errors': 'off',
  'ts/prefer-readonly': 'off',
  'ts/prefer-readonly-parameter-types': 'off',
  'ts/prefer-reduce-type-parameter': 'off',
  'ts/prefer-regexp-exec': 'off',
  'ts/prefer-return-this-type': 'off',
  'ts/prefer-string-starts-ends-with': 'off',
  'ts/promise-function-async': 'off',
  'ts/related-getter-setter-pairs': 'off',
  'ts/require-array-sort-compare': 'off',
  'ts/require-await': 'off',
  'ts/restrict-plus-operands': 'off',
  'ts/restrict-template-expressions': 'off',
  'ts/return-await': 'off',
  'ts/strict-boolean-expressions': 'off',
  'ts/switch-exhaustiveness-check': 'off',
  'ts/unbound-method': 'off',
  'ts/use-unknown-in-catch-callback-variable': 'off',
  // End expansion
};
