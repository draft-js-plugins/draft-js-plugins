import onDropFile from './modifiers/onDropFile';
import onDrop from './modifiers/onDrop';
import blockRendererFn from './blockRendererFn';
import Image from './Image';
import imageStyles from './imageStyles.css';
import { Map } from 'immutable';
import decorateComponentWithProps from 'decorate-component-with-props';

const defaultTheme = Map({
  imageWrapper: imageStyles.imageWrapper,
  image: imageStyles.image,
  imageButton: imageStyles.imageButton,

  left: imageStyles.left,
  center: imageStyles.center,
  right: imageStyles.right
});

const uploadPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;

  const attachButtons = config.attachButtons !== false;

  const blockRendererConfig = {
    ...config,
    Image: decorateComponentWithProps(Image, {theme, attachButtons})
  };
  return {
    pluginProps: {
      blockRendererFn: blockRendererFn(blockRendererConfig),
      handleDroppedFiles: onDropFile(config),
      handleDrop: onDrop(config)
    }
  };
};

export default uploadPlugin;
