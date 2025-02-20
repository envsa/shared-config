import { stylelintConfig } from '@envsa/stylelint-config';

export default stylelintConfig({
  ignoreFiles: ['test/fixtures/input/*.*', 'test/fixtures/output-fixed-auto/*.*'],
});
