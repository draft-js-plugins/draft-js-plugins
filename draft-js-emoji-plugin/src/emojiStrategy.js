/* @flow */

import findWithRegex from 'find-with-regex';
import unicodeRegex from './utils/unicodeRegex';

export default (contentBlock: Object, callback: Function) => {
  console.log(contentBlock.getType());
  findWithRegex(unicodeRegex, contentBlock, callback);
};
