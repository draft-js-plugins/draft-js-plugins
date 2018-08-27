import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createStickerPlugin from 'draft-js-sticker-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createUndoPlugin from 'draft-js-undo-plugin';
import {
  ContentState,
  EditorState,
} from 'draft-js';
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

export default class UnicornEditor extends Component {

  state = {
    editorState: EditorState.createWithContent(contentState),
    suggestions: mentions,
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onMentionSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            spellCheck
            ref={(element) => { this.editor = element; }}
          />
        </div>
        <div>
          <MentionSuggestions
            onSearchChange={this.onMentionSearchChange}
            suggestions={this.state.suggestions}
          />
          <EmojiSuggestions />
          <div className={styles.editorButton}>
            <StickerSelect editor={this} />
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
}
