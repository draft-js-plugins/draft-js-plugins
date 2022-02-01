/* eslint-disable react/no-children-prop */
import React, { MouseEvent, ReactNode } from 'react';
import { Modifier, EditorState } from 'draft-js';
import clsx from 'clsx';
import { DraftJsStyleButtonType } from '..';

interface CreateTextAlignmentButtonProp {
  alignment: string;
  children: ReactNode;
}

export default function createTextAlignmentButton({
  alignment,
  children,
}: CreateTextAlignmentButtonProp): DraftJsStyleButtonType {
  return function InlineStyleButton(props) {
    const toggleStyle = (event: MouseEvent): void => {
      if (!props.getEditorState) return;
      event.preventDefault();
      const alignmentStyles = ['left', 'center', 'right'];
      const removeStyles = alignmentStyles.filter(
        (style) => style !== alignment
      );
      const currentEditorState = props.getEditorState();
      const currentContent = props.getEditorState().getCurrentContent();
      const selection = props.getEditorState().getSelection();
      const focusBlock = currentContent.getBlockForKey(selection.getFocusKey());
      const anchorBlock = currentContent.getBlockForKey(
        selection.getAnchorKey()
      );
      const selectionIsBackward = selection.getIsBackward();

      let changes = {
        anchorOffset: 0,
        focusOffset: focusBlock.getLength(),
      };

      if (selectionIsBackward) {
        changes = {
          focusOffset: 0,
          anchorOffset: anchorBlock.getLength(),
        };
      }
      const selectWholeBlocks = selection.merge(changes);
      const modifiedContent = Modifier.applyInlineStyle(
        currentContent,
        selectWholeBlocks,
        alignment
      );
      const finalContent = removeStyles.reduce(
        (content, style) =>
          Modifier.removeInlineStyle(content, selectWholeBlocks, style),
        modifiedContent
      );
      const nextEditorState = EditorState.push(
        currentEditorState,
        finalContent,
        'change-inline-style'
      );
      props.setEditorState(nextEditorState);
    };

    const preventBubblingUp = (event: MouseEvent): void => {
      event.preventDefault();
    };

    const styleIsActive = (): boolean =>
      props.getEditorState &&
      props.getEditorState().getCurrentInlineStyle().has(alignment);

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
}
