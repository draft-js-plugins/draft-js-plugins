/* @flow */

import findWithRegex from 'find-with-regex';

const MENTION_REGEX = /(\s|^)@[\w]*/g;

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(MENTION_REGEX, contentBlock, callback);
};
