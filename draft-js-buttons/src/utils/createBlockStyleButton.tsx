/* eslint-disable react/no-children-prop */
import React, { MouseEvent, ReactNode } from 'react';
import { RichUtils } from 'draft-js';
import clsx from 'clsx';
import { DraftJsStyleButtonType } from '..';

interface CreateBlockStyleButtonProps {
  blockType: string;
  children: ReactNode;
}

export default function createBlockStyleButton({
  blockType,
  children,
}: CreateBlockStyleButtonProps): DraftJsStyleButtonType {
  return function BlockStyleButton(props) {
    const toggleStyle = (event: MouseEvent): void => {
      event.preventDefault();
      props.setEditorState(
        RichUtils.toggleBlockType(props.getEditorState(), blockType)
      );
    };

    const preventBubblingUp = (event: MouseEvent): void => {
      event.preventDefault();
    };

    const blockTypeIsActive = (): boolean => {
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
}
