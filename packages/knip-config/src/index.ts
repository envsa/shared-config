import type { KnipConfig } from 'knip';
import { deepmerge } from 'deepmerge-ts';

/**
 * Must return a POJO to be merged into package.json
 */
const sharedKnipConfig: KnipConfig = {
  entry: [
    // Default entry... not merging in from default Knip config?
    '{index,cli,main}.{js,mjs,cjs,ts,mts,cts}!',
    'src/{index,cli,main}.{js,mjs,cjs,ts,mts,cts}!',

    // Customized entries
    'src/{bin,lib,cli}/{index,cli,main}.{js,mjs,cjs,ts,mts,cts}!',
    'scripts/**/*.ts',
    'cspell.config.js',
    'eslint.config.ts',
    'mdat.config.ts',
    'prettier.config.js',
    'stylelint.config.js',
  ],
  ignoreDependencies: [
    '@envsa/cspell-config',
    '@envsa/eslint-config',
    '@envsa/knip-config',
    '@envsa/mdat-config',
    '@envsa/prettier-config',
    '@envsa/stylelint-config',
  ],
};

/**
 * **\@Envsa's Shared Knip Configuration**
 * @see [@envsa/knip-config](https://github.com/envsa/shared-config/tree/main/packages/knip-config)
 * @see [@envsa/shared-config](https://github.com/envsa/shared-config)
 * @example
 * ```ts
 * import { knipConfig } from '@envsa/knip-config'
 *
 * export default knipConfig({
 *   // Customizations here
 * })
 * ```
 */
export function knipConfig(config?: KnipConfig): KnipConfig {
  return deepmerge(sharedKnipConfig, config);
}

export default sharedKnipConfig;
