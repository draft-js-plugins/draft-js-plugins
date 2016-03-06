import { Modifier, EditorState, Entity } from 'draft-js-cutting-edge';
import getWordAt from '../getWordAt';

const addMention = (editorState, mention, selection) => {
  const entityKey = Entity.create('mention', 'IMMUTABLE', { mention });

  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(selection.getAnchorKey());
  const blockText = currentBlock.getText();
  const result = getWordAt(blockText, selection.getAnchorOffset());

  // get selection of the @mention search text
  const mentionTextSelection = editorState.getSelection().merge({
    anchorOffset: result.begin,
    focusOffset: result.end,
  });

  // TODO add a space right after the mention
  const mentionReplaced = Modifier.replaceText(
    currentContent,
    mentionTextSelection,
    mention.handle,
    null, // no inline style neeeded
    entityKey
  );
  const newEditorState = EditorState.push(
    editorState,
    mentionReplaced,
    'apply-entity',
  );
  return EditorState.forceSelection(newEditorState, mentionReplaced.getSelectionAfter());
};

export default addMention;
