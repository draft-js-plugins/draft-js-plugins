/* eslint-disable react/no-children-prop */
import React, { MouseEvent, ReactNode } from 'react';
import clsx from 'clsx';
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
}
