import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'draft-js-plugins-editor';
import createInlinePlugin from '../lib/index.js';
import { EditorState } from 'draft-js';

import './styles.css';

const inlinePlugin = createInlinePlugin();
const { BoldButton, ItalicButton, UnderlineButton, MonospaceButton } = inlinePlugin;

class InlineEditor extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.focus = () => this.refs.editor.focus();
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  getEditorState = () => this.state.editorState

  render() {
    return (
      <div>
        <BoldButton getEditorState={this.getEditorState} />
        <ItalicButton getEditorState={this.getEditorState} />
        <UnderlineButton getEditorState={this.getEditorState} />
        <MonospaceButton getEditorState={this.getEditorState} />
        <div className={'editor'} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={[inlinePlugin]}
            ref="editor"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <InlineEditor />
), document.getElementById('target'));
