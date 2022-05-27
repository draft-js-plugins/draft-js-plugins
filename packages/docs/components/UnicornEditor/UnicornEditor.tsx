import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createEmojiPlugin from '@draft-js-plugins/emoji';
import createFocusPlugin from '@draft-js-plugins/focus';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import createImagePlugin from '@draft-js-plugins/image';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
import createStickerPlugin from '@draft-js-plugins/sticker';
import createUndoPlugin from '@draft-js-plugins/undo';
import { convertFromRaw, EditorState } from 'draft-js';
import React, {
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import initialState from './InitialState';
import mentions from './Mentions';
import stickers from './Stickers';
import styles from './UnicornEditor.module.css';

const emojiPlugin = createEmojiPlugin();
const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();
const mentionPlugin = createMentionPlugin();
const undoPlugin = createUndoPlugin();
const stickerPlugin = createStickerPlugin({ stickers });
const inlineToolbarPlugin = createInlineToolbarPlugin();
const sideToolbarPlugin = createSideToolbarPlugin();
const focusPlugin = createFocusPlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const decorator = composeDecorators(
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const { MentionSuggestions } = mentionPlugin;
const { EmojiSuggestions } = emojiPlugin;
const { StickerSelect } = stickerPlugin;
const { UndoButton, RedoButton } = undoPlugin;
const { InlineToolbar } = inlineToolbarPlugin;
const { SideToolbar } = sideToolbarPlugin;
const { AlignmentTool } = alignmentPlugin;

const plugins = [
  emojiPlugin,
  hashtagPlugin,
  stickerPlugin,
  linkifyPlugin,
  mentionPlugin,
  undoPlugin,
  inlineToolbarPlugin,
  sideToolbarPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  imagePlugin,
];

export default function UnicornEditor(): ReactElement {
  const ref = useRef<Editor>(null);
  const [mentionOpen, setMentionOpen] = useState(false);
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(convertFromRaw(initialState))
  );
  const [suggestions, setSuggestions] = useState(mentions);

  const onChange = useCallback((_editorState: EditorState): void => {
    setEditorState(_editorState);
  }, []);

  const onMentionSearchChange = useCallback(({ value }: { value: string }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  }, []);

  const stickerEditor = useMemo(
    () => ({
      onChange,
      state: {
        editorState,
      },
    }),
    [onChange, editorState]
  );

  return (
    <div className={styles.root}>
      <div
        className={styles.editor}
        onClick={() => {
          ref.current!.focus();
        }}
      >
        <Editor
          editorKey={'editor'}
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          spellCheck
          ref={ref}
        />
        <SideToolbar />
        <InlineToolbar />
        <AlignmentTool />
      </div>
      <div>
        <MentionSuggestions
          onSearchChange={onMentionSearchChange}
          suggestions={suggestions}
          onOpenChange={(val) => {
            setMentionOpen(val);
          }}
          open={mentionOpen}
        />
        <EmojiSuggestions />
        <div className={styles.editorButton}>
          <StickerSelect editor={stickerEditor} />
        </div>
        <div className={styles.editorButton}>
          <UndoButton />
        </div>
        <div className={styles.editorButton}>
          <RedoButton />
        </div>
      </div>
    </div>
  );
}
