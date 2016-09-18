/* @flow */

import findWithRegex from 'find-with-regex';
import emojione from 'emojione';

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(emojione.unicodeRegex, contentBlock, callback);
};
