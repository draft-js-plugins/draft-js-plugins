import { EditorState } from 'draft-js';

export default function(editorState, key, data) {
  const currentContentState = editorState.getCurrentContent();

  const block = currentContentState.getBlockForKey(key);
  const entityKey = block.getEntityAt(0);
  const newContentState = currentContentState.mergeEntityData(entityKey, data);
  return EditorState.forceSelection(
    EditorState.push(editorState, newContentState, 'apply-entity'),
    editorState.getCurrentContent().getSelectionAfter()
  );
}
