/* eslint-disable ts/no-unnecessary-type-parameters */
import type { Linter } from 'eslint';
import { FlatConfigComposer } from 'eslint-flat-config-utils';
import globals from 'globals';
import { isPackageExists } from 'local-pkg';
import { disables, html, ignores, js, json, md, svelte, test, toml, ts, yaml } from './configs';
import { tsParser } from './parsers';
import type { RuleOptions } from './typegen';
import type { Awaitable, ConfigNames, OptionsConfig, TypedFlatConfigItem } from './types';
import { interopDefault, isInEditorEnvironment } from './utils';

const flatConfigProperties = [
  'name',
  'languageOptions',
  'linterOptions',
  'processor',
  'plugins',
  'rules',
  'settings',
] satisfies Array<keyof TypedFlatConfigItem>;

// Order matters
export const defaultPluginRenaming = {
  '@eslint-community/eslint-comments': 'eslint-comments',
  jsonc: 'json',
  '@html-eslint': 'html',
  'package-json': 'json-package',
  '@typescript-eslint': 'ts',
  n: 'node',
  vitest: 'test',
  yml: 'yaml',
};

export type ResolvedOptions<T> = T extends boolean ? never : NonNullable<T>;

/**
 * Construct an array of ESLint flat config items
 * @param options The options for generating the ESLint configurations.
 * @param userConfigs The user configurations to be merged with the generated configurations.
 * @returns The merged ESLint configurations.
 */
export async function eslintConfig(
  options: Omit<TypedFlatConfigItem, 'files'> & OptionsConfig = {},
  ...userConfigs: Array<
    Awaitable<
      // eslint-disable-next-line ts/no-explicit-any
      FlatConfigComposer<any, any> | Linter.Config[] | TypedFlatConfigItem | TypedFlatConfigItem[]
    >
  >
): Promise<FlatConfigComposer<TypedFlatConfigItem, ConfigNames>> {
  const { gitignore: enableGitignore = true, svelte: enableSvelte = isPackageExists('svelte') } =
    options;

  let { isInEditor } = options;
  if (isInEditor === undefined) {
    isInEditor = isInEditorEnvironment();
    if (isInEditor) {
      console.log('[@envsa/eslint-config] Detected running in editor, some rules are disabled.');
    }
  }

  const configs: Array<Awaitable<TypedFlatConfigItem[]>> = [];

  if (enableGitignore) {
    if (typeof enableGitignore === 'boolean') {
      configs.push(
        interopDefault(import('eslint-config-flat-gitignore')).then((r) => [
          r({ name: 'envsa/gitignore', strict: false }),
        ]),
      );
    } else {
      configs.push(
        interopDefault(import('eslint-config-flat-gitignore')).then((r) => [
          r({
            name: 'envsa/gitignore',
            ...enableGitignore,
          }),
        ]),
      );
    }
  }

  // Base configs
  configs.push(
    ignores(options.ignores),
    [
      {
        linterOptions: {
          reportUnusedDisableDirectives: 'error',
        },
      },
    ],
    js({
      typeAware: {
        enabled: true, // TODO check tsconfig...
        ignores: [],
      },
      ...resolveSubOptions(options, 'js'),
      overrides: getOverrides(options, 'js'),
    }),
    ts({
      typeAware: {
        enabled: true, // TODO check tsconfig...
        ignores: [],
      },
      ...resolveSubOptions(options, 'ts'),
      overrides: getOverrides(options, 'ts'),
    }),
    test({
      isInEditor,
      overrides: getOverrides(options, 'test'),
    }),
    json({
      overrides: getOverrides(options, 'json'),
    }),
    yaml({
      overrides: getOverrides(options, 'yaml'),
    }),
    toml({
      overrides: getOverrides(options, 'toml'),
    }),
    md({
      overrides: getOverrides(options, 'md'),
      overridesEmbeddedScripts: getOverridesEmbeddedScripts(options, 'md'),
    }),
    html({
      overrides: getOverrides(options, 'html'),
      overridesEmbeddedScripts: getOverridesEmbeddedScripts(options, 'html'),
    }),
  );

  // Frameworks
  if (enableSvelte) {
    configs.push(
      svelte({
        overrides: getOverrides(options, 'svelte'),
        // TODO TS flag?
      }),
    );
  }

  configs.push(disables());

  if ('files' in options) {
    throw new Error(
      '[@envsa/eslint-config] The first argument should not contain the "files" property as the options are supposed to be global. Place it in the second or later config instead.',
    );
  }

  // User can optionally pass a flat config item to the first argument
  // We pick the known  keys as ESLint would do schema validation
  const fusedConfig = flatConfigProperties.reduce<TypedFlatConfigItem>((accumulator, key) => {
    // eslint-disable-next-line ts/no-unsafe-assignment, ts/no-explicit-any
    if (key in options) accumulator[key] = options[key] as any;
    return accumulator;
  }, {});
  if (Object.keys(fusedConfig).length > 0) configs.push([fusedConfig]);

  let composer = new FlatConfigComposer<TypedFlatConfigItem, ConfigNames>();

  // Console.log('----------------------------------')
  // Resolve all configs and get all plugins

  // let plugins: Linter.Config['plugins'] = {}
  // for (const config of await Promise.all(configs)) {
  // 	for (const configItem of config) {
  // 		if (configItem.plugins !== undefined && configItem.plugins.length > 0) {
  // 			console.log(configItem.plugins)
  // 			plugins = { ...plugins, ...configItem.plugins }
  // 		}
  // 	}
  // }

  // console.log('----------------------------------')

  // console.log(plugins)

  // eslint-disable-next-line ts/no-explicit-any, ts/no-unsafe-argument
  composer = composer.append(...configs, ...(userConfigs as any));

  composer = composer.renamePlugins(defaultPluginRenaming);

  // Console.log('----------------------------------')
  // composer.toConfigs().then((configs) => {
  // 	console.log(configs)
  // })

  return composer;
}

