/* @flow */

import findWithRegex from '../utils/findWithRegex';

/**
 * TODO improve this strategy
 */
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
};
