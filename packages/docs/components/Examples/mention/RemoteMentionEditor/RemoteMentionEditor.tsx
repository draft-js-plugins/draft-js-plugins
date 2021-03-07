import React, {
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { EditorState } from 'draft-js';

import Editor from '@draft-js-plugins/editor';

import createMentionPlugin from '@draft-js-plugins/mention';
import editorStyles from './RemoteMentionEditor.module.css';

export default function RemoteMentionEditor(): ReactElement {
  const ref = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin();
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }: { value: string }) => {
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
  }, []);

  return (
    <div
      className={editorStyles.editor}
      onClick={() => {
        ref.current!.focus();
      }}
    >
      <Editor
        editorKey={'editor'}
        editorState={editorState}
        onChange={setEditorState}
        plugins={plugins}
        ref={ref}
      />
      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        suggestions={suggestions}
        onSearchChange={onSearchChange}
        onAddMention={() => {
          // get the mention object selected
        }}
      />
    </div>
  );
}
