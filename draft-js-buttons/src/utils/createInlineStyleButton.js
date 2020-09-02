/* eslint-disable react/no-children-prop */
import React from 'react';
import { RichUtils } from 'draft-js';
import clsx from 'clsx';

const createInlineStyleButton = ({ style, children }) => {
  const InlineStyleButton = props => {
    const toggleStyle = event => {
      event.preventDefault();
      props.setEditorState(
        RichUtils.toggleInlineStyle(props.getEditorState(), style)
      );
    };

    const preventBubblingUp = event => {
      event.preventDefault();
    };

    // we check if this.props.getEditorstate is undefined first in case the button is rendered before the editor
    const styleIsActive = () =>
      props.getEditorState &&
      props
        .getEditorState()
        .getCurrentInlineStyle()
        .has(style);

    const { theme } = props;
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
        />
      </div>
    );
  };

  return InlineStyleButton;
};

export default createInlineStyleButton;
