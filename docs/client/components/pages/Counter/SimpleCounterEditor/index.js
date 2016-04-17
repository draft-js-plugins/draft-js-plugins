import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createCounterPlugin from 'draft-js-counter-plugin';
import editorStyles from './editorStyles.css';

const counterPlugin = createCounterPlugin();
const { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;
const plugins = [counterPlugin];
const text = `This editor has counters below!
Try typing here and watch the numbers go up.

Note that the color changes when you pass one of the following limits:
- 200 characters
- 30 words
- 10 lines
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

  customCountFunction(str) {
    const wordArray = str.match(/\S+/g);  // matches words according to whitespace
    return wordArray ? wordArray.length : 0;
  }

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
        <div>Characters: <CharCounter editorState={ this.state.editorState } limit={200} /></div>
        <div>Words: <WordCounter editorState={ this.state.editorState } limit={30} /></div>
        <div>Lines: <LineCounter editorState={ this.state.editorState } limit={10} /></div>
        <div><span>Custom (words): </span>
          <CustomCounter
            editorState={ this.state.editorState }
            limit={40}
            countFunction={ this.customCountFunction }
          />
        </div>
      </div>
    );
  }
}
