import React, { ReactElement, useRef, useState, useCallback } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import editorStyles from './MultiMentionTriggers.module.css';
import mentions from './Mentions';

const mentionPlugin = createMentionPlugin({ mentionTriggers: ['@', '('] });
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

const SimpleMentionEditor = (): ReactElement => {
  const ref = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions['@']);

  const onChange = useCallback((_editorState: EditorState) => {
    setEditorState(_editorState);
  }, []);
  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(
    ({ trigger, value }: { trigger: string; value: string }) => {
      setSuggestions(defaultSuggestionsFilter(value, mentions, trigger));
    },
    []
  );

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
        onAddMention={() => {
          // get the mention object selected
        }}
      />
    </div>
  );
};

export default SimpleMentionEditor;
