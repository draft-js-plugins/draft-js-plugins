import {List, Repeat} from 'immutable';
import {Modifier, CharacterMetadata, BlockMapBuilder, EditorState, ContentBlock, ContentState, Entity, genKey, convertToRaw} from "draft-js";

export default function (editorState, selection, type, data) {
  var contentState = editorState.getCurrentContent();
  var selectionState = selection;

  var afterRemoval = Modifier.removeRange(
      contentState,
      selectionState,
      'backward'
  );

  var targetSelection = afterRemoval.getSelectionAfter();
  var afterSplit = Modifier.splitBlock(afterRemoval, targetSelection);
  var insertionTarget = afterSplit.getSelectionAfter();

  var asMedia = Modifier.setBlockType(afterSplit, insertionTarget, type);
  var entityKey = Entity.create(
      'TOKEN',
      'IMMUTABLE',
      data
  );

  var charData = CharacterMetadata.create({entity: entityKey});

  var fragmentArray = [
    new ContentBlock({
      key: genKey(),
      type: type,
      text: ' ',
      characterList: List(Repeat(charData, 1)),
    }),
    new ContentBlock({
      key: genKey(),
      type: 'unstyled',
      text: '',
      characterList: List(),
    }),
  ];

  var fragment = BlockMapBuilder.createFromArray(fragmentArray);

  var withMedia = Modifier.replaceWithFragment(
      asMedia,
      insertionTarget,
      fragment
  );

  var newContent = withMedia.merge({
    selectionBefore: selectionState,
    selectionAfter: withMedia.getSelectionAfter().set('hasFocus', true),
  });

  return EditorState.push(editorState, newContent, 'insert-fragment');
}