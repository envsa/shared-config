# @kitschpatrol/remark-config

## Overview

It's a shared [Remark](https://github.com/remarkjs/remark/blob/main/packages/remark-cli/readme.md#example-config-files-json-yaml-js) config for linting.

**See [`@kitschpatrol/shared-config`](https://www.npmjs.com/package/@kitschpatrol/shared-config) for the recommended single-package approach.**

## Setup

To use just this Remark config in isolation:

1. Install the `.npmrc` in your project root. This is required for correct PNPM behavior:

   ```sh
   pnpm dlx @kitschpatrol/npm-config
   ```

2. Add the package:

   ```sh
   pnpm add -D @kitschpatrol/remark-config
   ```

3. Add the starter `.remarkrc.js` and files to your project root, and add any customizations you'd like:

   ```sh
   pnpm exec remark-config --init
   ```

## Usage

The Remark binary should be picked up automatically by VSCode plugins.

You can call it directly, but it's recommended to use the script bundled with the shared config to invoke the remark lint rules through `eslint`.

Integrate with your `package.json` scripts as you see fit, for example:

```json
...
"scripts": {
  "lint": "p remark . --quiet --frail"
}
...
```
