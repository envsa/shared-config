import { GLOB_YAML } from '../globs';
import { yamlRecommendedRules } from '../presets';
import type { OptionsOverrides, TypedFlatConfigItem } from '../types';
import { interopDefault } from '../utils';

export async function yaml(options: OptionsOverrides = {}): Promise<TypedFlatConfigItem[]> {
  const { overrides = {} } = options;

  const files = [GLOB_YAML];

  const [pluginYaml, parserYaml] = await Promise.all([
    interopDefault(import('eslint-plugin-yml')),
    interopDefault(import('yaml-eslint-parser')),
  ] as const);

  return [
    {
      name: 'envsa/yaml/setup',
      plugins: {
        yaml: pluginYaml,
      },
    },
    {
      files,
      languageOptions: {
        parser: parserYaml,
      },
      name: 'envsa/yaml/rules',
      rules: {
        ...yamlRecommendedRules,
        ...overrides,
      },
    },
  ];
}
