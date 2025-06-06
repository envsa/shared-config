/* eslint-disable ts/no-deprecated */
import { flatConfigsToRulesDTS } from 'eslint-typegen/core';
import { builtinRules } from 'eslint/use-at-your-own-risk';
import fs from 'node:fs/promises';
import { combine, disables, html, ignores, js, json, md, svelte, test, ts, yaml } from '../src';

const configs = await combine(
  {
    plugins: {
      '': {
        rules: Object.fromEntries(builtinRules.entries()),
      },
    },
  },
  disables(),
  html(),
  ignores(),
  js(),
  json(),
  md(),
  svelte(),
  test(),
  ts(),
  yaml(),
);

const configNames = configs.map((index) => index.name).filter(Boolean) as string[];

let dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false,
});

dts = dts.replace('/* eslint-disable */\n', '');
dts = dts.replace('/* prettier-ignore */\n', '');

dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((index) => `'${index}'`).join(' | ')}
`;

await fs.writeFile('src/typegen.d.ts', dts);
