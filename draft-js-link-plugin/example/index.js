import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'draft-js-plugins-editor';
import createLinkPlugin from '../lib/index.js';
import { EditorState } from 'draft-js';

import './styles.css';

const linkPlugin = createLinkPlugin();
const { LinkButton } = linkPlugin;

class LinkEditor extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  getEditorState = () => this.state.editorState

  focus = () => {
    this.refs.editor.focus();
  }

  render() {
    return (
      <div className={'editor'}>
        <LinkButton getEditorState={this.getEditorState} />
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={[linkPlugin]}
          ref="editor"
        />
      </div>

    );
  }
}

ReactDOM.render((
  <LinkEditor />
), document.getElementById('target'));
