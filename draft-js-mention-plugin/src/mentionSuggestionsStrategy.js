/* @flow */

import findWithRegex from 'find-with-regex';
import escapeRegExp from 'lodash.escaperegexp';

// maxWordsSearch can be a number to define how
// much white spaces are allowed but can also be an empty
// string to allow an infinite number of white spaces
export default (trigger: String, maxWordsSearch: any) => {
  // when maxWordsSearch is set to 1, it means that the support for white spaces
  // is disabled and this strategy shouldn't match the trailing ones
  const WORD_REGEXP = maxWordsSearch === 1 ? '(\\w+)' : '(\\w+\\s?)';
  const MENTION_REGEX = new RegExp(`(\\s|^)${escapeRegExp(trigger)}(${WORD_REGEXP}{0,${String(maxWordsSearch)}})?`, 'g');

  return (contentBlock: Object, callback: Function) => {
    findWithRegex(MENTION_REGEX, contentBlock, callback);
  };
};
