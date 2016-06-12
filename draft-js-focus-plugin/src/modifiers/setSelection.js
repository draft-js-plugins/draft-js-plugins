import { SelectionState, EditorState } from 'draft-js';

const findParentNode = (node, filter) => {
  if (!node) return null;
  return node.parentElement && filter(node.parentElement)
    ? node.parentElement
    : findParentNode(node.parentElement, filter);
};

// Set selection of editor to next/previous block
export default (store, getEditorState, setEditorState, previousActiveBlock, mode, event) => {
  const selectionKey = previousActiveBlock ? previousActiveBlock.get('key') : getEditorState().getSelection().getAnchorKey();
  const editorState = getEditorState();
  const activeBlock = mode === 'up'
    ? editorState.getCurrentContent().getBlockBefore(selectionKey)
    : editorState.getCurrentContent().getBlockAfter(selectionKey);

  if (activeBlock && activeBlock.get('key') === selectionKey) {
    return undefined;
  }

  if (event) {
    let atLimit = false;
    if (window.getSelection) {
      const sel = window.getSelection();
      if (sel.rangeCount) {
        const selRange = sel.getRangeAt(0);
        const testRange = selRange.cloneRange();
        // Get parent node for orientation
        const parent = findParentNode(sel.anchorNode, node => node.hasAttribute('data-block'));
        testRange.selectNodeContents(parent);

        if (mode === 'up') {
          testRange.setEnd(selRange.startContainer, selRange.startOffset);
          const toleranced = Math.abs(selRange.getBoundingClientRect().top - parent.getBoundingClientRect().top);
          atLimit = testRange.toString() === '' || toleranced < 10;
        } else {
          testRange.setStart(selRange.endContainer, selRange.endOffset);
          const toleranced = Math.abs(selRange.getBoundingClientRect().bottom - parent.getBoundingClientRect().bottom);
          atLimit = testRange.toString() === '' || toleranced < 10;
        }
      }
    }/* else if (document.selection && document.selection.type !== 'Control') {
      const selRange = document.selection.createRange();
      const testRange = selRange.duplicate();
      const parent = findParentNode(selRange.anchorNode, x => x.hasAttribute('data-block'));

      testRange.moveToElementText(parent);
      testRange.setEndPoint('EndToStart', selRange);
      info.atStart = (testRange.text === '');

      testRange.moveToElementText(parent);
      testRange.setEndPoint('StartToEnd', selRange);
      info.atEnd = (testRange.text === '');
    }*/

    if (activeBlock && store.types[activeBlock.get('type')] && atLimit) {
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
