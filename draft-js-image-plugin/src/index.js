import { Entity } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import addImage from './modifiers/addImage';
import ImageComponent from './Image';
import imageStyles from './imageStyles.css';

const defaultTheme = {
  image: imageStyles.image,
};

const imagePlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  let Image = config.imageComponent || ImageComponent;
  if (config.decorator) {
    Image = config.decorator(Image);
  }
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
    addImage,
  };
};

export default imagePlugin;
export const Image = ImageComponent;
