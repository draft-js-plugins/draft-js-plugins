import addBlock from './addBlock';
import replaceBlock from './replaceBlock';
import modifyBlockData from './modifyBlockData';
import { readFiles } from '../utils/file';
import { getBlocksWhereEntityData } from '../utils/block';

function defaultHandlePlaceholder(state, selection, data, defaultBlockType) {
  return addBlock(state, selection, defaultBlockType, data);
}

/* function defaultHandleBlock(state, selection, data, defaultBlockType) {
  return addBlock(state, selection, defaultBlockType, data);
} */

export default function onDropFile(config) {
  return function onDropFileInner(selection, files, { getEditorState, setEditorState }) {
    // Get upload function from config or editor props
    const { handleUpload, handlePlaceholder, handleBlock, defaultBlockType, handleProgress } = config;
    if (handleUpload) {
      const formData = new FormData();

      // Set data {files: [Array of files], formData: FormData}
      const data = { files: [], formData };
      for (const key in files) {
        if (files[key] && files[key] instanceof File) {
          data.formData.append('files', files[key]);
          data.files.push(files[key]);
        }
      }

      // Read files on client side
      readFiles(data.files).then(placeholders => {
        // Add blocks for each image before uploading
        let state = getEditorState();
        placeholders.forEach(placeholder => {
          const newEditorStateOrBlockType = handleBlock
            ? handlePlaceholder(state, selection, { ...placeholder, progress: 1 })
            : defaultHandlePlaceholder(state, selection, { ...placeholder, progress: 1 }, defaultBlockType);

          if (!newEditorStateOrBlockType) {
            state = defaultHandlePlaceholder(state, selection, { ...placeholder, progress: 1 }, defaultBlockType);
          } else if (typeof newEditorStateOrBlockType === 'string') {
            state = defaultHandlePlaceholder(state, selection, { ...placeholder, progress: 1 }, newEditorStateOrBlockType);
          } else {
            state = newEditorStateOrBlockType;
          }
        });
        setEditorState(state);

        // Perform upload
        handleUpload(data, uploadedFiles => {
          // Success, remove 'progress' and 'src'
          let newEditorState = getEditorState();
          uploadedFiles.forEach(file => {
            const blocks = getBlocksWhereEntityData(state, block => block.src === file.src && block.progress !== undefined);
            if (blocks.size) {
              const newEditorStateOrBlockType = handleBlock
                ? handleBlock(newEditorState, newEditorState.getSelection(), file)
                : defaultBlockType;
              newEditorState = replaceBlock(newEditorState, blocks.first().get('key'), newEditorStateOrBlockType);
            } /* else {
              const newEditorStateOrBlockType = handleBlock
                ? handleBlock(newEditorState, newEditorState.getSelection(), file)
                : defaultHandleBlock(newEditorState, newEditorState.getSelection(), file, defaultBlockType);

              if (!newEditorStateOrBlockType) {
                newEditorState = defaultHandleBlock(newEditorState, selection, file, defaultBlockType);
              } else if (typeof newEditorStateOrBlockType === 'string') {
                newEditorState = defaultHandleBlock(newEditorState, selection, file, newEditorStateOrBlockType);
              } else {
                newEditorState = newEditorStateOrBlockType;
              }
            } */
          });

          // Propagate progress
          if (handleProgress) handleProgress(null);
          setEditorState(newEditorState);
        }, () => {
          // console.error(err);
        }, (percent) => {
          // On progress, set entity data's progress field
          let newEditorState = getEditorState();
          placeholders.forEach(placeholder => {
            const blocks = getBlocksWhereEntityData(newEditorState, p => p.src === placeholder.src && p.progress !== undefined);
            if (blocks.size) {
              newEditorState = modifyBlockData(newEditorState, blocks.first().get('key'), { progress: percent });
            }
          });
          setEditorState(newEditorState);

          // Propagate progress
          if (handleProgress) {
            handleProgress(percent);
          }
        });
      });

      return true;
    }

    return undefined;
  };
}
