import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import mentions from '../Mention/SimpleMentionEditor/mentions';
import editorStyles from './editorStyles.css';
import hashtagStyles from './hashtagStyles.css';

const text = 'In this editor, we can even apply our own styles … #design #theme';

export default class CustomHashtagEditor extends Component {
  state = {
    plugins: [],
    suggestions: mentions,
    isToggled: false,
    editorState: createEditorStateWithText(text),
  };

  componentDidMount() {
    this.setPlugins();
  }

  onChange = (editorState) => this.setState({ editorState });

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    });
  };

  setPlugins = () => {
    if (this.state.isToggled) {
      const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });
      const mentionPlugin = createMentionPlugin();
      this.MentionSuggestions = mentionPlugin.MentionSuggestions;

      this.setState({ plugins: [hashtagPlugin, mentionPlugin] });
    } else {
      const linkifyPlugin = createLinkifyPlugin();
      const hashtagPlugin = createHashtagPlugin();

      this.setState({ plugins: [hashtagPlugin, linkifyPlugin] });
    }
  }

  togglePlugins = () => {
    this.setState(
      { isToggled: !this.state.isToggled },
      this.setPlugins
    );
  }

  focus = () => {
    this.editor.focus();
  };

  render() {
    const MentionSuggestions = this.MentionSuggestions;
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <button onClick={this.togglePlugins}>Toggle Plugins</button>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={this.state.plugins}
          ref={(element) => { this.editor = element; }}
        />
        {MentionSuggestions && <MentionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
          onAddMention={this.onAddMention}
        /> }
      </div>
    );
  }
}
