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

  const stateSelected = EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter()
  );

  const blockArrayMap = newEditorState.getCurrentContent().getBlocksAsArray().map(b => b.getKey());
  const nextToLastBlock = newEditorState.getCurrentContent().getBlockForKey(blockArrayMap[blockArrayMap.length-2]);

  return {
    state: stateSelected,
    blockKey: nextToLastBlock.getKey(),
    key: entityKey,
    text
  }
};
