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
  trigger: string,
  supportWhiteSpace: boolean,
  regExp: string
): ((contentBlock: ContentBlock, callback: FindWithRegexCb) => void) => {
  //eslint-disable-line
  const escapedTrigger = escapeRegExp(trigger);
  const MENTION_REGEX = supportWhiteSpace
    ? new RegExp(`(?<!${regExp})${escapedTrigger}(${regExp}|\\s)*`, 'g')
    : new RegExp(`(\\s|^)${escapedTrigger}${regExp}*`, 'g');

  return (contentBlock: ContentBlock, callback: FindWithRegexCb) => {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};
