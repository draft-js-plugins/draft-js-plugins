import React from 'react';
import getSelection from '../utils/getSelection';
import getSelectionRect from '../utils/getSelectionRect';

// Helper function, is toolbar necessary / is a text selected?
export const shouldRenderToolbar = editorState => {
  const selected = getSelection();
  const selectionState = editorState ? editorState.getSelection() : null;
  return !!selected.rangeCount && !selectionState.isCollapsed();
};

// Helper function, is toolbar necessary / is a text selected?
export const getToolbarPosition = () => getSelectionRect(getSelection());

// Toggle the block type
/* function toggleBlockType(editorState, setEditorState, blockType) {
  setEditorState(RichUtils.toggleBlockType(
    editorState,
    blockType
  ));
} */

export const getToolbarActions = (config, editorState) =>
  config.actions.map(ActionComponent =>
    (props) => <ActionComponent getEditorState={() => editorState} {...props} />
  );

