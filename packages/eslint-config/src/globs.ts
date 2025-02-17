export const GLOB_SRC_EXT = '?([cm][jt]s)';
export const GLOB_SRC = `**/*.${GLOB_SRC_EXT}`;

export const GLOB_JS = '**/*.?([cm])js';

export const GLOB_TS = '**/*.?([cm])ts';

export const GLOB_STYLE = '**/*.{c,le,sc}ss';
export const GLOB_CSS = '**/*.css';
export const GLOB_POSTCSS = '**/*.{p,post}css';
export const GLOB_LESS = '**/*.less';
export const GLOB_SCSS = '**/*.scss';

export const GLOB_JSON = '**/*.json';
export const GLOB_JSON5 = '**/*.json5';
export const GLOB_JSONC = '**/*.jsonc';

export const GLOB_MARKDOWN = '**/*.md';

export const GLOB_SVELTE = '**/*.svelte';
export const GLOB_YAML = '**/*.y?(a)ml';
export const GLOB_TOML = '**/*.toml';
export const GLOB_XML = '**/*.xml';
export const GLOB_SVG = '**/*.svg';
export const GLOB_HTML = '**/*.{htm?(l),twig}';
export const GLOB_GRAPHQL = '**/*.{g,graph}ql';

export const GLOB_MARKDOWN_CODE = `${GLOB_MARKDOWN}/${GLOB_SRC}`;

export const GLOB_TESTS = [
  `**/__tests__/**/*.${GLOB_SRC_EXT}`,
  `**/*.spec.${GLOB_SRC_EXT}`,
  `**/*.test.${GLOB_SRC_EXT}`,
  `**/*.bench.${GLOB_SRC_EXT}`,
  `**/*.benchmark.${GLOB_SRC_EXT}`,
];

export const GLOB_ALL_SRC = [
  GLOB_SRC,
  GLOB_STYLE,
  GLOB_JSON,
  GLOB_JSON5,
  GLOB_MARKDOWN,
  GLOB_SVELTE,
  GLOB_YAML,
  GLOB_XML,
  GLOB_HTML,
];

export const GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist',
  '**/web/assets',
  '**/package-lock.json',
  '**/yarn-lock',
  '**/yarn-lock.yaml',
  '**/bun.lockb',
  '**/bin',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.temp',
  '**/.history',
  '**/.vitepress/cache',
  '**/.svelte-kit',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.cache',
  '**/.output',
  '**/.vite-inspect',
  '**/.yarn',
  '**/vite.config/*.timestamp-*',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
];
