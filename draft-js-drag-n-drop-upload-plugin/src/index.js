import handleDroppedFiles from './handleDroppedFiles';

import defaultTheme from './imageUploadingStyle.css';

const createDndFileUploadPlugin = (config = {}) => {
  const theme = config.theme || defaultTheme;

  return ({
    // Handle file drops
    handleDroppedFiles: handleDroppedFiles(config),
    blockStyleFn: (block, { getEditorState }) => {
      const editorState = getEditorState();
      const contentState = editorState.getCurrentContent();
      const entity = block.getEntityAt(0);
      if (!entity) {
        return null;
      }
      const data = contentState.getEntity(entity).getData();
      if (!data) {
        return null;
      }
      const { imageUploadProgress } = data;
      if (typeof imageUploadProgress !== 'undefined' && imageUploadProgress !== null) {
        return theme.imageUploading;
      }
      return null;
    },
  });
};

export default createDndFileUploadPlugin;
