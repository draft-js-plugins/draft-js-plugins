import { ContentBlock } from 'draft-js';
import escapeRegExp from 'lodash/escapeRegExp';

interface FindWithRegexCb {
  (start: number, end: number): void;
}

const findWithRegex = (
  regex: RegExp,
  contentBlock: ContentBlock,
  callback: FindWithRegexCb
): void => {
  const contentBlockText = contentBlock.getText();

  // exclude entities, when matching
  contentBlock.findEntityRanges(
    (character) => !character.getEntity(),
    (nonEntityStart, nonEntityEnd) => {
      const text = contentBlockText.slice(nonEntityStart, nonEntityEnd);
      let matchArr;
      let start;
      let prevLastIndex = regex.lastIndex;

      // Go through all matches in the text and return the indices to the callback
      // Break the loop if lastIndex is not changed
      while ((matchArr = regex.exec(text)) !== null) {
        // eslint-disable-line
        if (regex.lastIndex === prevLastIndex) {
          break;
        }
        prevLastIndex = regex.lastIndex;
        start = nonEntityStart + matchArr.index;
        callback(start, start + matchArr[0].length);
      }
    }
  );
};

export default (
  triggers: string[],
  supportWhiteSpace: boolean,
  regExp: string
): ((contentBlock: ContentBlock, callback: FindWithRegexCb) => void) => {
  //eslint-disable-line
  const triggerPattern = `[${triggers
    .map((trigger) => escapeRegExp(trigger))
    .join('')}]`;
  const MENTION_REGEX = supportWhiteSpace
    ? new RegExp(`${triggerPattern}(${regExp}|\\s){0,}`, 'g')
    : new RegExp(`(\\s|^)${triggerPattern}(${regExp}|\\s){0,}`, 'g');
  return (contentBlock: ContentBlock, callback: FindWithRegexCb) => {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};
