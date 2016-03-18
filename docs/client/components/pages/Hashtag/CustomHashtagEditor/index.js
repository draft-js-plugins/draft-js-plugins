import React, { Component } from 'react';
import Editor from 'draft-js-plugin-editor';
import { EditorState } from 'draft-js';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import styles from './styles.css';
import StatePreview from '../../../shared/StatePreview';
import { Map } from 'immutable';

const theme = Map({
  hashtag: styles.hashtag,
});
const hashtagPluginInstance = hashtagPlugin({ theme });
const plugins = [hashtagPluginInstance];

export default class CustomHashtagEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
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
    const stateButton = this.state.showState ?
      styles.pressedStateButton :
      styles.stateButton;

    return (
      <div className={ styles.root }>
        <div className={ styles.editor } onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref="editor"
          />
        </div>
        <div>
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
      </div>
    );
  }
}
