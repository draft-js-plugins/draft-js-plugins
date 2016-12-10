import {
  Entity,
  EditorState,
} from 'draft-js';
import insertAtomicBlockOnSelection from './insertAtomicBlockOnSelection';

export default (editorState, url, optionalSelection) => {
  const selection = optionalSelection || editorState.currentSelection();
  const urlType = 'image';
  const entityKey = Entity.create(urlType, 'IMMUTABLE', { src: url });
  const newEditorState = insertAtomicBlockOnSelection(
    editorState,
    entityKey,
    ' ',
    selection
  );
  return EditorState.forceSelection(
    newEditorState,
    editorState.getCurrentContent().getSelectionAfter()
  );
};
