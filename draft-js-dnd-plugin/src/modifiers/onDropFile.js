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

function getBlockWhereEntityData(state, query) {
  const map = state.getCurrentContent().get('blockMap').toArray();
  for (let i = 0; i < map.length; i++) {
    const block = map[i];
    const entityData = block.getEntityAt(0) ? Entity.get(block.getEntityAt(0)).getData() : null;
    if (block.get('type') === 'image' && entityData && query(entityData)) {
      return block.get('key');
    }
  }

  return null;
}

export default function onDropFile(config) {
  return function onDropFileInner(e) {
    const { props, selection, files, editorState, onChange } = e;

    // Get upload function from config or editor props
    const upload = config.upload || props.upload;
    const progress = config.progress || props.progress || ((x) => config.emitter.emit('progress', x));
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
        updateEditorState(state);

        // Perform upload
        upload(data, uploadedFiles => {
          // Success, remove 'progress' and 'src'
          let newEditorState = editorState();
          uploadedFiles.forEach(x => {
            const key = getBlockWhereEntityData(newEditorState, y => y.src === x.src);
            if (key) {
              newEditorState = ModifyBlockData(newEditorState, key, {
                progress: undefined,
                src: undefined, ...file,
              });
            }
          });

          // Propagate progress
          if (progress) progress(null);
          updateEditorState(newEditorState);
        }, () => {
          // console.error(err);
        }, (percent) => {
          // On progress, set entity data's progress field
          let newEditorState = editorState();
          previews.forEach(x => {
            const key = getBlockWhereEntityData(newEditorState, y => y.src === x.src);
            if (key) {
              newEditorState = ModifyBlockData(newEditorState, key, { progress: percent });
            }
          });
          updateEditorState(newEditorState);

          // Propagate progress
          if (progress) progress(percent);
        });
      });

      return true;
    }

    return undefined;
  };
}
