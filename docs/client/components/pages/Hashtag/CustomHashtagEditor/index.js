import React, { Component } from 'react';
import { Map } from 'immutable';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createHashtagPlugin from 'draft-js-hashtag-plugin'; // eslint-disable-line import/no-unresolved
import editorStyles from './editorStyles.css';
import hashtagStyles from './hashtagStyles.css';

const theme = Map({
  hashtag: hashtagStyles.hashtag,
});
const hashtagPlugin = createHashtagPlugin({ theme });
const plugins = [hashtagPlugin];
const text = 'In this editor, we can even apply our own styles … #design #theme';

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
    this.refs.editor.focus();
  };

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref="editor"
        />
      </div>
    );
  }
}
