import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createVideoPlugin from 'draft-js-video-plugin'; // eslint-disable-line import/no-unresolved
import editorStyles from './editorStyles.css';

const HTML5Player = (props) => {
  const { blockProps } = props;
  const { url } = blockProps;
  return (<video width="320" height="240" autoPlay >
    <source src={url} type="video/mp4" />
    Your browser does not support the video tag.
  </video>);
};

const MP4URL = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:mp4)$/;
const videoPlugin = createVideoPlugin({
  isVideo: url => MP4URL.test(url),
  getVideoSrc: url => ({
    srcID: undefined,
    srcType: 'mp4',
    url,
  }),
  wrapperComponent: HTML5Player,
});
const plugins = [videoPlugin];

export default class CustomVideoEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus} >
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => {
            this.editor = element;
          }}
        />
      </div>
    );
  }
}
