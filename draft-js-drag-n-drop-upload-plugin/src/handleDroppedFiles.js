import { EditorState } from 'draft-js';

import modifyBlockData from './modifiers/modifyBlockData';
import replaceBlock from './modifiers/replaceBlock';
import { getBlocksWhereEntityData } from './utils/block';
import { readFiles } from './utils/file';

function defaultHandleBlock(state, selection, data, blockType) {
  return addBlock(state, selection, blockType, data);
}

const defaultBlockType = 'UNSTYLED';


export default function onDropFile(config) {
  return function onDropFileInner(selection, files, { getEditorState, setEditorState }) {
    // TODO need to make sure the correct image block is added
    // TODO -> addImage must be passed in. content type matching should happen

    // TODO make sure the Form building also works fine with S3 direct upload

    // Get upload function from config or editor props
    const {
      addImage,
      handleBlock,
      handleProgress,
      handleUpload,
    } = config;

    if (handleUpload) {
      const formData = new FormData();

      // Set data {files: [Array of files], formData: FormData}
      const data = { files: [], formData };
      for (const key in files) { // eslint-disable-line no-restricted-syntax
        if (files[key] && files[key] instanceof File) {
          data.formData.append('files', files[key]);
          data.files.push(files[key]);
        }
      }

      setEditorState(EditorState.acceptSelection(getEditorState(), selection));

      // Read files on client side
      readFiles(data.files).then((placeholders) => {
        // Add blocks for each image before uploading
        const editorStateWithPlaceholders = placeholders.reduce(
          (editorState, placeholder) => addImage(editorState, placeholder.src),
          getEditorState()
        );
        setEditorState(editorStateWithPlaceholders);

        // Perform upload
        handleUpload(data, (uploadedFiles, { retainSrc }) => {
          // Success, remove 'progress' and 'src'
          const editorStateWithImages = uploadedFiles.reduce((editorState, file) => {
            const blocks = getBlocksWhereEntityData(
              editorState,
              (block) => (block.src === file.src) && (block.progress !== undefined)
            );

            if (blocks.size) {
              const newEditorStateOrBlockType = handleBlock
                ? handleBlock(editorState, editorState.getSelection(), file)
                : defaultBlockType;

              return replaceBlock(
                modifyBlockData(
                  editorState,
                  blocks.first().get('key'),
                  retainSrc ? { progress: undefined } : { progress: undefined, src: undefined }
                ),
                blocks.first().get('key'),
                newEditorStateOrBlockType
              );
            }

            const newEditorStateOrBlockType = handleBlock
              ? handleBlock(editorState, editorState.getSelection(), file)
              : defaultHandleBlock(editorState, editorState.getSelection(), file, defaultBlockType);

            if (!newEditorStateOrBlockType) {
              return defaultHandleBlock(editorState, selection, file, defaultBlockType);
            } else if (typeof newEditorStateOrBlockType === 'string') {
              return defaultHandleBlock(editorState, selection, file, newEditorStateOrBlockType);
            }

            return newEditorStateOrBlockType;
          }, getEditorState());

          // Propagate progress
          if (handleProgress) handleProgress(null);
          setEditorState(editorStateWithImages);
        }, (err) => {
          console.error(err);
        }, (percent) => {
          // On progress, set entity data's progress field
          const editorStateWithUpdatedPlaceholders = placeholders.reduce((editorState, placeholder) => {
            const blocks = getBlocksWhereEntityData(
              editorState,
              (p) => (p.src === placeholder.src) && (p.progress !== undefined)
            );

            if (blocks.size) {
              return modifyBlockData(editorState, blocks.first().get('key'), { progress: percent });
            }

            return editorState;
          }, getEditorState());
          setEditorState(editorStateWithUpdatedPlaceholders);

          // Propagate progress
          if (handleProgress) {
            handleProgress(percent);
          }
        });
      });

      // draft-js-plugin-editor requires true
      return true;
    }

    return undefined;
  };
}
