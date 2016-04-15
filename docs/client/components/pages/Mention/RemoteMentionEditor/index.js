import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin from 'draft-js-mention-plugin';
import editorStyles from './editorStyles.css';

const mentionPlugin = createMentionPlugin();

// the MentionSearch becomes a component that lies outside of the Editor,
// but will be positioned correctly by using a portal approach.
// filterMentions is just a utility function and not needed depending on how
// the developers want to update the suggestions
const { MentionSearch, filterMentions } = mentionPlugin;
const plugins = [mentionPlugin];

export default class RemoteMentionEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
    mentionSuggestions: [],
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onSearchChange = (event) => {
    this.setState({
      mentionSuggestions: filterMentions([], event.value),
    });

    // Note: instead using the provided filterMentions utility someone could
    // use their own logic to retrieve & update the mentions here e.g.
    // myAsyncLib.fetch(`/search?q=${event.value}`)
    //   .then((result) => {
    //     this.setState({
    //       mentionSuggestions: filterMentions(mentions, event.value),
    //     });
    //   });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    return (
      <div className={ editorStyles.editor } onClick={ this.focus }>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref="editor"
        />
        <MentionSearch
          mentionSuggestions={ this.state.mentionSuggestions }
          onSearchChange={ this.onSearchChange }
        />
      </div>
    );
  }
}
