import decorateComponentWithProps from 'decorate-component-with-props';
import addImage from './modifiers/addImage';
import ImageComponent from './Image';
import imageStyles from './imageStyles.css';
import ImageAdd from './ImageAdd';

const defaultTheme = {
  image: imageStyles.image,
};

export default (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent();
        const entity = contentState.getEntity(block.getEntityAt(0));
        let Image = config.imageComponent || ImageComponent;
        if (config.decorator) {
          Image = config.decorator(Image);
        }
        const ThemedImage = decorateComponentWithProps(Image, { theme });
        const fileRecord = entity.getData().fileRecord;
        if (fileRecord.type.search(/^image\/*/) < 0) {
          let File = config.filePreviewComponent || ImageComponent;
          if (config.decorator) {
            File = config.decorator(File);
          }
          const ThemedFile = decorateComponentWithProps(File, { theme });
          return {
            component: ThemedFile,
            props: {
              fileRecord: entity.getData().fileRecord,
            }
          };
        }
        return {
          component: ThemedImage,
          editable: false,
        };
      }
      return null;
    },
    addImage,
    ImageAdd,
  };
};

export const Image = ImageComponent;
