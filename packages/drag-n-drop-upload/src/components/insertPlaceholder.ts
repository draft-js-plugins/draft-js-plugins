import { EditorState, AtomicBlockUtils } from 'draft-js';

type InsertPlaceholderReturn = {
  state: EditorState,
  blockKey: string,
  key: string,
  text: string
};

export const insertPlaceholder = (editorState:EditorState, text:string): InsertPlaceholderReturn => {
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

  const insertedAtomicBlock = newEditorState
    .getCurrentContent()
    .getBlockBefore(newEditorState.getSelection().getAnchorKey());

  if (insertedAtomicBlock === undefined) {
    throw new Error('Unable to locate the block-key of inserted-atomic-block.');
  }

  const stateSelected = EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter()
  );

  return {
    state: stateSelected,
    blockKey: insertedAtomicBlock.getKey(),
    key: entityKey,
    text,
  };
};
