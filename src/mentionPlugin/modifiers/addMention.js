import { Modifier, EditorState, Entity } from 'draft-js-cutting-edge';
import getWordAt from '../utils/getWordAt';

const addMention = (editorState, mention, selection) => {
  // TODO allow the user to override if the mentions are SEGMENTED, IMMUTABLE or MUTABLE
  const entityKey = Entity.create('mention', 'SEGMENTED', { mention });

  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(selection.getAnchorKey());
  const blockText = currentBlock.getText();
  const result = getWordAt(blockText, selection.getAnchorOffset());

  // get selection of the @mention search text
  const mentionTextSelection = editorState.getSelection().merge({
    anchorOffset: result.begin,
    focusOffset: result.end,
  });

  const mentionReplacedContent = Modifier.replaceText(
    currentContent,
    mentionTextSelection,
    mention.handle,
    null, // no inline style needed
    entityKey
  );
  const spaceAddedContent = Modifier.insertText(
    mentionReplacedContent,
    mentionReplacedContent.getSelectionAfter(),
    ' ',
  );
  const newEditorState = EditorState.push(
    editorState,
    spaceAddedContent,
    'insert-mention',
  );
  return EditorState.forceSelection(newEditorState, spaceAddedContent.getSelectionAfter());
};

export default addMention;
