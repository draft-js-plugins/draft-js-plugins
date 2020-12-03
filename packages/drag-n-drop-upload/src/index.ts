import { EditorState } from 'draft-js';
import { EditorPlugin } from '@draft-js-plugins/editor';
import handleDroppedFiles from './handleDroppedFiles';

export { readFiles, readFile } from './utils/file';

export interface DndUploadPluginConfig {
  handleUpload?(): void;
  addImage?(
    editorState: EditorState,
    placeholderSrc: string | ArrayBuffer | null
  ): EditorState;
}

const createDndFileUploadPlugin = (
  config: DndUploadPluginConfig = {}
): EditorPlugin => ({
  // Handle file drops
  handleDroppedFiles: handleDroppedFiles(config),
});

export default createDndFileUploadPlugin;
