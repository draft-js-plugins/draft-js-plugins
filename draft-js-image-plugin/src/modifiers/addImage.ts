import { EditorState, AtomicBlockUtils } from 'draft-js';

export default (
  editorState: EditorState,
  url: string,
  extraData: Record<string, unknown>
): EditorState => {
  const urlType = 'IMAGE';
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    urlType,
    'IMMUTABLE',
    { ...extraData, src: url }
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  );
  return EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter()
  );
};
