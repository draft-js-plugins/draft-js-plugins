import { SelectionState, EditorState } from 'draft-js';

const findParentNode = (node, filter) => {
  if (!node) return null;
  return node.parentElement && filter(node.parentElement)
    ? node.parentElement
    : findParentNode(node.parentElement, filter);
};

// Set selection of editor to next/previous block
export default (store, getEditorState, setEditorState, mode, event) => {
  const editorState = getEditorState();
  const selectionKey = editorState.getSelection().getAnchorKey();
  const newActiveBlock = mode === 'up'
    ? editorState.getCurrentContent().getBlockBefore(selectionKey)
    : editorState.getCurrentContent().getBlockAfter(selectionKey);

  if (newActiveBlock && newActiveBlock.get('key') === selectionKey) {
    return undefined;
  }

  // const selection = window.getSelection();
  // const range = document.createRange();
  // range.setStart(startNode, 0);
  // range.setEnd(endNode, 0);
  // selection.removeAllRanges();
  // selection.addRange(range);


  if (newActiveBlock) {
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
