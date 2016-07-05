import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'draft-js-plugins-editor';
import createBlockPlugin from '../lib/index.js';
import { EditorState } from 'draft-js';

import './styles.css';

const blockPlugin = createBlockPlugin();
const { H1Button, H2Button, H3Button, H4Button, H5Button, H6Button, BlockquoteButton, UlButton, OlButton, CodeblockButton } = blockPlugin;

class BlockEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onChange = this.onChange.bind(this);
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
        <H1Button getEditorState={this.getEditorState} />
        <H2Button getEditorState={this.getEditorState} />
        <H3Button getEditorState={this.getEditorState} />
        <H4Button getEditorState={this.getEditorState} />
        <H5Button getEditorState={this.getEditorState} />
        <H6Button getEditorState={this.getEditorState} />
        <BlockquoteButton getEditorState={this.getEditorState} />
        <UlButton getEditorState={this.getEditorState} />
        <OlButton getEditorState={this.getEditorState} />
        <CodeblockButton getEditorState={this.getEditorState} />
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={[blockPlugin]}
            ref="editor"
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render((
  <BlockEditor />
), document.getElementById('target'));
