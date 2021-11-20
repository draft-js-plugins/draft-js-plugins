import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import editorStyles from './editorStyles.module.css';
import hashtagStyles from './hashtagStyles.module.css';

const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });
const plugins = [hashtagPlugin];
const text =
  'In this editor, we can even apply our own styles … #design #theme';

export default class CustomHashtagEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
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
      <div className={editorStyles.editor} onClick={this.focus}>
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
