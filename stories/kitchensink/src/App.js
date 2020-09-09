import React, { useRef, useState } from 'react';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createStickerPlugin from 'draft-js-sticker-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from 'draft-js-mention-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createUndoPlugin from 'draft-js-undo-plugin';
import { ContentState, EditorState } from 'draft-js';
import styles from './styles.css';
import stickers from './stickers';
import mentions from './mentions';

const emojiPlugin = createEmojiPlugin();
const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();
const mentionPlugin = createMentionPlugin();
const undoPlugin = createUndoPlugin();
const stickerPlugin = createStickerPlugin({
  stickers,
});
const { MentionSuggestions } = mentionPlugin;
const { EmojiSuggestions } = emojiPlugin;
const { StickerSelect } = stickerPlugin;
const { UndoButton, RedoButton } = undoPlugin;

const plugins = [
  emojiPlugin,
  hashtagPlugin,
  stickerPlugin,
  linkifyPlugin,
  mentionPlugin,
  undoPlugin,
];

const contentState = ContentState.createFromText(
  'You can add Emojis by typing colon : or mentions with an @. Add Stickers and undo your actions with the undo button below …'
);

const UnicornEditor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  );
  const editor = useRef();

  const [suggestions, setSuggestions] = useState(mentions);
  const [open, setOpen] = useState(false);

  const onChange = value => {
    setEditorState(value);
  };

  const onOpenChange = newOpen => {
    setOpen(newOpen);
  };

  const focus = () => {
    editor.current.focus();
  };

  const onMentionSearchChange = ({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, mentions));
  };

  // simulate `this`
  const self = {
    onChange,
    state: {
      editorState,
    },
  };

  return (
    <div className={styles.root}>
      <div className={styles.editor} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          spellCheck
          ref={element => {
            editor.current = element;
          }}
        />
      </div>
      <div>
        <MentionSuggestions
          onSearchChange={onMentionSearchChange}
          suggestions={suggestions}
          onOpenChange={onOpenChange}
          open={open}
        />
        <EmojiSuggestions />
        <div className={styles.editorButton}>
          <StickerSelect editor={self} />
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
};

export default UnicornEditor;
