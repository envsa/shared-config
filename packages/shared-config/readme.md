<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->

<!-- title { prefix: "🔬 " } -->

# 🔬 @envsa/shared-config

<!-- /title -->

<!-- badges -->

[![NPM Package @envsa/shared-config](https://img.shields.io/npm/v/@envsa/shared-config.svg)](https://npmjs.com/package/@envsa/shared-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- /badges -->

<!-- description -->

**A collection of shared configurations for various linters and formatting tools. All managed as a single dependency, and invoked via a single command.**

<!-- /description -->

<!-- table-of-contents { depth: 2 } -->

## Table of contents

- [Overview](#overview)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Implementation notes](#implementation-notes)
- [Development notes](#development-notes)
- [Credits](#credits)
- [License](#license)

<!-- /table-of-contents -->

## Overview

This project attempts to consolidate most of the configuration and tooling shared by my open-source and internal TypeScript / Node based projects into a single dependency.

### Tools

It takes care of dependencies and configurations for the following tools:

- [CSpell](https://cspell.org)
- [ESLint](https://eslint.org) (including Svelte, and TypeScript support)
- [mdat](https://github.com/kitschpatrol/mdat)
- [Prettier](https://prettier.io) (including a bunch of extra plugins)
- [Stylelint](https://stylelint.io)
- [VS Code](https://code.visualstudio.com) (extension recommendations and extension settings)
- Minimal repo boilerplate (`.npmrc`, `.gitignore`, etc.)

### Packages

This readme is for the [`@envsa/shared-config`](https://www.npmjs.com/package/@envsa/shared-config) package, which depends on a number of tool-specific packages included in the [`kitschpatrol/shared-config`](https://github.com/kitschpatrol/shared-config) monorepo on GitHub, each of which is documented in its respective readme, linked below:

- [`@envsa/cspell-config`](/packages/cspell-config/readme.md)
- [`@envsa/eslint-config`](/packages/eslint-config/readme.md)
- [`@envsa/mdat-config`](/packages/mdat-config/readme.md)
- [`@envsa/prettier-config`](/packages/prettier-config/readme.md)
- [`@envsa/repo-config`](/packages/repo-config/readme.md)
- [`@envsa/stylelint-config`](/packages/stylelint-config/readme.md)

Any of these may be installed and run on their own via CLI if desired. However, in general, the idea is to use `@envsa/shared-config` to easily run them all simultaneously over a repo with a single command with options to either check or (where possible) fix problems, with output aggregated into a single report.

## Getting started

### Dependencies

Node 18+ and [pnpm](https://pnpm.io) are required. It probably works with NPM and yarn, but I haven't tested it.

### Installation

#### Quick start from scratch:

Bootstrap a new project and open in VS Code:

```sh
git init && pnpm init && pnpm pkg set type="module" && pnpm dlx @envsa/repo-config --init && pnpm add -D @envsa/shared-config && pnpm shared-config --init && pnpm i && code .
```

#### Quick add to an existing project:

This might overwrite certain config files, so commit first:

```sh
pnpm dlx @envsa/repo-config --init && pnpm i && pnpm add -D @envsa/shared-config && pnpm shared-config --init
```

#### Step-by-step:

1. Install the requisite `.npmrc`:

   ```sh
   pnpm dlx @envsa/repo-config --init
   ```

2. Install the package:

   ```sh
   pnpm add -D @envsa/shared-config
   ```

3. Add default config files for all the tools to your project root:

   ```sh
   pnpm shared-config --init
   ```

4. Add helper scripts to your `package.json`:

   These work a bit like [npm-run-all](https://github.com/mysticatea/npm-run-all) to invoke all of the bundled tools.

   ```json
   "scripts": {
     "format": "shared-config --fix",
     "lint": "shared-config --lint",
   }
   ```

## Usage

Various VS Code plugins should "just work".

To lint your entire project, after configuring the `package.json` as shown above:

```sh
pnpm run lint
```

To run all of the tools in a _potentially destructive_ "fix" capacity:

```sh
pnpm run format
```

### CLI

<!-- cli-help cliCommand: 'shared-config' -->

#### Command: `shared-config`

A collection of shared configurations for various linters and formatting tools. All managed as a single dependency, and invoked via a single command.

Usage:

```txt
shared-config [<file|glob> ...]
```

| Option                   | Argument | Description                                                      |
| ------------------------ | -------- | ---------------------------------------------------------------- |
| `--check`<br>`-c`        |          | Check for and report issues. Same as `shared-config`.            |
| `--fix`<br>`-f`          |          | Fix all auto-fixable issues, and report the un-fixable.          |
| `--init`<br>`-i`         |          | Initialize by copying starter config files to your project root. |
| `--print-config`<br>`-p` | `<path>` | Print the effective configuration at a certain path.             |
| `--help`<br>`-h`         |          | Print this help info.                                            |
| `--version`<br>`-v`      |          | Print the package version.                                       |

<!-- /cli-help -->

Recall that the `@envsa/shared-config` package aggregates integration and invocation of the other tool-specific packages in this monorepo. Running a cli command on `shared-config` effectively runs the same command against all the tool-specific packages.

## Implementation notes

### Package architecture

Each package has a simple `/src/cli.ts` file which defines the behavior of its eponymous binary. The build step turns these into node "binary" scripts, providing default implementations where feasible.

The monorepo must be kept intact, as the sub-packages depend on scripts in the parent during build.

### Hoisting caveats

Pnpm considers module hoisting harmful, and I tend to agree, but certain exceptions are carved out as necessary:

- CSpell, mdat, ESLint, and Prettier all need to be hoisted via `public-hoist-pattern` to be accessible in `pnpm exec` scripts and to VS Code plugins.

- Even basic file-only packages like `repo-config` seem to need to be hoisted via for their bin scripts to be accessible via `pnpm exec`

- `prettier` and `eslint` packages are [hoisted by default](https://pnpm.io/npmrc#public-hoist-pattern) in `pnpm`

## Development notes

The repo uses placeholders for the bin script for each tool to avoid circular dependency issues during `pnpm install`.

To tell git to ignore changes to the placeholders, run `pnpm run bin-ignore`.

For local development via `pnpm`, use `file:` dependency protocol instead of `link:`

Something to investigate: An [approach](https://github.com/antfu/eslint-config#vs-code-support-auto-fix) to ignoring style rules in VS Code, and possibly migrate all style to

## Credits

[Eric Mika](https://github.com/kitschpatrol) is the author of the original [@kitschpatrol/shared-config](https://github.com/kitschpatrol/shared-config) project on which this is based.

<!-- license -->

## License

[MIT](license.txt) © Liam Rella

<!-- /license -->
