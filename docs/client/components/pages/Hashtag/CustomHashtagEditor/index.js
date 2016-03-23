import React, { Component } from 'react';
import { Map } from 'immutable';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import styles from './styles.css';

const theme = Map({
  hashtag: styles.hashtag,
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
      <div className={ styles.editor } onClick={ this.focus }>
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
