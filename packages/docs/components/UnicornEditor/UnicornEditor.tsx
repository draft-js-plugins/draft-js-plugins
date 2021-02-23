import React, {
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import createStickerPlugin from '@draft-js-plugins/sticker';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import createEmojiPlugin from '@draft-js-plugins/emoji';
import createUndoPlugin from '@draft-js-plugins/undo';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
import createImagePlugin from '@draft-js-plugins/image';
import createFocusPlugin from '@draft-js-plugins/focus';
import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import { convertFromRaw, EditorState } from 'draft-js';
import styles from './UnicornEditor.module.css';
import stickers from './Stickers';
import mentions from './Mentions';
import initialState from './InitialState';

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

  const onMentionSearchChange = useCallback(({ value }) => {
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
