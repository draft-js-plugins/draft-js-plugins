import { Entity, AtomicBlockUtils } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import addImage from './modifiers/addImage';
import ImageComponent from './Image';
import imageStyles from './imageStyles.css';

const ACCEPTED_MIMES = ['image/png', 'image/jpeg', 'image/gif'];

const defaultTheme = {
  image: imageStyles.image
};

const imagePlugin = function(config) {
  if(!config)config = {};
  const theme = config.theme ? config.theme : defaultTheme;
  const upload = config.upload || function (x, callback) {
    callback(x);
  };
  let Image = config.imageComponent || ImageComponent;
  if (config.decorator) {
    Image = config.decorator(Image);
  }
  const ThemedImage = decorateComponentWithProps(Image, { theme });
  return {
    blockRendererFn(block) {
      if (block.getType() === 'atomic') {
        const entity = Entity.get(block.getEntityAt(0));
        const type = entity.getType();
        console.log('entity type',type);
        if (type === 'block-image') {
          return {
            component: ThemedImage,
            editable: false
          };
        }
      }

      return null;
    },
    addImage,
    handlePastedFiles(e, editor) {
      // Get editor state
      let editorState = editor.getEditorState();

      // No image found
      if (e.length === 0) {
        return;
      }

      // Only support one image
      if (e.length !== 1) {
        return;
      }

      // get image
      const image = e[0];

      // Only image is accepted
      if (ACCEPTED_MIMES.indexOf(image.type) < 0) {
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
export const Image = ImageComponent;
