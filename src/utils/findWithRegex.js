/* @flow */

const findWithRegex = (regex: Object, contentBlock: Object, callback: Function) => {
  // Get the text from the contentBlock
  const text = contentBlock.getText();
  let matchArr;
  let start; // eslint-disable-line
  // Go through all matches in the text and return the indizes to the callback
  while ((matchArr = regex.exec(text)) !== null) { // eslint-disable-line
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
};

export default findWithRegex;
