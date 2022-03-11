/* eslint-disable react/no-children-prop */
import clsx from 'clsx';
import React, { MouseEvent, ReactNode } from 'react';
import { DraftJsBlockAlignmentButtonType } from '..';

interface CreateBlockAlignmentButtonProps {
  alignment: string;
  children: ReactNode;
}

export default function createBlockAlignmentButton({
  alignment,
  children,
}: CreateBlockAlignmentButtonProps): DraftJsBlockAlignmentButtonType {
  return function BlockAlignmentButton(props) {
    const activate = (event: MouseEvent): void => {
      event.preventDefault();
      props.setAlignment({ alignment });
    };

    const preventBubblingUp = (event: MouseEvent): void => {
      event.preventDefault();
    };

    const isActive = (): boolean => props.alignment === alignment;

    const { theme, buttonProps = {} } = props;
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
          {...buttonProps}
        />
      </div>
    );
  };
}
