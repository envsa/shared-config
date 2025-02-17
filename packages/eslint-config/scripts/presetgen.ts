#!/usr/bin/env tsx

/**
 * Unused
 *
 * "Starts with" strings for rules to commend out in the expansion.
 *
 * Fixes type errors for rules from plugins that are not included in this shared
 * config, whilst still leaving them visible. Useful or for deprecated rules for
 * which no type information can be found otherwise, type errors from typegen's
 * output...
 *
 * Rename logic is applied, but using canonical names is recommended.
 *
 * MANY deprecated rules in prettierEslint, so that is handled in-situ.
 */
const deprecatedRules: string[] = ['@stylistic/'];

const delimiters = {
  end: '// End expansion',
  start: '// Begin expansion',
} as const;

/**
 * Adds new rule expansions where indicated by delimiter comments:
 * @example
 * ```ts
 * // Begin expansion 'eslint-plugin-jsdoc' 'flat/recommended-typescript-flavor'
 * // Rules will be expanded here...
 * // End expansion
 * ```
 * @param lines = Array of file lines
 * @return Array of lines with expansions added
 */
async function addNewExpansions(lines: string[]): Promise<string[]> {
  const result: string[] = [];

  for (const line of lines) {
    result.push(line);

    if (line.includes(delimiters.start)) {
      try {
        const config = parseExpansionConfig(line);
        const expansionLines = await generateExpansionLines(config);
        result.push(...expansionLines);
      } catch (error) {
        console.error(`Error processing expansion in line: ${line}`, error);
      }
    }
  }
  return result;
}
