import type { Config as StylelintConfig } from 'stylelint';
import { propertyGroups } from 'stylelint-config-clean-order';

const propertiesOrder = propertyGroups.map((properties) => ({
  emptyLineBefore: 'never', // Don't add empty lines between order groups.
  noEmptyLinesBetween: true,
  properties,
}));

const acceptedAtRules = ['tailwind', 'apply', 'variants', 'responsive', 'screen'];

const sharedStylelintConfig: StylelintConfig = {
  extends: ['stylelint-config-clean-order', 'stylelint-config-html'],
  overrides: [
    {
      files: ['**/*.css'],
      extends: ['stylelint-config-standard'],
      rules: {
        'at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: [...acceptedAtRules],
          },
        ],
        'at-rule-no-deprecated': [
          true,
          {
            ignoreAtRules: ['apply'],
          },
        ],
      },
    },
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
      rules: {
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: [...acceptedAtRules],
          },
        ],
        'scss/load-partial-extension': 'never',
      },
    },
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested', 'blockless-after-same-name-blockless'],
        ignoreAtRules: ['else', 'apply'],
      },
    ],
    'declaration-empty-line-before': 'never',
    'import-notation': 'string',
    'no-descending-specificity': [true, { ignore: ['selectors-within-list'] }],
    'no-invalid-position-at-import-rule': [true, { ignoreAtRules: ['tailwind'] }],
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'error',
        unspecified: 'bottomAlphabetical',
      },
    ],
    /** Selector class pattern must match [BEM CSS](https://en.bem.info/methodology/css) - [Regex](https://regexr.com/3apms) */
    'selector-class-pattern': [
      '^[a-z]([-]?[a-z0-9]+)*(__[a-z0-9]([-]?[a-z0-9]+)*)?(--[a-z0-9]([-]?[a-z0-9]+)*)?$',
      {
        /** This option will resolve nested selectors with & interpolation. - https://stylelint.io/user-guide/rules/selector-class-pattern/#resolvenestedselectors-true--false-default-false */
        resolveNestedSelectors: true,
        /** Custom message */
        message(selectorValue: string) {
          return `Expected class selector "${selectorValue}" to match BEM CSS pattern https://en.bem.info/methodology/css. Selector validation tool: https://regexr.com/3apms`;
        },
      },
    ],
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
  },
};

/**
 * **\@Envsa's Shared Stylelint Configuration**
 * @see [@envsa/stylelint-config](https://github.com/envsa/shared-config/tree/main/packages/stylelint-config)
 * @see [@envsa/shared-config](https://github.com/envsa/shared-config)
 * @example
 * ```js
 * import { stylelintConfig } from '@envsa/stylelint-config'
 *
 * export default stylelintConfig({
 * 	ignoreFiles: ['example.html'],
 * 	rules: {
 * 		'alpha-value-notation': 'number',
 * 		'selector-class-pattern': null,
 * 	},
 * })
 * ```
 */
export function stylelintConfig(config?: StylelintConfig): StylelintConfig {
  return {
    extends: '@envsa/stylelint-config',
    ...config,
  };
}

export default sharedStylelintConfig;
