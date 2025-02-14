import type { CSpellUserSettings as CspellConfig } from '@cspell/cspell-types';

const sharedCspellConfig: CspellConfig = {
  enabled: true,
  enableGlobDot: false,
  enableFiletypes: ['twig', 'md', 'svelte'],
  dictionaryDefinitions: [
    {
      name: 'envsa-acronyms',
      path: '../dictionaries/envsa-acronyms.txt',
      addWords: true,
    },
    {
      name: 'envsa-files',
      path: '../dictionaries/envsa-files.txt',
      addWords: true,
    },
    {
      name: 'envsa-misc',
      path: '../dictionaries/envsa-misc.txt',
      addWords: true,
    },
  ],
  dictionaries: [
    'lorem-ipsum',
    'git',
    'npm',
    'fullstack',
    'softwareTerms',
    'envsa-acronyms',
    'envsa-brands',
    'envsa-files',
    'envsa-misc',
    'envsa-names',
    'envsa-tech',
  ],
  languageSettings: [
    {
      languageId: 'markdown',
      ignoreRegExpList: [
        '/^```(?:.|\\s)+?^```/mig', // Code fences
      ],
    },
    {
      languageId: 'twig',
      ignoreRegExpList: [String.raw`\{%\s*set\s+\w+(id|key)\s*=\s*"[^"]+"\s*%\}`],
    },
  ],
  globRoot: '/',
  ignorePaths: [
    '__snapshots__',
    '*.app',
    '*.avif',
    '*.m4a',
    '*.m4v',
    '*.mp3',
    '*.mp4',
    '*.patch',
    '*.scpt',
    '*.svg',
    '*.tif',
    '*.tldr',
    '*.3gp',
    '*.aac',
    '*.avi',
    '*.flac',
    '*.flv',
    '*.mkv',
    '*.mpeg',
    '*.oga',
    '*.ogg',
    '*.ogv',
    '*.ogx',
    '*.opus',
    '*.spx',
    '*.swf',
    '*.wav',
    'package.json',
    'patches/',
    'pnpm-lock.yaml',
  ],
  ignoreRegExpList: ['tp-.+', 'tweakpane-plugin-.+', String.raw`v2_c_\w{21}`, String.raw`\\\"id`],
  language: 'en,en-US,en-GB,en-AU',
  useGitignore: true,
  version: '0.2',
};

/**
 * **\@Envsa's Shared Cspell Configuration**
 * @see [@envsa/cspell-config](https://github.com/envsa/shared-config/packages/cspell-config)
 * @see [@envsa/shared-config](https://github.com/envsa/shared-config)
 * @example
 * ```js
 * export default cspellConfig({
 *  ignorePaths: [
 *    '/test/fixtures/input',
 *  ],
 * })
 * ```
 */
export function cspellConfig(config?: CspellConfig): CspellConfig {
  return {
    import: '@envsa/cspell-config',
    ...config,
  };
}

export default sharedCspellConfig;
