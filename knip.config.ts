import { knipConfig } from '@envsa/knip-config';

export default knipConfig({
  ignore: ['**/init/**', 'test/fixtures/**'],
  ignoreBinaries: ['ksdiff'],
  ignoreDependencies: [
    '@envsa/repo-config', // Technically not needed?
    '@envsa/typescript-config', // Technically not needed?
    '@prettier/plugin-php',
    '@prettier/plugin-xml',
    '@types/eslint-config-prettier',
    '@zackad/prettier-plugin-twig',
    'case-police',
    'chalk',
    'cspell-lib',
    'cspell',
    'eslint-config-prettier',
    'eslint-config-xo-typescript',
    'globby',
    'mdat',
    'prettier-plugin-packagejson',
    'prettier-plugin-sh',
    'prettier-plugin-toml',
    'prettier-plugin-yaml',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-svelte',
    'stylelint-config-html',
    'stylelint-config-standard',
    'stylelint',
  ],
});
