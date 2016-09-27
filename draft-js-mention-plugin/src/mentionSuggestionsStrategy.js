/* @flow */

import findWithRegex from 'find-with-regex';
import escapeRegExp from 'lodash.escaperegexp';

export default (trigger: String, mentionUnicodeRegex: String) => (contentBlock: Object, callback: Function) => {
  // common chinese symbols: \u4e00-\u9eff - http://stackoverflow.com/a/1366113/837709
  // hiragana (japanese): \u3040-\u309F - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
  // katakana (japanese): \u30A0-\u30FF - https://gist.github.com/ryanmcgrath/982242#file-japaneseregex-js
  findWithRegex(new RegExp(`(\\s|^)${escapeRegExp(trigger)}[\\w\u4e00-\u9eff\u3040-\u309F\u30A0-\u30FF${escapeRegExp(mentionUnicodeRegex)}]*`, 'g'), contentBlock, callback);
};
