import {
  EditorState,
  AtomicBlockUtils,
} from 'draft-js';

export default (editorState, url : string, type, fileRecord) => {
  const urlType = 'image';
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', { src: url, fileRecord });
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  );
  return EditorState.forceSelection(
    newEditorState,
    editorState.getCurrentContent().getSelectionAfter()
  );
};
