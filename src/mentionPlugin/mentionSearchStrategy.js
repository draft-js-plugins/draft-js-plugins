/* @flow */

import findWithRegex from '../utils/findWithRegex';

const MENTION_REGEX = /\@[\w]*/g;

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(MENTION_REGEX, contentBlock, callback);
};
