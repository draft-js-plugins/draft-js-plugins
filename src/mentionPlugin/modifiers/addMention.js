import { Modifier, EditorState, Entity } from 'draft-js-cutting-edge';
import getSearchText from '../utils/getSearchText';

const addMention = (editorState, mention, selection) => {
  // TODO allow the user to override if the mentions are SEGMENTED, IMMUTABLE or MUTABLE
  const entityKey = Entity.create('mention', 'SEGMENTED', { mention });
  const { begin, end } = getSearchText(editorState, selection);

  // get selection of the @mention search text
  const mentionTextSelection = editorState.getSelection().merge({
    anchorOffset: begin,
    focusOffset: end,
  });

  const mentionReplacedContent = Modifier.replaceText(
    editorState.getCurrentContent(),
    mentionTextSelection,
    mention.get('handle'),
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
