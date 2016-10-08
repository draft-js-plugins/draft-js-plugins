import Image from './components/image';
import styles from './style.css';
import {Entity, AtomicBlockUtils} from 'draft-js';

const imagePlugin = (config = {}) => {
  const type = config.type || 'block-image';
  const theme = config.theme ? config.theme : styles;
  const component = config.component || Image({theme});
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
      var editorState = editor.getEditorState();

      // No image found
      if (e.length == 0) {
        console.error('no image found');
        return;
      }

      // Only support one image
      if (e.length != 1) {
        console.error('only support one image');
        return;
      }

      // get image
      var image = e[0];

      // get image blob data as data url
      var reader = new FileReader();
      reader.onload = function (event) {
        // upload data url
        var url = event.target.result;
        upload(url, function (url2) {
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
