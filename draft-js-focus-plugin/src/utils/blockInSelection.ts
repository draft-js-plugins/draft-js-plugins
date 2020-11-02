import { EditorState } from 'draft-js';
import getSelectedBlocksMapKeys from './getSelectedBlocksMapKeys';

export default (editorState: EditorState, blockKey: string): boolean => {
  const selectedBlocksKeys = getSelectedBlocksMapKeys(editorState);
  return selectedBlocksKeys.includes(blockKey);
};
