import { RichUtils, EditorState, EntityInstance } from 'draft-js';

export type { Store } from './createStore';
export { createStore } from './createStore';
export type { StrategyCallback } from './findWithRegex';
export { findWithRegex } from './findWithRegex';

export interface DecodedOffset {
  blockKey: string;
  decoratorKey: number;
  leafKey: number;
}

export default {
  decodeOffsetKey(offsetKey: string): DecodedOffset {
    const [blockKey, decoratorKey, leafKey] = offsetKey.split('-');
    return {
      blockKey,
      decoratorKey: parseInt(decoratorKey, 10),
      leafKey: parseInt(leafKey, 10),
    };
  },

  createLinkAtSelection(editorState: EditorState, url: string): EditorState {
    const contentState = editorState
      .getCurrentContent()
      .createEntity('LINK', 'MUTABLE', { url });
    const entityKey = contentState.getLastCreatedEntityKey();
    const withLink = RichUtils.toggleLink(
      editorState,
      editorState.getSelection(),
      entityKey
    );
    return EditorState.forceSelection(withLink, editorState.getSelection());
  },

  removeLinkAtSelection(editorState: EditorState): EditorState {
    const selection = editorState.getSelection();
    return RichUtils.toggleLink(editorState, selection, null);
  },

  collapseToEnd(editorState: EditorState): EditorState {
    const selection = editorState.getSelection();

    return EditorState.forceSelection(
      editorState,
      selection.merge({
        anchorKey: selection.getEndKey(),
        focusKey: selection.getEndKey(),
        anchorOffset: selection.getEndOffset(),
        focusOffset: selection.getEndOffset(),
      })
    );
  },

  getCurrentEntityKey(editorState: EditorState): string {
    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const contentState = editorState.getCurrentContent();
    const anchorBlock = contentState.getBlockForKey(anchorKey);
    const offset = selection.getAnchorOffset();
    const index = selection.getIsBackward() ? offset - 1 : offset;
    return anchorBlock.getEntityAt(index);
  },

  getCurrentEntity(editorState: EditorState): EntityInstance | null {
    const contentState = editorState.getCurrentContent();
    const entityKey = this.getCurrentEntityKey(editorState);
    return entityKey ? contentState.getEntity(entityKey) : null;
  },

  hasEntity(editorState: EditorState, entityType: string): boolean {
    const entity = this.getCurrentEntity(editorState);
    return Boolean(entity && entity.getType() === entityType);
  },
};
