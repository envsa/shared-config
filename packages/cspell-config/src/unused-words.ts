import { lint } from 'cspell';
import { getDefaultConfigLoader } from 'cspell-lib';

export async function checkForUnusedWords(fileGlobs: string[] = ['.']): Promise<string[]> {
  // eslint-disable-next-line unicorn/no-useless-undefined
  const config = await getDefaultConfigLoader().searchForConfigFile(undefined);
  if (config === undefined) {
    throw new Error('No CSpell configuration found.');
  }

  const { settings, url } = config;
  if (settings.words === undefined || settings.words.length === 0) {
    return [];
  }

  let unusedWords = [...settings.words];
  settings.words = undefined;

  await lint(
    fileGlobs,
    {
      config: { settings, url },
      progress: true,
      unique: true,
      wordsOnly: true,
    },
    {
      issue({ text, uri }) {
        unusedWords = unusedWords.filter(
          (word) =>
            !(
              word.toLowerCase() === text.toLowerCase().replace(/['\u2019\u2018]s$/, '') &&
              uri !== url.href
            ),
        );
      },
    },
  );

  return unusedWords;
}
