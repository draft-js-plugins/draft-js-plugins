import React, { Component } from 'react';
import Editor, { createEmptyEditorState } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import stickerPlugin from 'draft-js-sticker-plugin';
import {
  EditorState, // eslint-disable-line
  compositeDecorator, // eslint-disable-line
} from 'draft-js';
import styles from './styles';
import stickers from './stickers';
import { List } from 'immutable';

const hashtagPluginInstance = hashtagPlugin();
const stickerPluginInstance = stickerPlugin({ stickers });

const plugins = List([
  hashtagPluginInstance,
  stickerPluginInstance,
]);

export default class UnicornEditor extends Component {

  state = {
    editorState: createEmptyEditorState(plugins),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  addSticker = (stickerId) => {
    this.setState({
      editorState: stickerPluginInstance.add(this.state.editorState, stickerId),
    });
  };

  /* eslint-disable react/jsx-no-bind */
  render() {
    const stickerElements = stickers.map((sticker) => (
      <button
        onClick={ () => this.addSticker(sticker.get('id')) }
        key={sticker.get('id')}
        type="button"
      >
        <img height="100" src={ sticker.get('url') } />
      </button>
    ));

    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="I'm a Unicorn Input!"
            plugins={plugins}
            spellCheck
          />
        </div>
        { stickerElements.toArray() }
        <pre style={{ whiteSpace: 'pre-wrap' }}>
          { JSON.stringify(this.state.editorState.getCurrentContent().toJS(), null, 2) }
        </pre>
      </div>
    );
  }
}
