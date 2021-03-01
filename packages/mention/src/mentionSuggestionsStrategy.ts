import { ContentBlock } from 'draft-js';
import escapeRegExp from 'lodash-es/escapeRegExp';

interface FindWithRegexCb {
  (start: number, end: number): void;
}

const whitespaceRegEx = /\s/;

function checkForWhiteSpaceBeforeTrigger(text: string, index: number): boolean {
  if (index === 0) {
    return true;
  }
  return whitespaceRegEx.test(text[index - 1]);
}

const findWithRegex = (
  regex: RegExp,
  contentBlock: ContentBlock,
  supportWhiteSpace: boolean,
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
        //console.log(matchArr, text[matchArr.index - 1], text);
        prevLastIndex = regex.lastIndex;
        start = nonEntityStart + matchArr.index;
        const end = start + matchArr[0].length;

        if (!supportWhiteSpace && whitespaceRegEx.test(text[start])) {
          //trim the result so that we have no whitespaces
          start += 1;
        }

        //check if whitespace support is active that the char before the trigger is a white space #1844
        if (
          (supportWhiteSpace &&
            checkForWhiteSpaceBeforeTrigger(text, matchArr.index)) ||
          !supportWhiteSpace
        ) {
          callback(start, end);
        }
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
    ? new RegExp(`${triggerPattern}(${regExp}|\\s)*`, 'g')
    : new RegExp(`(\\s|^)${triggerPattern}${regExp}*`, 'g');
  return (contentBlock: ContentBlock, callback: FindWithRegexCb) => {
    findWithRegex(MENTION_REGEX, contentBlock, supportWhiteSpace, callback);
  };
};
