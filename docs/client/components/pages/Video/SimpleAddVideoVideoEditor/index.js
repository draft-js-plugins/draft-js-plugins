import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createVideoPlugin from 'draft-js-video-plugin'; // eslint-disable-line import/no-unresolved
import editorStyles from './editorStyles.css';

const videoPlugin = createVideoPlugin();
const { applyAddVideoComponent } = videoPlugin;
const plugins = [videoPlugin];

// custom control button to insert new video
const Button = (props) => {
  const { addVideo } = props;
  return (
    <button
      onClick={() => {
        // get video url
        const url = prompt('Please enter video url');
        addVideo(url);
      }}
    >
      insert video
    </button>
  );
};
// apply addVideo to custom control button
const AddVideoButton = applyAddVideoComponent(Button);

export default class SimpleVideoEditor extends Component {

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
      <div>
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
        <AddVideoButton />
      </div>
    );
  }
}
