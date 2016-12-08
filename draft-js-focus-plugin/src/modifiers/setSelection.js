import { SelectionState, EditorState } from 'draft-js';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';

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

  if (newActiveBlock) {
    // TODO verify that always a key-0-0 exists
    const offsetKey = DraftOffsetKey.encode(newActiveBlock.getKey(), 0, 0);
    const node = document.querySelectorAll(`[data-offset-key="${offsetKey}"]`)[0];
    // set the native selection to the node so the caret is not in the text and
    // the selectionState matches the native selection
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(node, 0);
    range.setEnd(node, 0);
    selection.removeAllRanges();
    selection.addRange(range);

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
