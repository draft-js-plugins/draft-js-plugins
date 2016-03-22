import {
  EditorState,
} from 'draft-js';

const moveToEndOfSelectedBlock = (editorState, onChange) => {
  if (onChange === undefined) return;
  const selection = editorState.getSelection();
  const block = editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey());
  const size = block.getLength();
  if (selection.getAnchorOffset() !== size || selection.getFocusOffset() !== size) {
    const newSelection = selection.merge({
      anchorOffset: size,
      focusOffset: size,
    });
    const newEditorState = EditorState.forceSelection(editorState, newSelection);
    onChange(newEditorState);
  }
};

export default moveToEndOfSelectedBlock;
