
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
    return 'not-handled';
  }

  // Get data 'text' (anything else won't move the cursor) and expecting kind of data (text/key)
  const raw = dataTransfer.data.getData('text');
  const [key, blockKey] = raw ? raw.split(':') : [];

  // Existing block dropped
  if (key !== DRAFTJS_BLOCK_KEY) {
    return 'not-handled';
  }

  setEditorState(onDrop(editorState, selection, blockKey));

  return 'handled';
};
