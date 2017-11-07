import React, { Component } from 'react';
import { EditorState, ContentState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import editorStyles from './editorStyles.css';

const linkifyPlugin = createLinkifyPlugin();
const plugins = [linkifyPlugin];

export default class SimpleMentionEditor extends Component {

  state = {
    editorState: EditorState.createWithContent(ContentState.createFromText('Hello there google.com')),
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
          ref={(element) => { this.editor = element; }}
        />
      </div>
    );
  }
}
