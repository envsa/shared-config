import { getLanguageOptions } from '../factory';
import { GLOB_TS } from '../globs';
import type { OptionsOverrides, OptionsTypeAware, TypedFlatConfigItem } from '../types';
import { sharedScriptConfig, sharedScriptDisableTypeCheckedRules } from './shared-js-ts';

export async function ts(
  options: OptionsOverrides & OptionsTypeAware = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    overrides = {},
    typeAware = {
      enabled: true,
      ignores: [],
    },
  } = options;

  return [
    {
      ...sharedScriptConfig,
      files: [GLOB_TS],
      languageOptions: getLanguageOptions(typeAware.enabled, false),
      name: 'envsa/ts/rules',
      rules: {
        ...sharedScriptConfig.rules,
        ...(typeAware.enabled ? {} : sharedScriptDisableTypeCheckedRules),
        ...overrides,
      },
    },
    typeAware.enabled && typeAware.ignores.length > 0
      ? {
          files: typeAware.ignores,
          languageOptions: getLanguageOptions(false, true),
          name: 'envsa/ts/disable-type-aware',
          rules: {
            ...sharedScriptDisableTypeCheckedRules,
          },
        }
      : {},
  ];
}
