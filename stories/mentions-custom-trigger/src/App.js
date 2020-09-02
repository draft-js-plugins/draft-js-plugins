import React, { useRef, useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from 'draft-js-mention-plugin';
import editorStyles from './editorStyles.css';
import mentions from './mentions';

const mentionPlugin = createMentionPlugin({ mentionTrigger: '(' });
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const SimpleMentionEditor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText('Type ( to make the mention dropdown appear')
    )
  );
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

  const onAddMention = () => {
    // get the mention object selected
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
        onAddMention={onAddMention}
      />
    </div>
  );
};

export default SimpleMentionEditor;
