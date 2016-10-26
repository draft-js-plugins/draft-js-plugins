import { Entity } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import addImage from './modifiers/addImage';
import ImageComponent from './Image';
import ImageAdd from './ImageAdd';
import imageStyles from './imageStyles.css';
import addImageStyles from './addImageStyles.css';

const defaultTheme = {
  addImage: addImageStyles.addImage,
  addImagePopover: addImageStyles.addImagePopover,
  addImageClosedPopover: addImageStyles.addImageClosedPopover,
  addImageBottomGradient: addImageStyles.addImageBottomGradient,
  addImageButton: addImageStyles.addImageButton,
  addImagePressedButton: addImageStyles.addImagePressedButton,
  addImageInput: addImageStyles.addImageInput,
  addImageConfirmButton: addImageStyles.addImageConfirmButton,

  image: imageStyles.image,
};

const imagePlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  let Image = config.imageComponent || ImageComponent;
  if (config.decorator) {
    Image = config.decorator(Image);
  }
  const addImageButtonContent = config.addImageButtonContent ? config.addImageButtonContent : '📷';
  return {
    blockRendererFn: (block) => {
      if (block.getType() === 'atomic') {
        const entity = Entity.get(block.getEntityAt(0));
        const type = entity.getType();
        if (type === 'image') {
          return {
            component: decorateComponentWithProps(Image, { theme }),
            editable: false,
          };
        }
      }

      return null;
    },
    ImageAdd: decorateComponentWithProps(ImageAdd, { theme, addImageButtonContent }),
    addImage,
  };
};

export default imagePlugin;
export const Image = ImageComponent;
