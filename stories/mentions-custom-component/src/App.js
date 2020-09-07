import React, { useRef, useState } from 'react';
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
      />
    </div>
  );
};

export default CustomMentionEditor;
