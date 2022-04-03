import React, { ReactElement, useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  Popover,
  defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import editorStyles from './editorStyles.css';
import mentions from './mentions';

const mentionPlugin = createMentionPlugin({
  mentions,
});
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const CustomMentionEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef<Editor>();

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);

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
    setSuggestions(defaultSuggestionsFilter(value, mentions));
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
        popoverContainer={({children, ...props}) => (
          <Popover {...props}>
            <div style={{ background: '#000', color: '#fff' }}>
              {children}
            </div>
          </Popover>
        )}
      />
    </div>
  );
};

export default CustomMentionEditor;
