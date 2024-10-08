<!--+ Warning: Content inside HTML comment blocks was generated by mdat and may be overwritten. +-->

<!-- title -->

# @envsa/cspell-config

<!-- /title -->

<!-- badges -->

[![NPM Package @envsa/cspell-config](https://img.shields.io/npm/v/@envsa/cspell-config.svg)](https://npmjs.com/package/@envsa/cspell-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<!-- /badges -->

<!-- description -->

**CSpell configuration for @envsa/shared-config.**

<!-- /description -->

## Overview

It's a shared [CSpell](https://cspell.org) config.

**See [`@envsa/shared-config`](https://www.npmjs.com/package/@envsa/shared-config) for the recommended single-package approach.**

## Setup

To use just this CSpell config in isolation:

1. Install the `.npmrc` in your project root. This is required for correct PNPM behavior:

   ```sh
   pnpm dlx @envsa/repo-config --init
   ```

2. Add the package:

   ```sh
   pnpm add -D @envsa/cspell-config
   ```

3. Add the starter `.cspell.json` file to your project root, and add any customizations you'd like:

   ```sh
   pnpm exec cspell-config --init
   ```

## Usage

The CSpell binary should be picked up automatically by VS Code plugins.

You can call it directly, or use the script bundled with the config.

Integrate with your `package.json` scripts as you see fit, for example:

```json
"scripts": {
  "spellcheck": "cspell-config --check"
}
```

### CLI

<!-- cli-help -->

#### Command: `cspell-config`

CSpell configuration for @envsa/shared-config.

Usage:

```txt
cspell-config [<file|glob> ...]
```

| Option                   | Argument | Description                                                      |
| ------------------------ | -------- | ---------------------------------------------------------------- |
| `--check`<br>`-c`        |          | Check for and report issues. Same as `cspell-config`.            |
| `--init`<br>`-i`         |          | Initialize by copying starter config files to your project root. |
| `--print-config`<br>`-p` | `<path>` | Print the effective configuration at a certain path.             |
| `--help`<br>`-h`         |          | Print this help info.                                            |
| `--version`<br>`-v`      |          | Print the package version.                                       |

<!-- /cli-help -->

## Configuration

### Disabling bundled dictionaries

In additional to CSpell's default dictionary configuration, this shared configuration enables a number of dictionaries that ship with CSpell for all file types:

- [`lorem-ipsum`](https://github.com/streetsidesoftware/cspell-dicts/blob/main/dictionaries/lorem-ipsum/dict/lorem.txt)
- [`git`](https://github.com/streetsidesoftware/cspell-dicts/blob/main/dictionaries/git/cspell-ext.json)
- [`gaming-terms`](https://github.com/streetsidesoftware/cspell-dicts/blob/main/dictionaries/gaming-terms/dict/gaming-terms.txt)
- [`npm`](https://github.com/streetsidesoftware/cspell-dicts/blob/main/dictionaries/npm/dict/npm.txt)
- [`data-science`](https://github.com/streetsidesoftware/cspell-dicts/blob/main/dictionaries/data-science/dict/data-science.txt)
- [`fullstack`](https://github.com/streetsidesoftware/cspell-dicts/blob/main/dictionaries/fullstack/dict/fullstack.txt)

It also includes a number of _custom_ dictionaries distributed with this package, all of which are enabled by default:

- `envsa-acronyms` Contains acronyms
- `envsa-files` File extensions and types
- `envsa-misc` Contains general and miscellaneous words
- `envsa-names` Human names and usernames
- `envsa-tech` Tech-specific terminology

In your project's root `.cspell.json`, you can disable any combination of these dictionaries by adding them to the `dictionaries` array with a `!` prefix.

For example, do disable the `envsa-acronyms` and `envsa-names` dictionaries:

```json
{
  "import": "@envsa/cspell-config",
  "dictionaries": [
    "!envsa-acronyms",
    "!envsa-names"
    // ...Addtional !-prefixed dicitonary names
  ]
}
```

### Adding project-scoped words

In your project's root `.cspell.json`:

```json
{
  "import": "@envsa/cspell-config",
  "words": [
    "mountweazel",
    "steinlaus",
    "jungftak",
    "esquivalience"
    // ...Additional words
  ]
}
```

## Notes

This config includes a bunch of words I've happened to have needed to use. Your preferences will vary.

CSpell is configured to automatically ignore files and paths in `.gitignore` (via `"useGitignore": true`), and to ignore words inside of ` ``` ` code fences in markdown and mdx files.

## Credits

[Eric Mika](https://github.com/kitschpatrol) is the author of the original [@kitschpatrol/shared-config](https://github.com/kitschpatrol/shared-config) project on which this is based.

<!-- license -->

## License

[MIT](license.txt) © Liam Rella

<!-- /license -->
