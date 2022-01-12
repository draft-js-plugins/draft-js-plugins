import { EditorState } from 'draft-js';
import { EditorPlugin } from '@draft-js-plugins/editor';
import handleDroppedFiles from './handleDroppedFiles';
import UploadPlaceholder from './components/UploadPlaceholder';

export { readFiles, readFile } from './utils/file';

export type PlaceholderBlockType = {
  key: string,
  text: string,
  blockKey: string
};

export type FileToUpload = {
  src: string,
  name: string
}

type SucessFunction = (uploadedFiles:Array<FileToUpload>) => void;
type FailFunction = (file: FileToUpload) => void;
type ProgressFunction = (percent:number, file:FileToUpload) => void;

export interface DndUploadPluginConfig {
  handleUpload?(data:any, success:SucessFunction, failed:FailFunction, progress:ProgressFunction):string;
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
  blockRendererFn: (block, { getEditorState }) => {
    if (block.getType() === 'atomic') {
      const contentState = getEditorState().getCurrentContent();
      const entity = block.getEntityAt(0);
      if (!entity) return null;
      const type = contentState.getEntity(entity).getType();
      if (type === 'UploadPlaceholder' || type === 'PLACEHOLDER') {
        return {
          component: UploadPlaceholder,
          editable: false,
        };
      }
      return null;
    }

   return null;
  }
});

export default createDndFileUploadPlugin;
