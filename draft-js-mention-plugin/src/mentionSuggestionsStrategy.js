/* @flow */

import escapeRegExp from 'lodash/escapeRegExp';

const findWithRegex = (regex, contentBlock, callback) => {
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
      // Force update regex's lastIndex to avoid Infinite loop
      while ((matchArr = regex.exec(text)) !== null) { // eslint-disable-line
        if (regex.lastIndex === prevLastIndex) {
          regex.lastIndex += 1; // eslint-disable-line no-param-reassign
        }
        prevLastIndex = regex.lastIndex;
        start = nonEntityStart + matchArr.index;
        callback(start, start + matchArr[0].length);
      }
    }
  );
};

export default (trigger: string, supportWhiteSpace: boolean, regExp: string) => { //eslint-disable-line
  const MENTION_REGEX = supportWhiteSpace ?
    new RegExp(`${escapeRegExp(trigger)}(${regExp}|\\s){0,}`, 'g') :
    new RegExp(`(\\s|^)${escapeRegExp(trigger)}${regExp}`, 'g');

  return (contentBlock: Object, callback: Function) => {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};
