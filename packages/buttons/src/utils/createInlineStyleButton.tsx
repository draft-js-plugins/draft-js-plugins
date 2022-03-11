/* eslint-disable react/no-children-prop */
import clsx from 'clsx';
import { RichUtils } from 'draft-js';
import React, { MouseEvent, ReactNode } from 'react';
import { DraftJsStyleButtonType } from '..';

interface CreateInlineStyleButtonProp {
  style: string;
  children: ReactNode;
}

export default function createInlineStyleButton({
  style,
  children,
}: CreateInlineStyleButtonProp): DraftJsStyleButtonType {
  return function InlineStyleButton(props) {
    const toggleStyle = (event: MouseEvent): void => {
      event.preventDefault();
      props.setEditorState(
        RichUtils.toggleInlineStyle(props.getEditorState(), style)
      );
    };

    const preventBubblingUp = (event: MouseEvent): void => {
      event.preventDefault();
    };

    // we check if this.props.getEditorstate is undefined first in case the button is rendered before the editor
    const styleIsActive = (): boolean =>
      props.getEditorState &&
      props.getEditorState().getCurrentInlineStyle().has(style);

    const { theme, buttonProps = {} } = props;
    const className = styleIsActive()
      ? clsx(theme.button, theme.active)
      : theme.button;

    return (
      <div className={theme.buttonWrapper} onMouseDown={preventBubblingUp}>
        <button
          className={className}
          onClick={toggleStyle}
          type="button"
          children={children}
          {...buttonProps}
        />
      </div>
    );
  };
}
