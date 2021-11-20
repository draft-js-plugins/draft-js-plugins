import React, { ReactElement, useRef, useState } from 'react';
import { EditorState } from 'draft-js';

import Editor from '@draft-js-plugins/editor';

import createMentionPlugin from '@draft-js-plugins/mention';
import editorStyles from './editorStyles.css';

const mentionPlugin = createMentionPlugin();
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const SimpleMentionEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef<Editor>();

  const onChange = (value): void => {
    setEditorState(value);
  };

  const focus = (): void => {
    editor.current.focus();
  };

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const onOpenChange = (newOpen): void => {
    setOpen(newOpen);
  };

  const onSearchChange = ({ value }): void => {
    // An import statment would break server-side rendering.
    require('whatwg-fetch'); // eslint-disable-line global-require

    // while you normally would have a dynamic server that takes the value as
    // a workaround we use this workaround to show different results
    let url = '/data/mentionsA.json';
    if (value.length === 1) {
      url = '/data/mentionsB.json';
    } else if (value.length > 1) {
      url = '/data/mentionsC.json';
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSuggestions(data);
      });
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
      />
    </div>
  );
};

export default SimpleMentionEditor;
