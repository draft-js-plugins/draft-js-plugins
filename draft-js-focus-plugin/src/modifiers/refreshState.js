import { EditorState } from 'draft-js';

// Refresh editor state forcefully
export default (setEditorState, editorState) => {
  setEditorState(
    EditorState.forceSelection(
      editorState,
      editorState.getCurrentContent().getSelectionAfter()
    )
  );
};
