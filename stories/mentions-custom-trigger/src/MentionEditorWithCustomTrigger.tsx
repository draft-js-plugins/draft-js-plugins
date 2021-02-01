import React, { ReactElement, useRef, useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import editorStyles from './editorStyles.css';
import mentions from './mentions';

const mentionPlugin = createMentionPlugin({ mentionTriggers: ['@', '#'] });
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const SimpleMentionEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText(
        'Type @ or # to make the mention dropdown appear'
      )
    )
  );
  const editor = useRef();

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions['@']);

  const onChange = (value): void => {
    setEditorState(value);
  };

  const focus = (): void => {
    editor.current.focus();
  };

  const onOpenChange = (newOpen): void => {
    setOpen(newOpen);
  };

  const onSearchChange = ({ trigger, value }): void => {
    setSuggestions(defaultSuggestionsFilter(value, trigger, mentions));
  };

  const onAddMention = (): void => {
    // get the mention object selected
  };

  return (
    <div className={editorStyles.editor} onClick={focus}>
      <Editor
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={(element) => {
          editor.current = element;
        }}
      />
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        onSearchChange={onSearchChange}
        suggestions={suggestions}
        onAddMention={onAddMention}
      />
    </div>
  );
};

export default SimpleMentionEditor;
