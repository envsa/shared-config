import { eslintConfig } from '@envsa/eslint-config';

export default eslintConfig(
  {
    svelte: true,
    ignores: [
      'bin/',
      'packages/eslint-config/src/typegen.d.ts',
      'test/fixtures/input/*',
      'test/fixtures/output-fixed-auto/*',
    ],
    ts: {
      overrides: {
        'depend/ban-dependencies': [
          'error',
          {
            allowed: ['fs-extra', 'execa'],
          },
        ],
      },
    },
    type: 'lib',
  },
  {
    files: ['packages/eslint-config/src/presets/**.*'],
    rules: {
      'ts/naming-convention': 'off',
      'unicorn/no-null': 'off',
    },
  },
  {
    files: ['packages/eslint-config/src/configs/**.*'],
    rules: {
      'ts/require-await': 'off',
      'unicorn/no-null': 'off',
    },
  },
  {
    // Ignore template package.json fragment files
    files: ['packages/*/init/package.json'],
    rules: {
      'json-package/require-author': 'off',
      'json-package/require-keywords': 'off',
      'json-package/require-name': 'off',
      'json-package/require-version': 'off',
      'json-package/valid-package-definition': 'off',
    },
  },
  {
    // Ignore comments in vscode json files even if they aren't in the root
    files: ['**/.vscode/**/*.json'],
    rules: {
      'json/no-comments': 'off',
    },
  },
);
