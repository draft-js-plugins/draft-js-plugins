import React, { ReactElement, useRef, useState, useCallback } from 'react';
import { EditorState, ContentState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import editorStyles from './editorStyles.css';
import mentions from './mentions';

const mentionPlugin = createMentionPlugin({ mentionTrigger: ['@', '('] });
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const SimpleMentionEditor = (): ReactElement => {
  const ref = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText(
        'Type @ or ( to make the mention dropdown appear'
      )
    )
  );

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions['@']);

  const onChange = (value): void => {
    setEditorState(value);
  };

  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(
    ({ trigger, value }: { trigger: string; value: string }) => {
      setSuggestions(defaultSuggestionsFilter(value, mentions, trigger));
    },
    []
  );

  const onAddMention = (): void => {
    // get the mention object selected
  };

  return (
    <div
      className={editorStyles.editor}
      onClick={() => {
        ref.current!.focus();
      }}
    >
      <Editor
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={ref}
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
