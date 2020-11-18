import React, { Component } from 'react';
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
import styles from './styles.css';
import stickers from './stickers';
import mentions from './mentions';
import initialState from './initialState';

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

// const contentState = ContentState.createFromText(
//   'You can add Emojis by typing colon : or mentions with an @. Add Stickers and undo your actions with the undo button below …',
// );

export default class UnicornEditor extends Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
    suggestions: mentions,
  };

  onChange = editorState => {
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
            ref={element => {
              this.editor = element;
            }}
          />
          <SideToolbar />
          <InlineToolbar />
          <AlignmentTool />
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
