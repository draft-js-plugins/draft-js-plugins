import React, { Component } from 'react';
import { EditorState } from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createImagePlugin from 'draft-js-image-plugin';
import editorStyles from './editorStyles.css';

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];
const { ImageAdd } = imagePlugin;

export default class SimpleImageEditor extends Component {

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
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
        </div>
        <ImageAdd
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
