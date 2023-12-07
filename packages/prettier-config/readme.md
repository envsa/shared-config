# @kitschpatrol/prettier-config

## Overview

It's a shared [Prettier](https://prettier.io) config.

**See [`@kitschpatrol/shared-config`](https://www.npmjs.com/package/@kitschpatrol/shared-config) for the recommended single-package approach.**

## Setup

To use just this Prettier config in isolation:

1. Install the `.npmrc` in your project root. This is required for correct PNPM behavior:

   ```sh
   pnpm dlx @kitschpatrol/npm-config
   ```

2. Add the package:

   ```sh
   pnpm add @kitschpatrol/prettier-config
   ```

3. Add the starter `.prettierrc.js` and `.prettierignore` files to your project root, and add any customizations you'd like:

   ```sh
   pnpm exec prettier-config-init
   ```

## Usage

The Prettier binary should be picked up automatically by VSCode plugins.

Integrate with your `package.json` scripts as you see fit, for example:

```json
...
"scripts": {
  "lint": "prettier --check ."
  "format": "prettier --write ."
}
...
```

You might need to pass certain plugins in explicitly. The `shared-config-fix` and `shared-config-lint` scripts take care of this for you.

## Ruby support

Ruby formatting Expects a global Ruby install >=2.7 via `rbenv` at `~/.rbenv/shims/ruby` with the following gems:

- `bundler`
- `prettier_print`
- `syntax_tree`
- `syntax_tree-haml`
- `syntax_tree-rbs`
