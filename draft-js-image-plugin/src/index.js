import { Entity, AtomicBlockUtils } from 'draft-js';
import Image from './components/image';
import styles from './style.css';

const ACCEPTED_MIMES = ['image/png', 'image/jpeg', 'image/gif'];

const imagePlugin = (config = {}) => {
  const type = config.type || 'block-image';
  const theme = config.theme ? config.theme : styles;
  const component = config.component || Image({ theme });
  const upload = config.upload || function (x, callback) {
    callback(x);
  };
  return {
    // Handle 'block-image' block-type with Image component
    blockRendererFn: (contentBlock) => {
      const blockType = contentBlock.getType();
      if (blockType === type) {
        return {
          component
        };
      }
      return undefined;
    },
    handlePastedFiles(e, editor) {
      // Get editor state
      let editorState = editor.getEditorState();

      // No image found
      if (e.length === 0) {
        console.error('no image found');
        return;
      }

      // Only support one image
      if (e.length !== 1) {
        console.error('only support one image');
        return;
      }

      // get image
      const image = e[0];

      // Only image is accepted
      if (ACCEPTED_MIMES.indexOf(image.type) < 0) {
        console.error(`bad mime type: ${image.type}`);
        return;
      }

      // get image blob data as data url
      const reader = new FileReader();
      reader.onload = function (event) {
        // upload data url
        const url = event.target.result;
        upload(url, (url2) => {
          // insert image
          const entityKey = Entity.create('block-image', 'IMMUTABLE',
            {
              src: url2, progress: -1
            }
          );
          editorState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');

          // Set editor state
          editor.setEditorState(editorState);
        });
      };
      reader.readAsDataURL(image);
    }

  };
};

export default imagePlugin;
export const imageCreator = Image;
export const imageStyles = styles;
