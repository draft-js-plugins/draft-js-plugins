import {
  BlockMapBuilder,
  CharacterMetadata,
  ContentBlock,
  EditorState,
  Entity,
  genKey,
  Modifier,
} from 'draft-js';
import {
  List,
  Repeat
} from 'immutable';

export default (editorState) => {
  const currentContentState = editorState.getCurrentContent();
  const currentSelectionState = editorState.getSelection();

  // TODO why do we need this?
  const afterRemoval = Modifier.removeRange(
    currentContentState,
    currentSelectionState,
    'backward'
  );

  // deciding on the postion to split the text
  const targetSelection = afterRemoval.getSelectionAfter();

  // the only way to insert a new seems to be by splitting an existing in to two
  const afterSplit = Modifier.splitBlock(afterRemoval, targetSelection);

  // the position to insert our blocks
  const insertionTarget = afterSplit.getSelectionAfter();

  // TODO not sure why we need it …
  const newContentStateAfterSplit = Modifier.setBlockType(afterSplit, insertionTarget, 'sticker');

  // creating a new ContentBlock including the entity with data
  const entityKey = Entity.create('sticker', 'IMMUTABLE', { id: 'white-unicorn' });
  const charDataOfSticker = CharacterMetadata.create({ entity: entityKey });
  const stickerContentBlock = new ContentBlock({
    key: genKey(),
    type: 'sticker',
    text: '',
    characterList: List(Repeat(charDataOfSticker, 1)), // eslint-disable-line new-cap
  });

  // new contentblock so we can continue wrting right away after inserting the sticker
  const emptyTextBlock = new ContentBlock({
    key: genKey(),
    type: 'unstyled',
    text: '',
    characterList: List(), // eslint-disable-line new-cap
  });

  // create fragment containing the two content blocks
  const fragment = BlockMapBuilder.createFromArray([stickerContentBlock, emptyTextBlock]);

  // replace the contentblock we reserved for our insert
  const contentStateWithSticker = Modifier.replaceWithFragment(
    newContentStateAfterSplit,
    insertionTarget,
    fragment
  );

  // update editor state with our new state including the sticker
  return EditorState.push(
    editorState,
    contentStateWithSticker,
    'add-sticker'
  );
};
