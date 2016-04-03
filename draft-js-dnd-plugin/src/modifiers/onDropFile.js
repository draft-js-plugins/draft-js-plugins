import addBlock from './addBlock';
import modifyBlockData from './modifyBlockData';
import { Entity } from 'draft-js';

function readFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader();

    // This is called when finished reading
    reader.onload = event => {
      // Return an array with one image
      resolve({
        // These are attributes like size, name, type, ...
        ...file,

        // This is the files content as base64
        src: event.target.result,

        // No URL, since nothing on server
        url: null,
      });
    };

    reader.readAsDataURL(file);
  });
}

function readFiles(files) {
  return Promise.all(files.map(readFile));
}

function getBlocksWhereEntityData(state, query) {
  return state.getCurrentContent().get('blockMap').filter(block => {
    const entityData = block.getEntityAt(0) ? Entity.get(block.getEntityAt(0)).getData() : null;
    return block.get('type') === 'image' && entityData && query(entityData);
  });
}

export default function onDropFile(config) {
  return function onDropFileInner(selection, files, { getEditorState, setEditorState }) {
    // Get upload function from config or editor props
    const upload = config.upload;
    const progress = config.progress || (percent => config.emitter.emit('progress', percent));
    if (upload) {
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
          state = addBlock(state, selection, 'image', { ...preview, progress: 1 });
        });
        setEditorState(state);

        // Perform upload
        upload(data, uploadedFiles => {
          // Success, remove 'progress' and 'src'
          let newEditorState = getEditorState();
          uploadedFiles.forEach(file => {
            const blocks = getBlocksWhereEntityData(newEditorState, y => y.src === file.src);
            if (blocks.size) {
              newEditorState = modifyBlockData(newEditorState, blocks.first().get('key'), {
                progress: undefined,
                src: undefined, ...file,
              });
            }
          });

          // Propagate progress
          if (progress) progress(null);
          setEditorState(newEditorState);
        }, () => {
          // console.error(err);
        }, (percent) => {
          // On progress, set entity data's progress field
          let newEditorState = getEditorState();
          previews.forEach(preview => {
            const blocks = getBlocksWhereEntityData(newEditorState, preview2 => preview2.src === preview.src);
            if (blocks.size) {
              newEditorState = modifyBlockData(newEditorState, blocks.first().get('key'), { progress: percent });
            }
          });
          setEditorState(newEditorState);

          // Propagate progress
          if (progress) progress(percent);
        });
      });

      return true;
    }

    return undefined;
  };
}
