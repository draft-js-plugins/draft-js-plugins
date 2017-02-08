
import moveBlock from './modifiers/moveBlock';
import { DRAFTJS_BLOCK_KEY } from './constants';

export default ({ onDrop = moveBlock }) => (
  selection,
  dataTransfer,
  isInternal,
  { getEditorState, setEditorState }
) => {
  const editorState = getEditorState();

  if (isInternal !== 'internal') {
    // NOTE: change to 'not-handled' once draft-js-plugin-editor is upgraded
    return false;
  }

  // Get data 'text' (anything else won't move the cursor) and expecting kind of data (text/key)
  const raw = dataTransfer.data.getData('text');
  const [key, blockKey] = raw ? raw.split(':') : [];

  // Existing block dropped
  if (key !== DRAFTJS_BLOCK_KEY) {
    // NOTE: change to 'not-handled' once draft-js-plugin-editor is upgraded
    return false;
  }

  setEditorState(onDrop(editorState, selection, blockKey));

  // NOTE: change to 'handled' once draft-js-plugin-editor is upgraded
  return true;
};
