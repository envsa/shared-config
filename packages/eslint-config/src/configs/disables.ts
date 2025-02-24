import type { Rules, TypedFlatConfigItem } from '../types';
import { prettierRules } from '../presets/prettier';

/**
 * Final configuration pass to disable specific rules in specific contexts.
 */
export async function disables(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      files: ['**/*.d.?([cm])ts'],
      name: 'envsa/disabled/dts',
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        // 'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
      },
    },
    {
      files: ['**/*.cjs'],
      name: 'envsa/disables/cjs',
      rules: {
        'ts/no-require-imports': 'off',
      },
    },
    {
      name: 'envsa/disables/prettier',
      rules: {
        ...(prettierRules as Rules),
      },
    },
  ];
}
