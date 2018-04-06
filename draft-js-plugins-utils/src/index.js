import { RichUtils, EditorState } from 'draft-js';

export default {
  createLinkAtSelection(editorState, url) {
    const contentState = editorState.getCurrentContent()
      .createEntity('LINK', 'MUTABLE', { url });
    const entityKey = contentState.getLastCreatedEntityKey();
    const withLink = RichUtils.toggleLink(
      editorState,
      editorState.getSelection(),
      entityKey
    );
    return EditorState.forceSelection(
      withLink, editorState.getSelection()
    );
  },

  removeLinkAtSelection(editorState) {
    const selection = editorState.getSelection();
    return RichUtils.toggleLink(editorState, selection, null);
  },

  getCurrentEntityKey(editorState) {
    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const contentState = editorState.getCurrentContent();
    const anchorBlock = contentState.getBlockForKey(anchorKey);
    const offset = selection.anchorOffset;
    const index = selection.isBackward ? offset - 1 : offset;
    return anchorBlock.getEntityAt(index);
  },

  getCurrentEntity(editorState) {
    const contentState = editorState.getCurrentContent();
    const entityKey = this.getCurrentEntityKey(editorState);
    return entityKey ? contentState.getEntity(entityKey) : null;
  },

  hasEntity(editorState, entityType) {
    const entity = this.getCurrentEntity(editorState);
    return entity && entity.getType() === entityType;
  },
};
