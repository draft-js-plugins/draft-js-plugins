import addBlock from './modifiers/addBlock';
import droppedFile from './modifiers/droppedFile';
import blockRendererFn from './blockRendererFn';
import Image from './Image';

const uploadPlugin = (config = {}) => {
  const blockRendererConfig = {
    ...config,
    Image: Image
  };
  return {
    pluginProps: {
      blockRendererFn: blockRendererFn(blockRendererConfig),
      handleDroppedFiles: droppedFile(config)
    }
  };
};

export default uploadPlugin;
