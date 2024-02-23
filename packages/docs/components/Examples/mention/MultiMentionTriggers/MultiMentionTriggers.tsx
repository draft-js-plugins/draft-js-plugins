import React, { ReactElement, useRef, useState, useCallback } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import editorStyles from './MultiMentionTriggers.module.css';
import mentions from './Mentions';

const mentionPlugin = createMentionPlugin({
  mentionTrigger: ['@', '#'],
  mentionPrefix: (trigger) => trigger,
});
const { MentionSuggestions } = mentionPlugin;
const plugins = [mentionPlugin];

interface MentionData {
  link?: string;
  avatar?: string;
  name: string;
  id?: null | string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

const SimpleMentionEditor = (): ReactElement => {
  const ref = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<MentionData[]>(mentions['@']);

  const onChange = useCallback((_editorState: EditorState) => {
    setEditorState(_editorState);
  }, []);
  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(
    ({ trigger, value }: { trigger: string; value: string }) => {
      setSuggestions(
        defaultSuggestionsFilter(value, mentions, trigger) as MentionData[]
      );
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
