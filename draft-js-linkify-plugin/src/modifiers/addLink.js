import {
  RichUtils,
  Entity,
  EditorState,
} from 'draft-js';

export default (editorState, url) => {
  const entityKey = Entity.create('LINK', 'MUTABLE', { url });

  const newEditorState = RichUtils.toggleLink(
    editorState,
    editorState.getSelection(),
    entityKey,
  );
  return EditorState.forceSelection(
    newEditorState,
    editorState.getCurrentContent().getSelectionAfter()
  );
};
