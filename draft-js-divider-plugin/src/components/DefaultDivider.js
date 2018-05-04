import unionClassNames from 'union-class-names';
import React from 'react';

const Divider = ({ block, className, theme = {}, ...otherProps }) => {
  const {
    blockProps, // eslint-disable-line no-unused-vars
    customStyleMap, // eslint-disable-line no-unused-vars
    customStyleFn, // eslint-disable-line no-unused-vars
    decorator, // eslint-disable-line no-unused-vars
    forceSelection, // eslint-disable-line no-unused-vars
    offsetKey, // eslint-disable-line no-unused-vars
    selection, // eslint-disable-line no-unused-vars
    tree, // eslint-disable-line no-unused-vars
    contentState,
    blockStyleFn,
    ...elementProps
  } = otherProps;
  const combinedClassName = unionClassNames(theme.divider, className);
  return <hr {...elementProps} className={combinedClassName} />;
};

export default Divider;
