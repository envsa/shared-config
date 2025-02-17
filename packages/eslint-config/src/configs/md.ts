import * as parserMdx from 'eslint-mdx';
import * as pluginMdx from 'eslint-plugin-mdx';
import { GLOB_MARKDOWN, GLOB_MARKDOWN_CODE } from '../globs';
import type {
  OptionsOverrides,
  OptionsOverridesEmbeddedScripts,
  TypedFlatConfigItem,
} from '../types';
import { sharedScriptConfig, sharedScriptDisableTypeCheckedRules } from './shared-js-ts';

export async function md(
  options: OptionsOverrides & OptionsOverridesEmbeddedScripts = {},
): Promise<TypedFlatConfigItem[]> {
  const { overrides = {}, overridesEmbeddedScripts = {} } = options;
  const files = [GLOB_MARKDOWN];

  return [
    {
      files,
      // Need to ignore both Markdown and MDX files to successfully ignore
      // nested Markdown / MDX blocks
      ignores: [`${GLOB_MARKDOWN}/*.md`, `${GLOB_MARKDOWN}/*.mdx`],
      languageOptions: {
        ecmaVersion: 'latest',
        parser: parserMdx,
        sourceType: 'module',
      },
      name: 'envsa/markdown/remark',
      plugins: {
        ...sharedScriptConfig.plugins,
        mdx: pluginMdx,
      },
      processor: pluginMdx.createRemarkProcessor({
        // Lints code in the next pass
        lintCodeBlocks: true,
      }),
      // These apply to the remark-lint pass only!
      rules: {
        // TODO there's some issue accessing the recommended config
        // "Error: Could not find the ESLint Linter in require cache"
        'mdx/remark': 'warn',
        'unicorn/filename-case': 'error', // No shouting
        ...overrides,
      },
    },
    {
      // Includes plugins...
      ...sharedScriptConfig,
      files: [GLOB_MARKDOWN_CODE],
      languageOptions: {
        parserOptions: {
          projectServices: false,
        },
      },
      name: 'envsa/markdown/code-blocks',
      rules: {
        ...sharedScriptDisableTypeCheckedRules,
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'ts/no-unused-expressions': 'off',
        'ts/no-unused-vars': 'off',
        'unicorn/filename-case': 'off', // Don't enforce on internal code block file names
        ...overridesEmbeddedScripts,
      },
    },
  ];
}
