import addBlock from './addBlock';
import removeBlock from './removeBlock';
import modifyBlockData from './modifyBlockData';
import { readFiles } from '../utils/file';
import { getBlocksWhereEntityData } from '../utils/block';

function defaultHandlePreview(state, selection, data, defaultBlockType) {
  return addBlock(state, state.getSelection(), defaultBlockType, data);
}

function defaultHandleBlock(state, selection, data, defaultBlockType) {
  return addBlock(state, state.getSelection(), defaultBlockType, data);
}

export default function onDropFile(config) {
  return function onDropFileInner(selection, files, { getEditorState, setEditorState }) {
    // Get upload function from config or editor props
    const { handleUpload, handlePreview, handleBlock, defaultBlockType, handleProgress } = config;
    if (handleUpload) {
      const formData = new FormData();

      // Set data {files: [Array of files], formData: FormData}
      const data = { files: [] };
      for (const key in files) {
        if (files[key]) {
          formData.append('files', files[key]);
          data.files.push(files[key]);
        }
      }

      data.formData = data;

      // Read files on client side
      readFiles(data.files).then(previews => {
        // Add blocks for each image before uploading
        let state = getEditorState();
        previews.forEach(preview => {
          state = handlePreview
            ? handlePreview(state, selection, { ...preview, progress: 1 })
            : defaultHandlePreview(state, selection, { ...preview, progress: 1 }, defaultBlockType);
        });
        setEditorState(state);

        // Perform upload
        handleUpload(data, uploadedFiles => {
          // Success, remove 'progress' and 'src'
          let newEditorState = getEditorState();
          uploadedFiles.forEach(file => {
            const blocks = getBlocksWhereEntityData(state, block => block.src === file.src && block.progress !== undefined);
            if (blocks.size) {
              newEditorState = removeBlock(newEditorState, blocks.first().get('key'));
            }

            newEditorState = handleBlock
              ? handleBlock(newEditorState, selection, file)
              : defaultHandleBlock(newEditorState, selection, file, defaultBlockType);
          });

          // Propagate progress
          if (handleProgress) handleProgress(null);
          setEditorState(newEditorState);
        }, () => {
          // console.error(err);
        }, (percent) => {
          // On progress, set entity data's progress field
          let newEditorState = getEditorState();
          previews.forEach(preview => {
            const blocks = getBlocksWhereEntityData(newEditorState, preview2 => preview2.src === preview.src && preview2.progress !== undefined);
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
