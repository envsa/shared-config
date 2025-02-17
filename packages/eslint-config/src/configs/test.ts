import { default as pluginTest } from '@vitest/eslint-plugin';
import { default as pluginNoOnlyTests } from 'eslint-plugin-no-only-tests';
import globals from 'globals';
import { GLOB_TESTS } from '../globs';
import { testRecommendedRules } from '../presets';
import type { OptionsIsInEditor, OptionsOverrides, TypedFlatConfigItem } from '../types';

// Hold the reference so we don't redeclare the plugin on each call
// eslint-disable-next-line ts/no-explicit-any
let _pluginTest: any;

export async function test(
  options: OptionsIsInEditor & OptionsOverrides = {},
): Promise<TypedFlatConfigItem[]> {
  const { isInEditor = false, overrides = {} } = options;

  _pluginTest ||= {
    ...pluginTest,
    rules: {
      ...pluginTest.rules,
      // Extend `test/no-only-tests` rule
      ...pluginNoOnlyTests.rules,
    },
  };

  return [
    {
      name: 'envsa/test/setup',
      plugins: {
        test: _pluginTest,
      },
      settings: {
        vitest: {
          typecheck: true,
        },
      },
    },
    {
      files: [GLOB_TESTS],
      languageOptions: {
        globals: {
          // TODO more globals?
          ...globals.vitest,
        },
      },
      name: 'envsa/test/rules',
      rules: {
        ...testRecommendedRules,
        'test/no-only-tests': isInEditor ? 'off' : 'error',
        ...overrides,
      },
    },
  ];
}
