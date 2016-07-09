/* @flow */

import findWithRegex from 'find-with-regex';
import escapeRegExp from 'lodash/escapeRegExp';

export default (trigger: String) => (contentBlock: Object, callback: Function) => {
  findWithRegex(new RegExp(`(\\s|^)${escapeRegExp(trigger)}[\\w]*`, 'g'), contentBlock, callback);
};
