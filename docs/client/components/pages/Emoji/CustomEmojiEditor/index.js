import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createEmojiPlugin from 'draft-js-emoji-plugin'; // eslint-disable-line import/no-unresolved
import editorStyles from './editorStyles.css';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;
const plugins = [emojiPlugin];
const text = `Cool, we can have all sorts of Emojis here. 🙌
🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!`;

export default class CustomEmojiEditor extends Component {

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
        <EmojiSuggestions />
      </div>
    );
  }
}
