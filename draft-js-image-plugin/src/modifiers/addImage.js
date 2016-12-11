import {
  Entity,
  EditorState,
  AtomicBlockUtils,
} from 'draft-js';

export default (editorState, url) => {
  const urlType = 'image';
  const entityKey = Entity.create(urlType, 'IMMUTABLE', { src: url });
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
