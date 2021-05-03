import { ContentBlock } from 'draft-js';

export type StrategyCallback = (start: number, end: number) => void;

export function findWithRegex(
  regex: RegExp,
  contentBlock: ContentBlock,
  callback: StrategyCallback
): void {
  // Get the text from the contentBlock
  const text = contentBlock.getText();
  let matchArr;
  let start;
  // Go through all matches in the text and return the indizes to the callback
  while ((matchArr = regex.exec(text)) !== null) {
    if (matchArr.index === regex.lastIndex) {
      // eslint-disable-next-line no-param-reassign
      regex.lastIndex += 1;
    }
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}
