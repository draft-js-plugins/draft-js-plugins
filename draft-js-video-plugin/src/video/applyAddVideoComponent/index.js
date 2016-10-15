import React, { Component } from 'react';
import addVideo from '../modifiers/addVideo';
import utils from '../utils';

const getDisplayName = (WrappedComponent) => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default (store, config) => (WrappedComponent) => {
  class AddVideoWrapperComponent extends Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      const {
        isVideo = () => false,
        getVideoSrc = () => ({}),
      } = config;
      return (
        <WrappedComponent
          addVideo={(url) => {
            if (isVideo(url)) {
              const editorState = addVideo(store.getEditorState(), getVideoSrc(url));
              store.setEditorState(editorState);
            }
            if (utils.isYoutube(url)) {
              const editorState = addVideo(store.getEditorState(), utils.getYoutubeSrc(url));
              store.setEditorState(editorState);
            }
            if (utils.isVimeo(url)) {
              const editorState = addVideo(store.getEditorState(), utils.getVimeoSrc(url));
              store.setEditorState(editorState);
            }
          }}
          {...this.props}
        />
      );
    }
  }
  AddVideoWrapperComponent.displayName = `propDecorator(${getDisplayName(WrappedComponent)})`;
  AddVideoWrapperComponent.WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;
  return AddVideoWrapperComponent;
};
