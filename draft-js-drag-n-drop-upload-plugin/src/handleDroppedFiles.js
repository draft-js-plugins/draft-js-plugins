import { EditorState } from 'draft-js';
import modifyBlockData from './modifiers/modifyBlockData';
import removeBlock from './modifiers/removeBlock';
import { readImages } from './utils/file';
import { getBlocksWhereEntityData } from './utils/block';

/* function defaultHandleBlock(state, selection, data, defaultBlockType) {
  return addBlock(state, selection, defaultBlockType, data);
} */

let uploadingId = 1;
const uploadingImages = {};

export default function onDropFile(config) {
  return function onDropFileInner(selection, files, { getEditorState, setEditorState }) {
    // TODO need to make sure the correct image block is added
    // TODO -> addImage must be passed in. content type matching should happen

    // TODO make sure the Form building also works fine with S3 direct upload

    // Get upload function from config or editor props
    const {
      handleUpload,
      handleProgress,
      removeImageOnError = true,
      handleError
    } = config;

    if (handleUpload) {
      // Set data {files: [{ id, file }], formData: FormData}
      const data = { files: [] };
      for (const key in files) { // eslint-disable-line no-restricted-syntax
        if (files[key] && files[key] instanceof File) {
          const file = files[key];
          data.files.push(file);
        }
      }

      setEditorState(EditorState.acceptSelection(getEditorState(), selection));

      const handleUploaded = (uploadResult, success) => {
        let newEditorState = getEditorState();
        uploadResult.forEach(({ src, file }) => {
          const id = uploadingImages[file];
          if (!id) {
            return;
          }
          const blocks = getBlocksWhereEntityData(newEditorState, (block) => block.imageUploadingId === id);
          if (blocks.size) {
            if (success) {
              newEditorState = modifyBlockData(
                newEditorState,
                blocks.first().get('key'),
                { imageUploadProgress: undefined, imageUploadingId: null, src }
              );
            } else {
              if (removeImageOnError) {
                const newContentState = removeBlock(newEditorState.getCurrentContent(), blocks.first().get('key'));
                newEditorState = EditorState.push(newEditorState, newContentState, 'move-block');
              }
              if (handleError) {
                newEditorState = handleError(newEditorState, blocks.first(), file);
              }
            }
          }
          uploadingImages[file] = null;
          uploadingImages[id] = null;
        });

        setEditorState(newEditorState);
      };

      // Read files on client side
      readImages(data.files).then((placeholders) => {
        // Add blocks for each image before uploading
        let editorState = getEditorState();
        placeholders.forEach((placeholder, index) => {
          const file = data.files[index];
          uploadingImages[file] = uploadingId;
          uploadingImages[uploadingId] = file;
          editorState = config.addImage(editorState, placeholder.src, {
            imageUploadProgress: 0,
            imageUploadingId: uploadingId,
          });
          uploadingId += 1;
        });
        setEditorState(editorState);

        // Perform upload
        handleUpload(data, (uploadedFiles) => {
          handleUploaded(uploadedFiles, true);
        }, (errorFiles) => {
          handleUploaded(errorFiles, false);
        }, (file, percent) => {
          // On progress, set entity data's progress field
          const id = uploadingImages[file];
          if (!id) {
            return;
          }
          let newEditorState = getEditorState();
          const blocks = getBlocksWhereEntityData(newEditorState, (block) => block.imageUploadingId === id);
          if (blocks.size) {
            newEditorState = modifyBlockData(newEditorState, blocks.first().get('key'), { imageUploadProgress: percent });
          }
          setEditorState(newEditorState);

          // Propagate progress
          if (handleProgress) {
            handleProgress(file, percent);
          }
        });
      });

      return 'handled';
    }

    return undefined;
  };
}
