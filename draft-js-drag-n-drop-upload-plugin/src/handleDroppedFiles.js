import { EditorState } from 'draft-js';

import { readFiles } from './utils/file';


const getRandomString = () => Math.round(Math.random() * 10e10).toString(32);


export default function onDropFile(config) {
  return function onDropFileInner(selection, files, { getEditorState, setEditorState }) {
    // TODO need to make sure the correct image block is added
    // TODO -> addImage must be passed in. content type matching should happen

    // TODO make sure the Form building also works fine with S3 direct upload

    // Get upload function from config or editor props
    const {
      addPlaceholder,
      getPlaceholderBlock,
      handleBlock,
      handleProgress,
      handleUpload,
    } = config;

    if (handleUpload) {
      const formData = new FormData();

      // Set data {files: [Array of files], formData: FormData}
      const data = { files: [], formData };
      for (const key in files) { // eslint-disable-line no-restricted-syntax
        const file = files[key];
        file.id = getRandomString();
        if (file && file instanceof File) {
          data.formData.append('files', file);
          data.files.push(file);
        }
      }

      setEditorState(EditorState.acceptSelection(getEditorState(), selection));

      // Read files on client side
      readFiles(data.files).then((filesWithContent) => filesWithContent.map((file, index) => {
        file.id = files[index].id; // eslint-disable-line no-param-reassign
        return file;
      })).then((filesWithContent) => {
        // Add blocks for each image before uploading
        const editorStateWithPlaceholders = filesWithContent.reduce(
          (editorState, file) => addPlaceholder(editorState, file),
          getEditorState()
        );
        setEditorState(editorStateWithPlaceholders);

        // Perform upload
        handleUpload(data, (uploadedFiles) => {
          const editorStateWithImages = uploadedFiles.reduce((editorState, file) => {
            const placeholderBlock = getPlaceholderBlock(editorState, file);

            if (!placeholderBlock) {
              return editorState;
            }

            return handleBlock(editorState, placeholderBlock, file);
          }, getEditorState());
          setEditorState(editorStateWithImages);
        }, (err) => {
          console.error(err);
          // TODO: error handling should happen
        }, (percent) => {
          // On progress, set entity data's progress field
          const editorStateWithUpdatedPlaceholders = filesWithContent.reduce((editorState, file) => {
            const placeholderBlock = getPlaceholderBlock(editorState, file);

            if (!placeholderBlock) {
              return editorState;
            }

            return handleProgress(editorState, placeholderBlock, percent);
          }, getEditorState());
          setEditorState(editorStateWithUpdatedPlaceholders);
        });
      });

      return 'handled';
    }

    return 'not-handled';
  };
}
