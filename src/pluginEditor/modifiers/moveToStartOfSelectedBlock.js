import {
  EditorState,
} from 'draft-js';

const moveToEndOfSelectedBlock = (editorState, onChange) => {
  if (onChange === undefined) return;
  const selection = editorState.getSelection();
  if (selection.getAnchorOffset() !== 0 || selection.getFocusOffset() !== 0) {
    const newSelection = selection.merge({
      anchorOffset: 0,
      focusOffset: 0,
    });
    const newEditorState = EditorState.forceSelection(editorState, newSelection);
    onChange(newEditorState);
  }
};

export default moveToEndOfSelectedBlock;
