import { EditorState } from 'draft-js';

const refreshState = (setEditorState, editorState) => {
  setEditorState(
    EditorState.forceSelection(
      editorState,
      editorState.getCurrentContent().getSelectionAfter()
    )
  );
}

export default refreshState;
