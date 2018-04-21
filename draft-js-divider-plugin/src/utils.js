import { List } from 'immutable';

import {
  EditorState,
  Modifier,
  ContentBlock,
  BlockMapBuilder,
  genKey as generateRandomKey
} from 'draft-js';

// this function is almost same as `AtomicBlockUtils.insertAtomicBlock`
// https://github.com/facebook/draft-js/blob/master/src/model/modifier/AtomicBlockUtils.js#L32
export const insertCustomBlock = (editorState, blockType) => {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();

  const afterRemoval = Modifier.removeRange(
    contentState,
    selectionState,
    'backward'
  );

  const targetSelection = afterRemoval.getSelectionAfter();
  const afterSplit = Modifier.splitBlock(afterRemoval, targetSelection);
  const insertionTarget = afterSplit.getSelectionAfter();

  const asCustomBlock = Modifier.setBlockType(
    afterSplit,
    insertionTarget,
    blockType
  );

  const fragmentArray = [
    new ContentBlock({
      key: generateRandomKey(),
      type: blockType,
      text: '',
      characterList: List()
    }),
    new ContentBlock({
      key: generateRandomKey(),
      type: 'unstyled',
      text: '',
      characterList: List()
    })
  ];

  const fragment = BlockMapBuilder.createFromArray(fragmentArray);

  const withCustomBlock = Modifier.replaceWithFragment(
    asCustomBlock,
    insertionTarget,
    fragment
  );

  const newContent = withCustomBlock.merge({
    selectionBefore: selectionState,
    selectionAfter: withCustomBlock.getSelectionAfter().set('hasFocus', true)
  });

  return EditorState.push(editorState, newContent, 'insert-fragment');
};
