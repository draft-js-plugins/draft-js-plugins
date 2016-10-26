import { SelectionState, EditorState } from 'draft-js';

export default (getEditorState, setEditorState, block) => {
  setEditorState(
    EditorState.forceSelection(getEditorState(), new SelectionState({
      anchorKey: block.get('key'),
      anchorOffset: block.get('length') || 0,
      focusKey: block.get('key'),
      focusOffset: block.get('length') || 0,
      hasFocus: true,
      isBackward: false,
    }))
  );
};
