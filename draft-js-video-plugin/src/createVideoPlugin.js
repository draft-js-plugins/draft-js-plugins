import React from 'react';
import addVideo from './video/modifiers/addVideo';
import DefaultVideoComponent from './video/components/DefaultVideoComponent';
import * as types from './video/constants';
import { defaultTheme } from './theme.js';

const videoPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  let Video = config.videoComponent || DefaultVideoComponent;
  if (config.decorator) {
    Video = config.decorator(Video);
  }
  const ThemedVideo = props => <Video {...props} theme={theme} />;
  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === types.ATOMIC) {
        // TODO subject to change for draft-js next release
        const contentState = getEditorState().getCurrentContent();
        const entity = contentState.getEntity(block.getEntityAt(0));
        const type = entity.getType();
        const { src } = entity.getData();
        if (type === types.VIDEOTYPE) {
          return {
            component: ThemedVideo,
            editable: false,
            props: {
              src,
            },
          };
        }
      }

      return null;
    },
    addVideo,
    types,
  };
};

export default videoPlugin;
