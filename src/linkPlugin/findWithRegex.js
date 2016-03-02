/* @flow */

export default (regex: Object, contentBlock: Object, callback: Function) => {
  const text = contentBlock.getText();
  let matchArr;
  let start; // eslint-disable-line
  while ((matchArr = regex.exec(text)) !== null) { // eslint-disable-line
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
};
