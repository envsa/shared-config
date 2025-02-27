import { type Config as MdatConfig } from 'mdat';
import { mergeConfigs } from 'mdat';

const sharedMdatConfig: MdatConfig = {
  rules: {
    'shared-config':
      '## Project configuration\n\nThis project uses [@envsa/shared-config](https://github.com/envsa/shared-config) to consolidate various linting and formatting tool configurations under a single dependency and the CLI command `envsa`. (ESLint, Prettier, CSpell, etc.)',
  },
};

/**
 * **\@Envsa's Shared Mdat Configuration**
 * @see [@envsa/mdat-config](https://github.com/envsa/shared-config/tree/main/packages/mdat-config)
 * @see [@envsa/shared-config](https://github.com/envsa/shared-config)
 * @example
 * ```ts
 *  export default mdatConfig({
 * 	rules: {
 * 		test: '**This is a test rule.**',
 * 	},
 * })
 * ```
 */
export function mdatConfig(config?: MdatConfig): MdatConfig {
  return mergeConfigs(sharedMdatConfig, config ?? {});
}

export default sharedMdatConfig;
