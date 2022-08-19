import { Modifier, EditorState } from 'draft-js';
import shortnameToUnicode from '../utils/shortnameToUnicode';
import getSearchText from '../utils/getSearchText';

// This modifier can inserted emoji to current cursor position (with replace selected fragment),
// or replaced emoji shortname like ":thumbsup:". Behavior determined by `Mode` parameter.
const Mode = {
  INSERT: 'INSERT', // insert emoji to current cursor position
  REPLACE: 'REPLACE', // replace emoji shortname
};

export default function addEmoji(
  editorState: EditorState,
  emojiShortName: string,
  mode = Mode.INSERT
): EditorState {
  const emoji = shortnameToUnicode(emojiShortName);
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    'emoji',
    'IMMUTABLE',
    { emojiUnicode: emoji }
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const currentSelectionState = editorState.getSelection();

  let emojiAddedContent;
  let emojiEndPos = 0;
  let blockSize = 0;

  switch (mode) {
    case Mode.INSERT: {
      // in case text is selected it is removed and then the emoji is added
      const afterRemovalContentState = Modifier.removeRange(
        contentState,
        currentSelectionState,
        'backward'
      );

      // deciding on the position to insert emoji
      const targetSelection = afterRemovalContentState.getSelectionAfter();

      emojiAddedContent = Modifier.insertText(
        afterRemovalContentState,
        targetSelection,
        emoji,
        undefined,
        entityKey
      );

      emojiEndPos = targetSelection.getAnchorOffset();
      const blockKey = targetSelection.getAnchorKey();
      blockSize = contentState.getBlockForKey(blockKey).getLength();

      break;
    }

    case Mode.REPLACE: {
      const { begin, end } = getSearchText(editorState, currentSelectionState);

      // Get the selection of the :emoji: search text
      const emojiTextSelection = currentSelectionState.merge({
        anchorOffset: begin,
        focusOffset: end,
      });

      emojiAddedContent = Modifier.replaceText(
        contentState,
        emojiTextSelection,
        emoji,
        undefined,
        entityKey
      );

      emojiEndPos = end;
      const blockKey = emojiTextSelection.getAnchorKey();
      blockSize = contentState.getBlockForKey(blockKey).getLength();

      break;
    }

    default:
      throw new Error('Unidentified value of "mode"');
  }

  // If the emoji is inserted at the end, a space is appended right after for
  // a smooth writing experience.
  if (emojiEndPos === blockSize) {
    emojiAddedContent = Modifier.insertText(
      emojiAddedContent,
      emojiAddedContent.getSelectionAfter(),
      ' '
    );
  }

  const newEditorState = EditorState.push(
    editorState,
    emojiAddedContent,
    'insert-fragment'
  );
  return EditorState.forceSelection(
    newEditorState,
    emojiAddedContent.getSelectionAfter()
  );
}

export { Mode };
