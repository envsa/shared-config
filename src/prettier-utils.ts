import fs from 'node:fs/promises';

/**
 * Formats and saves the file content.
 * @param filePath - Pth to the file.
 * @param content - Content to format and save.
 */
export async function formatTextAndSaveFile(filePath: string, content: string): Promise<void> {
  try {
    const { default: prettier } = await import('prettier');
    const prettierConfig = await prettier.resolveConfig(filePath);
    const formattedContent = await prettier.format(content, {
      filepath: filePath,
      ...prettierConfig,
    });
    await fs.writeFile(filePath, formattedContent, 'utf8');
  } catch {
    console.warn(`Skipped formatting ${filePath} since Prettier is not installed.`);
    // Do nothing on error
  }
}

export async function formatFileInPlace(filePath: string): Promise<void> {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    await formatTextAndSaveFile(filePath, content);
  } catch {
    // Do nothing on error
  }
}
