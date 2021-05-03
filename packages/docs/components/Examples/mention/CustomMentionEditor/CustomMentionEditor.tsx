import React, {
  MouseEvent,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
  defaultSuggestionsFilter,
  MentionData,
  MentionPluginTheme,
} from '@draft-js-plugins/mention';
import editorStyles from './CustomMentionEditor.module.css';
import mentionsStyles from './MentionsStyles.module.css';
import mentions from './Mentions';

export interface EntryComponentProps {
  className?: string;
  onMouseDown(event: MouseEvent): void;
  onMouseUp(event: MouseEvent): void;
  onMouseEnter(event: MouseEvent): void;
  role: string;
  id: string;
  'aria-selected'?: boolean | 'false' | 'true';
  theme?: MentionPluginTheme;
  mention: MentionData;
  isFocused: boolean;
  searchValue?: string;
}

function Entry(props: EntryComponentProps): ReactElement {
  const {
    mention,
    theme,
    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <div className={theme?.mentionSuggestionsEntryContainer}>
        <div className={theme?.mentionSuggestionsEntryContainerLeft}>
          <img
            src={mention.avatar}
            className={theme?.mentionSuggestionsEntryAvatar}
            role="presentation"
          />
        </div>

        <div className={theme?.mentionSuggestionsEntryContainerRight}>
          <div className={theme?.mentionSuggestionsEntryText}>
            {mention.name}
          </div>

          <div className={theme?.mentionSuggestionsEntryTitle}>
            {mention.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CustomMentionEditor(): ReactElement {
  const ref = useRef<Editor>(null);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(mentions);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      theme: mentionsStyles,
      mentionPrefix: '@',
      supportWhitespace: true,
    });
    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin];
    return { plugins, MentionSuggestions };
  }, []);

  const onChange = useCallback((_editorState: EditorState) => {
    setEditorState(_editorState);
  }, []);
  const onOpenChange = useCallback((_open: boolean) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }: { value: string }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
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
        onChange={onChange}
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
        entryComponent={Entry}
        popoverContainer={({ children }) => <div>{children}</div>}
      />
    </div>
  );
}
