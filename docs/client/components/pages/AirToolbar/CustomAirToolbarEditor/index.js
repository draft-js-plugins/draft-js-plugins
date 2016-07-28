import React, { Component } from 'react';
import { RichUtils } from 'draft-js';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createAirToolbarPlugin from 'draft-js-air-toolbar-plugin'; // eslint-disable-line import/no-unresolved
import editorStyles from './editorStyles.css';

const airToolbarPlugin = createAirToolbarPlugin({
  textActions: [
    {
      button: <span>H1</span>,
      key: 'H1',
      label: 'Header 1',
      active: (block) => block.get('type') === 'header-1',
      toggle: (block, action, editorState, setEditorState) => setEditorState(RichUtils.toggleBlockType(
        editorState,
        'header-1'
      )),
    }, {
      button: <span>H2</span>,
      key: 'H2',
      label: 'Header 2',
      active: (block) => block.get('type') === 'header-2',
      toggle: (block, action, editorState, setEditorState) => setEditorState(RichUtils.toggleBlockType(
        editorState,
        'header-2'
      )),
    },
  ],
});
const plugins = [airToolbarPlugin];
const text = 'This editor can have a toolbar …';

export default class CustomAirToolbarEditor extends Component {

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
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref="editor"
        />
      </div>
    );
  }
}
