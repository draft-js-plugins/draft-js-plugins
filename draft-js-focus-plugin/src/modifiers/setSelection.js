import { SelectionState, EditorState } from 'draft-js';

// Get selection text's client rectangle
function getSelectionRect(selected) {
  if (!selected) return null;

  const range = selected.getRangeAt ? selected.getRangeAt(0) : selected;

  const _rect = range.getBoundingClientRect();
  let rect = _rect && _rect.top ? _rect : range.getClientRects()[0];// selected.getRangeAt(0).getBoundingClientRect()
  if (!rect) {
    if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
      rect = selected.anchorNode.getBoundingClientRect();
      rect.isEmptyline = true;
    } else if (selected.startContainer && selected.startContainer.getBoundingClientRect) {
      rect = selected.startContainer.getBoundingClientRect();
      rect.isEmptyline = true;
    } else {
      return null;
    }
  }

  return rect;
}

// Set selection of editor to next/previous block
export default (getEditorState, setEditorState, previousActiveBlock, mode, event) => {
  const selection = getEditorState().getSelection();
  const editorState = getEditorState();
  const activeBlock = mode === 'previous'
    ? editorState.getCurrentContent().getBlockBefore(selection.getAnchorKey())
    : editorState.getCurrentContent().getBlockAfter(selection.getAnchorKey());

  if (event) {
    const range = window.getSelection().getRangeAt(0);
    const postRange = document.createRange();
    postRange.selectNodeContents(event.target);
    if (mode === 'previous') {
      postRange.setEnd(range.startContainer, range.startOffset);
    } else {
      postRange.setStart(range.endContainer, range.endOffset);
    }

    const rect = getSelectionRect(range);
    const rectPost = getSelectionRect(postRange);

    const hasTopChanged = rect.top === rectPost.top;
    const nextIsDiv = (mode === 'previous' ? postRange.startContainer : postRange.endContainer).nodeName.toLowerCase() === 'div';

    if (activeBlock && (hasTopChanged || nextIsDiv)) {
      event.preventDefault();
      setEditorState(EditorState.forceSelection(editorState, new SelectionState({
        anchorKey: activeBlock.get('key'),
        anchorOffset: activeBlock.get('length') || 0,
        focusKey: activeBlock.get('key'),
        focusOffset: activeBlock.get('length') || 0,
        isBackward: false,
      })));
      return activeBlock;
    }
  } return undefined;
};
