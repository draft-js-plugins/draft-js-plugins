import decorateComponentWithProps from 'decorate-component-with-props';
import addImage from './modifiers/addImage';
import ImageComponent from './Image';
import imageStyles from './imageStyles.css';

const defaultTheme = {
  image: imageStyles.image,
};

export default (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  let Image = config.imageComponent || ImageComponent;
  if (config.decorator) {
    Image = config.decorator(Image);
  }
  const ThemedImage = decorateComponentWithProps(Image, { theme });
  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent();
        const entity = block.getEntityAt(0);
        if (!entity) return null;
        const type = contentState.getEntity(entity).getType();
        if (type === 'IMAGE' || type === 'image') {
          return {
            component: ThemedImage,
            editable: false,
          };
        }
        return null;
      }

      return null;
    },
    addImage,
  };
};

export const Image = ImageComponent;
