import React from 'react';
import { Entity } from 'draft-js';
import utils from './video/utils';
import addVideo from './video/modifiers/addVideo';
import defaultCompoent from './video/components/DefaultVideoComponent';
import * as customType from './video/constants';

const createVideoPlugin = (config = {}) => {
  const {
    isVideo = () => false,
    getVideoSrc = () => ({}),
    wrapperComponent,
  } = config;
  return {
    handlePastedText: (text, html, { getEditorState, setEditorState }) => {
      if (isVideo(text)) {
        setEditorState(addVideo(getEditorState(), getVideoSrc(text)));
        return true;
      }
      if (utils.isYoutube(text)) {
        setEditorState(addVideo(getEditorState(), utils.getYoutubeSrc(text)));
        return true;
      }
      if (utils.isVimeo(text)) {
        setEditorState(addVideo(getEditorState(), utils.getVimeoSrc(text)));
        return true;
      }
      return false;
    },
    blockRendererFn: (contentBlock) => {
      if (!contentBlock.getEntityAt(0)) {
        return null;
      }
      const blockType = contentBlock.getType();
      const entityData = Entity
        .get(contentBlock.getEntityAt(0))
        .getData();
      if (blockType === 'atomic' && entityData.type === customType.VIDEOTYPE) {
        return {
          component: wrapperComponent ? wrapperComponent : defaultCompoent,
          props: entityData,
        };
      }
      return null;
    },
  };
};


export default createVideoPlugin;

