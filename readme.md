<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->

<!-- title { prefix: "🔬 " } -->

# 🔬 @envsa/shared-config

<!-- /title -->

<!-- badges -->

[![NPM Package @envsa/shared-config](https://img.shields.io/npm/v/@envsa/shared-config.svg)](https://npmjs.com/package/@envsa/shared-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- /badges -->

<!-- description -->

**A collection of shared configurations, linters and formatting tools for TypeScript projects. All managed as a single dependency, and invoked via a single command.**

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

This project attempts to consolidate most of the configuration and tooling shared by my open-source and internal TypeScript / Node based projects into a single dependency with a single CLI meta-command to lint and fix issues.

By installing `@envsa/shared-config` and then running `envsa`, you can run a half-dozen pre-configured code quality and linting tools in one shot. This spares you from cluttering your project's `devDependencies` with packages tangential to the task at hand.

If you don't plan to customize tool configurations, `@envsa/shared-config init` exposes an option to store references to each tool's shared configuration in your `package.json` instead of in files in your project root (at least where permitted by the tool). This can save a bit of file clutter in your project's root directory, at the expense of the immediate discoverability of the tools.

In addition, each tool exports a typed configuration factory function to simplify specifying and extending the default configuration.

### Tools

It takes care of dependencies, configuration, invocation, and reporting for the following tools:

- [ESLint](https://eslint.org) (including Svelte, and TypeScript support - including type-checked rules)
- [Prettier](https://prettier.io) (including a bunch of extra plugins)
- [Stylelint](https://stylelint.io)
- [TypeScript](https://www.typescriptlang.org/) (including a shared TSConfig)
- [CSpell](https://cspell.org) (bundled with a number of custom dictionaries, and a custom unused-word detector)
- [Case Police](https://github.com/antfu/case-police)
- [Knip](https://knip.dev/)
- [VS Code](https://code.visualstudio.com) (extension recommendations, extension settings and useful snippets)
- [mdat](https://github.com/kitschpatrol/mdat) (markdown templating and expansion tool)
- [remarklint](https://github.com/remarkjs/remark-lint)
- [browserslist](https://browsersl.ist/) for unified browser support across projects
- Minimal repo boilerplate (`.npmrc`, `.gitignore`, etc.)

### Packages

This particular readme is for the [`@envsa/shared-config`](https://www.npmjs.com/package/@envsa/shared-config) package, which depends on a number of tool-specific packages included in the [`envsa/shared-config`](https://github.com/envsa/shared-config) monorepo on GitHub, each of which is documented in additional detail its respective readme.

#### Primary package

- [`@envsa/shared-config`](https://github.com/envsa/shared-config/blob/main/packages/shared-config/readme.md) (`envsa` command)

#### Sub-packages

- [`@envsa/browserslist-config`](https://github.com/envsa/shared-config/blob/main/packages/browserslist-config/readme.md) (`envsa-browserslist` command)
- [`@envsa/cspell-config`](https://github.com/envsa/shared-config/blob/main/packages/cspell-config/readme.md) (`envsa-cspell` command)
- [`@envsa/eslint-config`](https://github.com/envsa/shared-config/blob/main/packages/eslint-config/readme.md) (`envsa-eslint` command)
- [`@envsa/knip-config`](https://github.com/envsa/shared-config/blob/main/packages/knip-config/readme.md) (`envsa-knip` command)
- [`@envsa/mdat-config`](https://github.com/envsa/shared-config/blob/main/packages/mdat-config/readme.md) (`envsa-mdat` command)
- [`@envsa/prettier-config`](https://github.com/envsa/shared-config/blob/main/packages/prettier-config/readme.md) (`envsa-prettier` command)
- [`@envsa/remark-config`](https://github.com/envsa/shared-config/blob/main/packages/remark-config/readme.md) (`envsa-remark` command)
- [`@envsa/repo-config`](https://github.com/envsa/shared-config/blob/main/packages/repo-config/readme.md) (`envsa-repo` command)
- [`@envsa/stylelint-config`](https://github.com/envsa/shared-config/blob/main/packages/stylelint-config/readme.md) (`envsa-stylelint` command)
- [`@envsa/typescript-config`](https://github.com/envsa/shared-config/blob/main/packages/typescript-config/readme.md) (`envsa-typescript` command)

> [!IMPORTANT]
>
> Any of these packages may be installed and run on their own via CLI if desired. However, in general, the idea is to use `@envsa/shared-config` to easily run them all simultaneously over a repo with a single command with options to either check or (where possible) fix problems, with output aggregated into a single report.

Running `envsa <command>` calls the same command across the entire collection of sub-packages.

So assuming you've installed `@envsa/shared-config`...

Running:

```sh
envsa init
```

Is the same as running:

```sh
envsa-repo init
envsa-mdat init
envsa-typescript init
envsa-eslint init
envsa-stylelint init
envsa-cspell init
envsa-knip init
envsa-remark init
envsa-prettier init
envsa-browserslist init
```

_(Sub-commands are always executed in the above order.)_

The top-level `envsa` command also takes care of some nuances in terms of _which_ sub-packages implement _which_ commands, and which subcommands take arguments.

## Getting started

### Dependencies

Node 22+ and [pnpm](https://pnpm.io) 10+ are required. It probably works with NPM and yarn, but I haven't tested it.

### Installation

#### Quick start from scratch:

Bootstrap a new project and open in VS Code:

```sh
git init && pnpm init && pnpm pkg set type="module" && pnpm dlx @envas/repo-config init && pnpm add -D @envas/shared-config && pnpm envsa init --location package && pnpm i && code .
```

The `--location package` flag will put as much configuration in your `package.json` as possible instead of in discrete files in your project root. This saves some clutter but can make it clunkier to extend or customize configurations. At any point, you can call `envsa init` with or without a `--location package` or `--location file` flag to reinitialize your configuration files in one place ot he other to.

#### Quick add to an existing project:

This might overwrite certain config files, so commit first:

```sh
pnpm dlx @envsa/repo-config init && pnpm i && pnpm add -D @envsa/shared-config && pnpm envsa init --location package
```

#### Step-by-step:

1. Install the requisite `.npmrc`:

   ```sh
   pnpm dlx @envsa/repo-config init
   ```

2. Install the package:

   ```sh
   pnpm add -D @envsa/shared-config
   ```

3. Add default config files for all the tools to your project root:

   ```sh
   pnpm envsa init
   ```

   Or, if you don't plan to customize tool configurations, you might want to put as much config as possible under tool-specific keys in 'package.json':

   ```sh
   pnpm envsa init --location package
   ```

4. Add helper scripts to your `package.json`:

   These work a bit like [npm-run-all](https://github.com/mysticatea/npm-run-all) to invoke all of the bundled tools.

   ```json
   {
     "scripts": {
       "fix": "envsa fix",
       "lint": "envsa lint"
     }
   }
   ```

5. Set up GitHub action credentials (if desired)

   The GitHub actions included in @envsa/repo-config require permissions to create releases and update your repository metadata. You can add these through the GitHub website under the _Settings → Secrets and variables → Actions_ page under the key `PERSONAL_ACCESS_TOKEN`, or with the [GitHub CLI](https://cli.github.com/) and a credential manager like [1Password CLI](https://developer.1password.com/docs/cli/get-started/):

   ```sh
   gh secret set PERSONAL_ACCESS_TOKEN --app actions --body $(op read 'op://Personal/GitHub Mika/PERSONAL_ACCESS_TOKEN')
   ```

   See the [@envsa/repo-config readme](/packages/repo-config/readme.md#github-configuration) for more details.

## Usage

Various VS Code plugins for the bundled tools should "just work".

To check / lint your entire project, after configuring the `package.json` as shown above:

```sh
pnpm run lint
```

To run all of the tools in a _potentially destructive_ "fix" capacity:

```sh
pnpm run fix
```

### CLI

<!-- cli-help cliCommand: 'envsa' -->

#### Command: `envsa`

Run aggregated @envsa/shared-config commands.

This section lists top-level commands for `envsa`.

Usage:

```txt
envsa <command>
```

| Command        | Argument    | Description                                                                                                                                                                          |
| -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `init`         |             | Initialize configuration files for the entire suite of @envsa/shared-config tools. Will use option flags where possible if provided, but some of the invoked tools will ignore them. |
| `lint`         | `[files..]` | Lint your project with multiple tools in one go. Will use file arguments / globs where possible if provided, but some of the invoked tools only operate at the package-scope.        |
| `fix`          | `[files..]` | Fix your project with multiple tools in one go. Will use file arguments / globs where possible if provided, but some of the invoked tools only operate at the package-scope.         |
| `print-config` | `[file]`    | Print aggregated tool configuration data. Will use file arguments / globs where possible if provided, but some of the invoked tools only operate at the package-scope.               |

| Option              | Description         | Type      |
| ------------------- | ------------------- | --------- |
| `--help`<br>`-h`    | Show help           | `boolean` |
| `--version`<br>`-v` | Show version number | `boolean` |

_See the sections below for more information on each subcommand._

#### Subcommand: `envsa init`

Initialize configuration files for the entire suite of @envsa/shared-config tools. Will use option flags where possible if provided, but some of the invoked tools will ignore them.

Usage:

```txt
envsa init
```

| Option              | Description         | Type                 | Default  |
| ------------------- | ------------------- | -------------------- | -------- |
| `--location`        | TK                  | `"file"` `"package"` | `"file"` |
| `--help`<br>`-h`    | Show help           | `boolean`            |          |
| `--version`<br>`-v` | Show version number | `boolean`            |          |

#### Subcommand: `envsa lint`

Lint your project with multiple tools in one go. Will use file arguments / globs where possible if provided, but some of the invoked tools only operate at the package-scope.

Usage:

```txt
envsa lint [files..]
```

| Positional Argument | Description                    | Type    | Default |
| ------------------- | ------------------------------ | ------- | ------- |
| `files`             | Files or glob pattern to lint. | `array` | `[]`    |

| Option              | Description         | Type      |
| ------------------- | ------------------- | --------- |
| `--help`<br>`-h`    | Show help           | `boolean` |
| `--version`<br>`-v` | Show version number | `boolean` |

#### Subcommand: `envsa fix`

Fix your project with multiple tools in one go. Will use file arguments / globs where possible if provided, but some of the invoked tools only operate at the package-scope.

Usage:

```txt
envsa fix [files..]
```

| Positional Argument | Description                   | Type    | Default |
| ------------------- | ----------------------------- | ------- | ------- |
| `files`             | Files or glob pattern to fix. | `array` | `[]`    |

| Option              | Description         | Type      |
| ------------------- | ------------------- | --------- |
| `--help`<br>`-h`    | Show help           | `boolean` |
| `--version`<br>`-v` | Show version number | `boolean` |

#### Subcommand: `envsa print-config`

Print aggregated tool configuration data. Will use file arguments / globs where possible if provided, but some of the invoked tools only operate at the package-scope.

Usage:

```txt
envsa print-config [file]
```

| Positional Argument | Description                 | Type     |
| ------------------- | --------------------------- | -------- |
| `file`              | File or glob pattern to TK. | `string` |

| Option              | Description         | Type      |
| ------------------- | ------------------- | --------- |
| `--help`<br>`-h`    | Show help           | `boolean` |
| `--version`<br>`-v` | Show version number | `boolean` |

<!-- /cli-help -->

Recall that the `@kitschpatrol/shared-config` package aggregates integration and invocation of the other tool-specific packages in this monorepo. Running a cli command on `kpi` effectively runs the same command against all the tool-specific packages.

## Implementation notes

### `check` vs `lint`

This project combines a mix of tools that regard their core task variously as "linting" or "checking" code and prose.

Across all the tools, I've chosen to use the term "lint" instead of "check" to refer to the read-only evaluation process.

### Package architecture

Each package has a simple `/src/cli.ts` file which defines the behavior of its eponymous binary. The build step turns these into node "binary" scripts, providing default implementations where feasible.

The monorepo must be kept intact, as the sub-packages depend on scripts in the parent during build.

### Hoisting caveats

The pnpm authors consider module hoisting harmful, and I tend to agree, but certain exceptions are carved out as necessary and accommodated via the `.npmrc` file included in `@envsa/repo-config`:

- CSpell, remark, mdat, ESLint, and Prettier all need to be hoisted via `public-hoist-pattern` to be accessible in `pnpm exec` scripts and to VS Code plugins.

- Even basic file-only packages like `repo-config` seem to need to be hoisted via for their bin scripts to be accessible via `pnpm exec`

- In earlier version of pnpm, `prettier` and `eslint` packages were hoisted by default, but as of pnpm 10 this is [no longer the case](https://github.com/pnpm/pnpm/releases/tag/v10.0.0).

## Development notes

The repo uses placeholders for the bin script for each tool to avoid circular dependency issues during `pnpm install`.

To tell git to ignore changes to the placeholders, run `pnpm run bin-ignore`.

For local development via `pnpm`, use `file:` dependency protocol instead of `link:`

Something to investigate: An [approach](https://github.com/antfu/eslint-config#vs-code-support-auto-fix) to ignoring style rules in VS Code, and possibly migrate all style handling to eslint instead of prettier.

## Credits

[Eric Mika](https://github.com/kitschpatrol) is the author of the original [@kitschpatrol/shared-config](https://github.com/kitschpatrol/shared-config) project on which this is based.

<!-- license -->

## License

[MIT](license.txt) © Liam Rella

<!-- /license -->
