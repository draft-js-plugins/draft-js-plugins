import React, { Component } from 'react';
import { ContentState, EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from 'draft-js-mention-plugin';
import editorStyles from './editorStyles.css';
import mentionsStyles from './mentionsStyles.css';
import mentions from './mentions';

const positionSuggestions = ({ props }) => {
  let transform;
  let transition;

  if (props.open) {
    if (props.suggestions.length > 0) {
      transform = 'scaleY(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scaleY(0)';
      transition = 'all 0.25s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    transform,
    transition,
  };
};

const mentionPlugin = createMentionPlugin({
  mentions,
  entityMutability: 'IMMUTABLE',
  theme: mentionsStyles,
  positionSuggestions,
  mentionPrefix: '@',
  supportWhitespace: true,
});
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const Entry = props => {
  const {
    mention,
    theme,
    isFocused,
    searchValue, // eslint-disable-line no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <div className={theme.mentionSuggestionsEntryContainer}>
        <div className={theme.mentionSuggestionsEntryContainerLeft}>
          <img
            src={mention.avatar}
            className={theme.mentionSuggestionsEntryAvatar}
            role="presentation"
          />
        </div>

        <div className={theme.mentionSuggestionsEntryContainerRight}>
          <div className={theme.mentionSuggestionsEntryText}>
            {mention.name}
          </div>

          <div className={theme.mentionSuggestionsEntryTitle}>
            {mention.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default class CustomMentionEditor extends Component {
  state = {
    open: false,
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        'Type a "@first last" name, mispelling the last name will drop the match'
      )
    ),
    suggestions: mentions,
  };

  onChange = editorState => {
    this.setState({
      editorState,
    });
  };

  onOpenChange = newOpen => {
    this.setState({
      open: newOpen,
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
          open={this.state.open}
          onOpenChange={this.onOpenChange}
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
          entryComponent={Entry}
        />
      </div>
    );
  }
}
