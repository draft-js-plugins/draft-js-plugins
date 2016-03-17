import React, { Component } from 'react';
import Editor, { createWithText } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import stickerPlugin from 'draft-js-sticker-plugin';
import linkifyPlugin from 'draft-js-linkify-plugin';
import mentionPlugin from 'draft-js-mention-plugin';
import historyPlugin from 'draft-js-history-plugin';
import styles from './styles.css';
import Immutable from 'immutable';
import stickers from './stickers';
import mentions from './mentions';
import StatePreview from '../../../shared/StatePreview';

// import { EditorState } from 'draft-js';

const hashtagPluginInstance = hashtagPlugin({
  theme: Immutable.Map({
    hashtag: {
      color: 'red',
      fontFamily: 'monospace',
    },
  }),
});

const linkifyPluginInstance = linkifyPlugin();
const mentionPluginInstance = mentionPlugin({
  mentions,
});
const historyPluginInstance = historyPlugin();
const stickerPluginInstance = stickerPlugin({
  stickers,
});
const { StickerSelect } = stickerPluginInstance;
const { UndoButton, RedoButton } = historyPluginInstance;

// const { UndoButton, RedoButton, History } = historyPluginInstance;

const plugins = [
  hashtagPluginInstance,
  stickerPluginInstance,
  linkifyPluginInstance,
  mentionPluginInstance,
];

export default class UnicornEditor extends Component {

  state = {
    // editorState: EditorState.createEmpty(), // alternative to create an empty state
    editorState: createWithText('Hello World!'),
    showState: false,
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  toggleShowState = () => {
    this.setState({
      showState: !this.state.showState,
    });
  };

  /* eslint-disable react/jsx-no-bind */
  render() {
    const stateButton = this.state.showState ? styles.pressedStateButton : styles.stateButton;

    return (
      <div className={ styles.root }>

        <div className={ styles.editor } onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            spellCheck
            ref="editor"
          />
        </div>
        <div>
          <div className={ styles.stickerSelect }>
            <StickerSelect editor={ this } />
          </div>
          <UndoButton
            editorState={ this.state.editorState }
            onChange={ this.onChange }
          />
          <RedoButton
            editorState={ this.state.editorState }
            onChange={ this.onChange }
          />
          <button
            className={ stateButton }
            onClick={ this.toggleShowState }
          >
            Toggle State Preview
          </button>
        </div>
        <StatePreview
          editorState={ this.state.editorState }
          collapsed={ !this.state.showState }
        />
        {/* <History editorState={ this.state.editorState } /> */}

      </div>
    );
  }
}
