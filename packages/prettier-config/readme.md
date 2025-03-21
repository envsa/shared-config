<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->

<!-- title -->

# @envsa/prettier-config

<!-- /title -->

<!-- badges -->

[![NPM Package @envsa/prettier-config](https://img.shields.io/npm/v/@envsa/prettier-config.svg)](https://npmjs.com/package/@envsa/prettier-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- /badges -->

<!-- description -->

**Prettier configuration for @envsa/shared-config.**

<!-- /description -->

## Overview

It's a shared [Prettier](https://prettier.io) config, plus a command-line tool `envsa-prettier` to perform Prettier-related project initialization, linting, and fixing.

<!-- recommendation -->

> [!IMPORTANT]
>
> **You can use this package on its own, but it's recommended to use [`@envsa/shared-config`](https://www.npmjs.com/package/@envsa/shared-config) instead for a single-dependency and single-package approach to linting and fixing your project.**
>
> This package is included as a dependency in [`@envsa/shared-config`](https://www.npmjs.com/package/@envsa/shared-config), which also automatically invokes the command line functionality in this package via its `envsa` command

<!-- /recommendation -->

## Setup

To use just this Prettier config in isolation:

1. Install the `.npmrc` in your project root. This is required for correct PNPM behavior:

   ```sh
   pnpm dlx @envsa/repo-config init
   ```

2. Add the package:

   ```sh
   pnpm add -D @envsa/prettier-config
   ```

3. Add the starter `prettier.config.js` and `.prettierignore` files to your project root, and add any customizations you'd like:

   ```sh
   pnpm exec envsa-prettier init
   ```

## Usage

The Prettier binary should be picked up automatically by VS Code plugins.

You can call it directly, or use the script bundled with the config.

Integrate with your `package.json` scripts as you see fit, for example:

```json
{
  "scripts": {
    "lint": "envsa-prettier lint",
    "fix": "envsa-prettier fix"
  }
}
```

You might need to pass certain plugins in explicitly if you're calling `prettier` directly. The `envsa-prettier fix` and `envsa-prettier lint` scripts take care of this for you.

### Configuration

To create a `prettier.config.js` in your project root:

```sh
pnpm exec envsa-prettier init
```

(Note that this will delete the `prettier` property in your `package.json`!)

_Or_

To create a `prettier` property in `package.json`:

```sh
pnpm exec envsa-prettier init --location package
```

(Note that this will delete the `prettier.config.js` file in your project root!)

### CLI

<!-- cli-help -->

#### Command: `envsa-prettier`

Envsa's Prettier shared configuration tools.

This section lists top-level commands for `envsa-prettier`.

Usage:

```txt
envsa-prettier <command>
```

| Command        | Argument    | Description                                                                                                                            |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `init`         |             | Initialize by copying starter config files to your project root or to your package.json file.                                          |
| `lint`         | `[files..]` | Check that files are formatted according to your Prettier configuration. Matches files below the current working directory by default. |
| `fix`          | `[files..]` | Format files according to your Prettier configuration. Matches files below the current working directory by default.                   |
| `print-config` |             | Print the effective Prettier configuration. Package-scoped.. Searches up to the root of a monorepo if necessary..                      |

| Option              | Description         | Type      |
| ------------------- | ------------------- | --------- |
| `--help`<br>`-h`    | Show help           | `boolean` |
| `--version`<br>`-v` | Show version number | `boolean` |

_See the sections below for more information on each subcommand._

#### Subcommand: `envsa-prettier init`

Initialize by copying starter config files to your project root or to your package.json file.

Usage:

```txt
envsa-prettier init
```

| Option              | Description         | Type                 | Default  |
| ------------------- | ------------------- | -------------------- | -------- |
| `--location`        | TK                  | `"file"` `"package"` | `"file"` |
| `--help`<br>`-h`    | Show help           | `boolean`            |          |
| `--version`<br>`-v` | Show version number | `boolean`            |          |

#### Subcommand: `envsa-prettier lint`

Check that files are formatted according to your Prettier configuration. Matches files below the current working directory by default.

Usage:

```txt
envsa-prettier lint [files..]
```

| Positional Argument | Description                    | Type    | Default |
| ------------------- | ------------------------------ | ------- | ------- |
| `files`             | Files or glob pattern to lint. | `array` | `"."`   |

| Option              | Description         | Type      |
| ------------------- | ------------------- | --------- |
| `--help`<br>`-h`    | Show help           | `boolean` |
| `--version`<br>`-v` | Show version number | `boolean` |

#### Subcommand: `envsa-prettier fix`

Format files according to your Prettier configuration. Matches files below the current working directory by default.

Usage:

```txt
envsa-prettier fix [files..]
```

| Positional Argument | Description                   | Type    | Default |
| ------------------- | ----------------------------- | ------- | ------- |
| `files`             | Files or glob pattern to fix. | `array` | `"."`   |

| Option              | Description         | Type      |
| ------------------- | ------------------- | --------- |
| `--help`<br>`-h`    | Show help           | `boolean` |
| `--version`<br>`-v` | Show version number | `boolean` |

#### Subcommand: `envsa-prettier print-config`

Print the effective Prettier configuration. Package-scoped.. Searches up to the root of a monorepo if necessary..

Usage:

```txt
envsa-prettier print-config
```

| Option              | Description         | Type      |
| ------------------- | ------------------- | --------- |
| `--help`<br>`-h`    | Show help           | `boolean` |
| `--version`<br>`-v` | Show version number | `boolean` |

<!-- /cli-help -->

## Credits

[Eric Mika](https://github.com/kitschpatrol) is the author of the original [@kitschpatrol/shared-config](https://github.com/kitschpatrol/shared-config) project on which this is based.

<!-- license -->

## License

[MIT](license.txt) © Liam Rella

<!-- /license -->
