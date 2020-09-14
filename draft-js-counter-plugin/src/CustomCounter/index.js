import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const CustomCounter = ({
  store,
  limit,
  countFunction,
  theme = {},
  className,
}) => {
  const getClassNames = count => {
    const defaultStyle = clsx(theme.counter, className);
    const overLimitStyle = clsx(theme.counterOverLimit, className);
    return count > limit ? overLimitStyle : defaultStyle;
  };

  const plainText = store
    .getEditorState()
    .getCurrentContent()
    .getPlainText('');
  const count = countFunction(plainText);
  const classNames = getClassNames(count, limit);

  return <span className={classNames}>{count}</span>;
};

CustomCounter.propTypes = {
  theme: PropTypes.any,
  store: PropTypes.any,
  className: PropTypes.any,
  limit: PropTypes.number,
  countFunction: PropTypes.func.isRequired,
};

export default CustomCounter;
