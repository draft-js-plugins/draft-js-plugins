import { SelectionState, EditorState } from 'draft-js';

const findParentNode = (node, filter) => {
  if (!node) return null;
  return node.parentElement && filter(node.parentElement)
    ? node.parentElement
    : findParentNode(node.parentElement, filter);
};

// Set selection of editor to next/previous block
export default (store, getEditorState, setEditorState, mode, event) => {
  const selectionKey = getEditorState().getSelection().getAnchorKey();
  const editorState = getEditorState();
  const newActiveBlock = mode === 'up'
    ? editorState.getCurrentContent().getBlockBefore(selectionKey)
    : editorState.getCurrentContent().getBlockAfter(selectionKey);

  if (newActiveBlock && newActiveBlock.get('key') === selectionKey) {
    return undefined;
  }

  // TODO figure out what this does
  // TODO make sure this works cross-browser
  let atLimit = false;
  if (window.getSelection) {
    const sel = window.getSelection();
    if (sel.rangeCount) {
      const selRange = sel.getRangeAt(0);
      const testRange = selRange.cloneRange();
      // Get parent node for orientation
      const parent = findParentNode(sel.anchorNode, (node) => node.hasAttribute('data-block'));
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
  }

  // TODO check for previous block is also focusable
  if (newActiveBlock && atLimit) {
    const offset = mode === 'up' ? newActiveBlock.getLength() : 0;
    event.preventDefault();
    setEditorState(EditorState.forceSelection(editorState, new SelectionState({
      anchorKey: newActiveBlock.getKey(),
      anchorOffset: offset,
      focusKey: newActiveBlock.getKey(),
      focusOffset: offset,
      isBackward: false,
    })));
    return newActiveBlock;
  }

  return undefined;
};
