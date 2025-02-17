<!-- title -->

<!-- badges -->

<!-- description -->

## Overview

It's a shared [TypeScript](https://www.typescriptlang.org/) `tsconfig.json` config, plus a command-line tool envsa-typescript to perform TypesScript-related validation and linting.

<!-- recommendation -->

## Setup

> [!NOTE]
>
> The package treats `typescript` as a peer dependency - it expects you to have `typescript` installed in your project.

To use just this TypeScript config in isolation:

1. Install the `.npmrc` in your project root. This is required for correct PNPM behavior:

```sh
pnpm dlx @envsa/repo-config init
```

2. Add the package:

```sh
pnpm add -D @envsa/typescript-config
```

3. Add the starter `tsconfig.json` and `tsconfig.build.json` files to your project root, and add any customizations you'd like:

```sh
pnpm exec envsa-typescript init
```

## Usage

You can call `envsa-typescript` directly, or use the script bundled with the config.
Integrate wih your `package.json` script as you see fit, for example:

```json
{
  "scripts": {
    "lint": "envsa-typescript lint"
  }
}
```

### Ignoring files

See the `tsconfig.json` [`exclude`](https://www.typescriptlang.org/tsconfig/#exclude) key.
`.gitignore` files are not ignored.

### Ignoring code

See [the TypeScript directive comments documentation](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#improved-checking-for-js-files) for more details.

Entire files (at top):

`/* @ts-nocheck */`

Next line:

`/* @ts-ignore */`

or

`/* @ts-expect-error - reason */`

### CLI

<!-- cli-help -->

## Notes

### General

- [tsconfig Cheat Sheet](https://www.totaltypescript.com/tsconfig-cheat-sheet)

### Other shared tsconfig projects

- [tsconfig/bases](https://github.com/tsconfig/bases)
- [sindresorhus/tsconfig](https://github.com/sindresorhus/tsconfig)
- [total-typescript/tsconfig](https://github.com/total-typescript/tsconfig)

### Future integrations

- [Are The Types Wrong](https://github.com/arethetypeswrong/arethetypeswrong.github.io),\
  e.g. `attw --format ascii --no-summary --profile esm-only --pack .`

## Credits

[Eric Mika](https://github.com/kitschpatrol) is the author of the original [@kitschpatrol/shared-config](https://github.com/kitschpatrol/shared-config) project on which this is based.

<!-- license -->
