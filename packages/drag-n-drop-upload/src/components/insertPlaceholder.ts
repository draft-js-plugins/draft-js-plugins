import { EditorState, AtomicBlockUtils } from 'draft-js';

export const insertPlaceholder = (editorState, text) => {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    'UploadPlaceholder',
    'IMMUTABLE',
    { name: text, progress: '0%' }
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  );

  const stateSelected = EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter()
  );
  const blockKey = newEditorState.getCurrentContent().getLastBlock().getKey();

  return {
    state: stateSelected,
    key: blockKey,
    text: text
  }
};
