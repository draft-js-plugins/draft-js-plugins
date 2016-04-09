import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createCounterPlugin from 'draft-js-counter-plugin';
import editorStyles from './editorStyles.css';

const counterPlugin = createCounterPlugin();
const { CharCounter, WordCounter, LineCounter } = counterPlugin;
const plugins = [counterPlugin];
const text = `#TIL: This editor has a counter!
Try typing here and watch the numbers go up below!

Note the 140 character limit.
`;

export default class SimpleCounterEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    return (
      <div>
        <div className={ editorStyles.editor } onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref="editor"
          />
        </div>
        <div>Characters: <CharCounter editorState={ this.state.editorState } /></div>
        <div>Words: <WordCounter editorState={ this.state.editorState } /></div>
        <div>Lines: <LineCounter editorState={ this.state.editorState } /></div>
      </div>
    );
  }
}
