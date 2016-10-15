import { Entity } from 'draft-js';
import utils from './video/utils';
import applyAddVideoComponent from './video/applyAddVideoComponent';
import defaultCompoent from './video/components/DefaultVideoComponent';
import * as customType from './video/constants';
import addVideo from './video/modifiers/addVideo';

const createVideoPlugin = (config = {}) => {
  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
  };

  const {
    autoHandlePastedText = false,
    isVideo = () => false,
    getVideoSrc = () => ({}),
    wrapperComponent,
  } = config;

  return {
    handlePastedText: (text, html, { getEditorState, setEditorState }) => {
      if (!autoHandlePastedText) return false;
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
          component: wrapperComponent || defaultCompoent,
          props: entityData,
        };
      }
      return null;
    },
    applyAddVideoComponent: applyAddVideoComponent(store, config),
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
  };
};


export default createVideoPlugin;

