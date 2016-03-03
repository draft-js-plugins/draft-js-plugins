import { Modifier, EditorState, Entity } from 'draft-js';

const addMention = (editorState, mention, mentionSearchBegin, mentionSearchEnd) => {
  const entityKey = Entity.create('MENTION', 'IMMUTABLE', { mention });
  const mentionTextSelection = editorState.getSelection().merge({
    anchorOffset: mentionSearchBegin,
    focusOffset: mentionSearchEnd,
  });

  const mentionReplaced = Modifier.replaceText(
    editorState.getCurrentContent(),
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