/**
 * Get ESLint language options object.
 * @param typeAware - Whether to enable type-aware linting.
 * @param jsx - Whether to enable JSX parsing.
 */
export function getLanguageOptions(typeAware = true, jsx = false): Linter.LanguageOptions {
  return {
    ecmaVersion: 2023,
    globals: {
      ...globals.browser,
      ...globals.es2023,
      ...globals.nodeBuiltin,
    },
    // TODO Always use typescript parser to get type info for JavaScript files when checkjs is true?
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: {
        impliedStrict: true,
        jsx,
      },
      ...(typeAware
        ? {
            projectService: true,
            tsconfigRootDir: process.cwd(), // TODO import.meta.dirname preferred?
          }
        : {
            projectService: false,
          }),
      ecmaVersion: 2023,
      sourceType: 'module',
    },
  };
}

/**
 * Get the overrides for a specific key.
 * @param options The options object.
 * @param key The key to get the overrides for.
 */
export function getOverrides<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): Partial<Linter.RulesRecord & RuleOptions> {
  const sub = resolveSubOptions(options, key);
  return {
    ...('overrides' in sub ? sub.overrides : {}),
  };
}

/**
 * Get the overrides for embedded scripts for a specific key.
 * @param options The options object.
 * @param key The key to get the overrides for.
 */
export function getOverridesEmbeddedScripts<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): Partial<Linter.RulesRecord & RuleOptions> {
  const sub = resolveSubOptions(options, key);
  return {
    ...('overridesEmbeddedScripts' in sub ? sub.overridesEmbeddedScripts : {}),
  };
}

/**
 * Construct an array of ESLint flat config items.
 * @param options
 *  The options for generating the ESLint configurations.
 * @param userConfigs
 *  The user configurations to be merged with the generated configurations.
 * @returns
 *  The merged ESLint configurations.
 */

/**
 * Resolve the sub options for a specific key.
 * @param options The options object.
 * @param key The key to resolve the sub options for.
 */
export function resolveSubOptions<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): ResolvedOptions<OptionsConfig[K]> {
  // eslint-disable-next-line ts/no-unsafe-return, ts/no-explicit-any
  return typeof options[key] === 'boolean' ? ({} as any) : options[key] || {};
}
