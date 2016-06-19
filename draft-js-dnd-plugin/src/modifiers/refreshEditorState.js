import { EditorState } from 'draft-js';

export default function (editorState) {
  return EditorState.forceSelection(editorState, editorState.getSelection());
}
