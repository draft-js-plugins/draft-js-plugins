import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const LineCounter = ({ store, limit, theme = {}, className }) => {
  const getLineCount = editorState => {
    const blockArray = editorState.getCurrentContent().getBlocksAsArray();
    return blockArray ? blockArray.length : null;
  };

  const getClassNames = count => {
    const defaultStyle = clsx(theme.counter, className);
    const overLimitStyle = clsx(theme.counterOverLimit, className);
    return count > limit ? overLimitStyle : defaultStyle;
  };

  const count = getLineCount(store.getEditorState());
  const classNames = getClassNames(count);

  return <span className={classNames}>{count}</span>;
};

LineCounter.propTypes = {
  theme: PropTypes.any,
  store: PropTypes.any,
  className: PropTypes.any,
  limit: PropTypes.number,
};

export default LineCounter;
