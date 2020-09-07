/* eslint-disable react/no-children-prop */
import React from 'react';
import { RichUtils } from 'draft-js';
import clsx from 'clsx';

const createBlockStyleButton = ({ blockType, children }) => {
  const BlockStyleButton = props => {
    const toggleStyle = event => {
      event.preventDefault();
      props.setEditorState(
        RichUtils.toggleBlockType(props.getEditorState(), blockType)
      );
    };

    const preventBubblingUp = event => {
      event.preventDefault();
    };

    const blockTypeIsActive = () => {
      // if the button is rendered before the editor
      if (!props.getEditorState) {
        return false;
      }

      const editorState = props.getEditorState();
      const type = editorState
        .getCurrentContent()
        .getBlockForKey(editorState.getSelection().getStartKey())
        .getType();
      return type === blockType;
    };

    const { theme } = props;
    const className = blockTypeIsActive()
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

  return BlockStyleButton;
};

export default createBlockStyleButton;
