/* @flow */

import findWithRegex from 'find-with-regex';
import escapeRegExp from 'lodash/escapeRegExp';

// const MENTION_REGEX = /(\s|^)@[\w|\s|\W]*/g;
export default (trigger: String) => (contentBlock: Object, callback: Function) => {
  // findWithRegex(MENTION_REGEX, contentBlock, callback);
  findWithRegex(new RegExp(`(\\s|^)${escapeRegExp(trigger)}[\\w]*`, 'g'), contentBlock, callback);
};
