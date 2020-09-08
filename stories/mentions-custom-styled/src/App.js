import React, { useRef, useState } from 'react';
import { EditorState } from 'draft-js';
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

const CustomMentionEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef();

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);

  const onChange = value => {
    setEditorState(value);
  };

  const focus = () => {
    editor.current.focus();
  };

  const onOpenChange = newOpen => {
    setOpen(newOpen);
  };

  const onSearchChange = ({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  };

  return (
    <div className={editorStyles.editor} onClick={focus}>
      <Editor
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={element => {
          editor.current = element;
        }}
      />
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        onSearchChange={onSearchChange}
        suggestions={suggestions}
        entryComponent={Entry}
      />
    </div>
  );
};

export default CustomMentionEditor;
