/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  bracketSpacing: true,
  overrides: [
    {
      files: '*.json5',
      options: {
        parser: 'json5',
        quoteProps: 'preserve',
        singleQuote: false,
        trailingComma: 'none',
      },
    },
    {
      files: '*.php',
      options: {
        plugins: ['@prettier/plugin-php'],
        phpVersion: '8.2',
        printWidth: 80,
        parser: 'php',
        tabWidth: 4,
        trailingCommaPHP: true,
      },
    },
    {
      files: '*.{yml,yaml}',
      options: {
        singleQuote: false,
        tabWidth: 4,
      },
    },
    {
      files: ['*rc', '*ignore', '*.sh', '*.zsh', '*.bash', '*.fish'],
      options: {
        parser: 'sh',
        plugins: ['prettier-plugin-sh'],
      },
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
        plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
      },
    },
    {
      files: '*.twig',
      options: {
        parser: 'twig',
        plugins: ['@zackad/prettier-plugin-twig'],
        twigSingleQuote: false,
        twigMultiTags: [
          'apply,endapply',
          'cache,endcache',
          'ifchildren,endifchildren',
          'nav,endnav',
          'switch,case,default,endswitch',
        ],
      },
    },
  ],
  plugins: ['@prettier/plugin-xml', 'prettier-plugin-pkg', 'prettier-plugin-tailwindcss'],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
};

export default config;
