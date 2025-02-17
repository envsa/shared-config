import { default as pluginHtml } from '@html-eslint/eslint-plugin';
import { default as parserHtml, TEMPLATE_ENGINE_SYNTAX } from '@html-eslint/parser';
import { default as pluginHtmlScript } from 'eslint-plugin-html';
import type {
  OptionsOverrides,
  OptionsOverridesEmbeddedScripts,
  TypedFlatConfigItem,
} from '../types';
// Extra src to catch html`` templates in JS and TS files
// TODO what about scripts in html`` templates?
import { GLOB_HTML } from '../globs';
import { htmlRecommendedRules } from '../presets/html';

// eslint-plugin-html lints scripts inside HTML files
// @html-eslint/parser and @html-eslint/plugin are used to lintHTML files themselves

export async function html(
  options: OptionsOverrides & OptionsOverridesEmbeddedScripts = {},
): Promise<TypedFlatConfigItem[]> {
  const { overrides = {}, overridesEmbeddedScripts = {} } = options;

  const files = [GLOB_HTML];

  return [
    {
      // Only HTML files get the HTML script parser
      files,
      name: 'envsa/html-script',
      plugins: {
        // eslint-disable-next-line ts/no-unsafe-assignment
        'html-script': pluginHtmlScript,
      },
      rules: {
        ...overridesEmbeddedScripts,
      },
    },
    {
      // Only HTML files get the HTML parser
      files,
      name: 'envsa/html/setup',
      languageOptions: {
        parser: parserHtml,
        parserOptions: {
          templateEngineSyntax: TEMPLATE_ENGINE_SYNTAX.TWIG,
        },
      },
      plugins: {
        html: pluginHtml,
      },
    },
    {
      // All files get the rules, to include templates like html
      name: 'envsa/html',
      plugins: {
        html: pluginHtml,
      },
      rules: {
        // Everything is overridden
        ...htmlRecommendedRules,

        'html/attrs-newline': 'off', // Overrides recommended
        'html/element-newline': 'off', // Overrides recommended
        'html/indent': 'off', // Overrides recommended
        'html/no-abstract-roles': 'error',
        'html/no-accesskey-attrs': 'error',
        'html/no-aria-hidden-body': 'error',
        'html/no-duplicate-attrs': 'error',
        'html/no-duplicate-id': 'error',
        'html/no-extra-spacing-attrs': 'off', // Overrides recommended
        'html/no-inline-styles': 'error',
        'html/no-multiple-h1': 'error',
        'html/no-non-scalable-viewport': 'error',
        'html/no-obsolete-tags': 'error',
        'html/no-positive-tabindex': 'error',
        'html/no-restricted-attr-values': 'error',
        'html/no-restricted-attrs': 'error',
        'html/no-script-style-type': 'error',
        'html/no-skip-heading-levels': 'error',
        'html/no-target-blank': 'error',
        'html/quotes': 'off', // Overrides recommended
        'html/require-attrs': 'error',
        'html/require-button-type': 'error',
        'html/require-closing-tags': 'off', // Overrides recommended
        'html/require-doctype': 'error',
        'html/require-frame-title': 'error',
        'html/require-img-alt': 'error',
        'html/require-lang': 'error',
        'html/require-li-container': 'error',
        'html/require-meta-charset': 'error',
        'html/require-meta-viewport': 'error',
        'html/require-title': 'error',
        ...overrides,
      },
    },
  ];
}
