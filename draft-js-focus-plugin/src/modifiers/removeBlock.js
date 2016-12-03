import { Modifier, EditorState, SelectionState } from 'draft-js';

export default function (store, blockKey) {
  const editorState = store.getEditorState();
  let content = editorState.getCurrentContent();

  const beforeKey = content.getKeyBefore(blockKey);
  const beforeBlock = content.getBlockForKey(beforeKey);

  // Note: if the focused block is the first block then it is reduced to an
  // unstyled block with no character
  if (beforeBlock === undefined) {
    const targetRange = new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 1,
    });
    // change the blocktype and remove the characterList entry with the sticker
    content = Modifier.removeRange(content, targetRange, 'backward');
    content = Modifier.setBlockType(
      content,
      targetRange,
      'unstyled'
    );
    const newState = EditorState.push(editorState, content, 'remove-block');
    const newSelection = new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 0,
    });
    return EditorState.forceSelection(newState, newSelection);
  }

  const targetRange = new SelectionState({
    anchorKey: beforeKey,
    anchorOffset: beforeBlock.getLength(),
    focusKey: blockKey,
    focusOffset: 1,
  });

  content = Modifier.removeRange(content, targetRange, 'backward');
  const newState = EditorState.push(editorState, content, 'remove-block');

  // Note: Ugly workaround to set the selection at the end of the before block.
  // When I tried doing it directly Draft.js failed to render the blocks properly.
  setTimeout(() => {
    const postNewSelection = new SelectionState({
      anchorKey: beforeKey,
      anchorOffset: beforeBlock.getLength(),
      focusKey: beforeKey,
      focusOffset: beforeBlock.getLength(),
    });
    store.setEditorState(EditorState.forceSelection(store.getEditorState(), postNewSelection));
  }, 0);

  // force to new selection
  const newSelection = new SelectionState({
    anchorKey: beforeKey,
    anchorOffset: 0,
    focusKey: beforeKey,
    focusOffset: 0,
  });
  return EditorState.forceSelection(newState, newSelection);
}
