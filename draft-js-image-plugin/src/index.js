import decorateComponentWithProps from 'decorate-component-with-props';
import addImage from './modifiers/addImage';
import ImageComponent from './Image';
import imageStyles from './imageStyles.css';

import creaeHandleUploadFn from './handleUpload';
import ImageButton from './ImageButton';
import createImageButton from './ImageButton/createImageButton';

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

  const {
    handleUpload,
    handleProgress,
    removeImageOnError,
    handleError,
    enableDndUpload,
  } = config;

  const handleUploadFn = creaeHandleUploadFn({
    handleUpload,
    handleProgress,
    removeImageOnError,
    handleError,
    addImage,
  });

  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent();
        const entity = block.getEntityAt(0);
        if (!entity) return null;
        const type = contentState.getEntity(entity).getType();
        if (type === 'image') {
          return {
            component: ThemedImage,
            editable: false,
          };
        }
        return null;
      }

      return null;
    },
    blockStyleFn: (block, { getEditorState }) => {
      const editorState = getEditorState();
      const contentState = editorState.getCurrentContent();
      const entity = block.getEntityAt(0);
      if (!entity) {
        return null;
      }
      const data = contentState.getEntity(entity).getData();
      if (!data) {
        return null;
      }
      const { imageUploadProgress } = data;
      if (typeof imageUploadProgress !== 'undefined' && imageUploadProgress !== null) {
        return imageStyles.imageUploading;
      }
      return null;
    },
    addImage,
    handleUpload: handleUploadFn,
    ImageButton: decorateComponentWithProps(ImageButton, {
      handleUpload: handleUploadFn,
    }),
    createImageButton(createImageButtonConfig) {
      return decorateComponentWithProps(createImageButton(createImageButtonConfig), {
        handleUpload: handleUploadFn,
      });
    },
    handleDroppedFiles: enableDndUpload ? handleUploadFn : null,
  };
};

export const Image = ImageComponent;
