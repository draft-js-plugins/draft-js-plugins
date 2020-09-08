/* eslint-disable react/no-children-prop */
import React from 'react';
import clsx from 'clsx';

const createBlockAlignmentButton = ({ alignment, children }) => {
  const BlockAlignmentButton = props => {
    const activate = event => {
      event.preventDefault();
      props.setAlignment({ alignment });
    };

    const preventBubblingUp = event => {
      event.preventDefault();
    };

    const isActive = () => props.alignment === alignment;

    const { theme } = props;
    const className = isActive()
      ? clsx(theme.button, theme.active)
      : theme.button;

    return (
      <div className={theme.buttonWrapper} onMouseDown={preventBubblingUp}>
        <button
          className={className}
          onClick={activate}
          type="button"
          children={children}
        />
      </div>
    );
  };

  return BlockAlignmentButton;
};

export default createBlockAlignmentButton;
