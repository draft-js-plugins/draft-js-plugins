import { Modifier, EditorState } from 'draft-js';
import getSearchText from '../utils/getSearchText';
import emojioneList from '../utils/emojioneList';
import convertShortNameToUnicode from '../utils/convertShortNameToUnicode';

const addEmoji = (editorState, emojiShortName, selection) => {
  const { begin, end } = getSearchText(editorState, selection);

  // get selection of the @mention search text
  const mentionTextSelection = editorState.getSelection().merge({
    anchorOffset: begin,
    focusOffset: end,
  });

  const unicode = emojioneList[emojiShortName][0];
  const emoji = convertShortNameToUnicode(unicode);
  let mentionReplacedContent = Modifier.replaceText(
    editorState.getCurrentContent(),
    mentionTextSelection,
    emoji,
  );

  // If the mention is insert at the end a space is append right away for a smooth
  // writing experience.
  const blockKey = mentionTextSelection.getAnchorKey();
  const blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();
  if (blockSize === end) {
    mentionReplacedContent = Modifier.insertText(
      mentionReplacedContent,
      mentionReplacedContent.getSelectionAfter(),
      ' ',
    );
  }

  const newEditorState = EditorState.push(
    editorState,
    mentionReplacedContent,
    'insert-emoji',
  );
  return EditorState.forceSelection(newEditorState, mentionReplacedContent.getSelectionAfter());
};

export default addEmoji;
