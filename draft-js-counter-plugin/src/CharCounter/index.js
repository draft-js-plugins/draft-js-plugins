import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import punycode from 'punycode';

const CharCounter = ({ theme = {}, className, store, limit }) => {
  const getCharCount = editorState => {
    const decodeUnicode = str => punycode.ucs2.decode(str); // func to handle unicode characters
    const plainText = editorState.getCurrentContent().getPlainText('');
    const regex = /(?:\r\n|\r|\n)/g; // new line, carriage return, line feed
    const cleanString = plainText.replace(regex, '').trim(); // replace above characters w/ nothing
    return decodeUnicode(cleanString).length;
  };

  const getClassNames = count => {
    const defaultStyle = clsx(theme.counter, className);
    const overLimitStyle = clsx(theme.counterOverLimit, className);
    return count > limit ? overLimitStyle : defaultStyle;
  };

  const count = getCharCount(store.getEditorState());
  const classNames = getClassNames(count);

  return <span className={classNames}>{count}</span>;
};

CharCounter.propTypes = {
  theme: PropTypes.any,
  className: PropTypes.any,
  store: PropTypes.any,
  limit: PropTypes.any,
};

export default CharCounter;
