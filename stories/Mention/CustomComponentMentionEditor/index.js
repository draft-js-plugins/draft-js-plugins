import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from 'draft-js-mention-plugin';
import editorStyles from './editorStyles.css';
import mentions from './mentions';

const mentionPlugin = createMentionPlugin({
  mentions,
  mentionComponent: props => (
    <span
      className={props.className}
      // eslint-disable-next-line no-alert
      onClick={() => alert('Clicked on the Mention!')}
    >
      {props.children}
    </span>
  ),
});
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

export default class CustomMentionEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    suggestions: mentions,
  };

  onChange = editorState => {
    this.setState({
      editorState,
    });
  };

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
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
          ref={element => {
            this.editor = element;
          }}
        />
        <MentionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
        />
      </div>
    );
  }
}
