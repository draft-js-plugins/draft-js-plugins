import {
  BlockMapBuilder,
  CharacterMetadata,
  ContentBlock,
  EditorState,
  genKey,
  Modifier,
} from 'draft-js';
import { List, Repeat } from 'immutable';

export default (editorState, entityKey, character, selectionState) => {
  const contentState = editorState.getCurrentContent();

  const afterRemoval = Modifier.removeRange(contentState, selectionState, 'backward');

  const targetSelection = afterRemoval.getSelectionAfter();
  const afterSplit = Modifier.splitBlock(afterRemoval, targetSelection);
  const insertionTarget = afterSplit.getSelectionAfter();

  const asAtomicBlock = Modifier.setBlockType(afterSplit, insertionTarget, 'atomic');

  const charData = CharacterMetadata.create({ entity: entityKey });

  const fragmentArray = [new ContentBlock({
    key: genKey(),
    type: 'atomic',
    text: character,
    characterList: List(Repeat(charData, character.length))
  }), new ContentBlock({
    key: genKey(),
    type: 'unstyled',
    text: '',
    characterList: List()
  })];

  const fragment = BlockMapBuilder.createFromArray(fragmentArray);

  const withAtomicBlock = Modifier.replaceWithFragment(asAtomicBlock, insertionTarget, fragment);

  const newContent = withAtomicBlock.merge({
    selectionBefore: selectionState,
    selectionAfter: withAtomicBlock.getSelectionAfter().set('hasFocus', true)
  });

  return EditorState.push(editorState, newContent, 'insert-fragment');
};
