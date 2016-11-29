import { Entity } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import addVideo from './video/modifiers/addVideo';
import DefaultVideoComponent from './video/components/DefaultVideoComponent';
import * as types from './video/constants';
import videoStyles from './videoStyles.css';

const defaultTheme = videoStyles;

const videoPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  let Video = config.videoComponent || DefaultVideoComponent;
  if (config.decorator) {
    Video = config.decorator(Video);
  }
  const ThemedVideo = decorateComponentWithProps(Video, { theme });
  return {
    blockRendererFn: (block) => {
      if (block.getType() === types.ATOMIC) {
        //TODO subject to change for draft-js next release
        const entity = Entity.get(block.getEntityAt(0));
        const type = entity.getType();
        if (type === types.VIDEOTYPE) {
          return {
            component: ThemedVideo,
            editable: false,
          };
        }
      }

      return null;
    },
    addVideo,
  };
};

export default videoPlugin;
