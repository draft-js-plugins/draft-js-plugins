/* @flow */

import React, { Component } from 'react';
import { Editor, EditorState, CompositeDecorator } from 'draft-js';
import hashtagStrategy from './hashtagStrategy';
import Hashtag from './Hashtag';
import styles from './styles';

const compositeDecorator = new CompositeDecorator([
  {
    strategy: hashtagStrategy,
    component: Hashtag,
  },
]);

type UnicornEditorState = {
  editorState: any,
}

export default class UnicornEditor extends Component {

  state: UnicornEditorState = {
    editorState: EditorState.createEmpty(compositeDecorator),
  };

  onChange: Function = (editorState: Object): void => {
    this.setState({
      editorState,
    });
  };

  focus: Function = (): void => {
    this.refs.editor.focus();
  };

  logState: Function = (): void => {
    console.log(this.state.editorState.toJS()); // eslint-disable-line no-console
  };

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="I'm a Unicorn!"
            ref="editor"
          />
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}
