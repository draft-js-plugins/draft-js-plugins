import React, { ReactElement, useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import editorStyles from './editorStyles.css';
import mentions from './mentions';

const mentionPlugin = createMentionPlugin();
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const SimpleMentionEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef<Editor>();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const onChange = (value): void => {
    setEditorState(value);
  };

  const focus = (): void => {
    editor.current.focus();
  };

  const onOpenChange = (newOpen): void => {
    setOpen(newOpen);
  };

  const onSearchChange = ({ value }): void => {
    setSearch(value);
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
        suggestions={defaultSuggestionsFilter(search, mentions)}
        onOpenChange={onOpenChange}
        onSearchChange={onSearchChange}
        onAddMention={onAddMention}
      />
    </div>
  );
};

export default SimpleMentionEditor;
