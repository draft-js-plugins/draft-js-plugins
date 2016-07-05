import React from 'react';
import ReactDOM from 'react-dom';
import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin from '../lib/index.js';

import createInlinePlugin from '../../draft-js-inline-plugin/lib/index.js';
import createBlockPlugin from '../../draft-js-block-plugin/lib/index.js';
import createLinkPlugin from '../../draft-js-link-plugin/lib/index.js';

import { EditorState } from 'draft-js';

import './styles.css';

const inlinePlugin = createInlinePlugin();
const blockPlugin = createBlockPlugin();
const linkPlugin = createLinkPlugin();

const { BoldButton, ItalicButton, UnderlineButton, MonospaceButton } = inlinePlugin;
const { H1Button, H2Button, H3Button, H4Button, H5Button, H6Button, BlockquoteButton, UlButton, OlButton, CodeblockButton } = blockPlugin;
const { LinkButton } = linkPlugin;

const toolbarPlugin = createToolbarPlugin({
  actions: [BoldButton, ItalicButton, UnderlineButton, MonospaceButton, H1Button, H2Button, H3Button, H4Button, H5Button, H6Button, BlockquoteButton, UlButton, OlButton, CodeblockButton, LinkButton]
});

class ToolbarEditor extends React.Component {
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

  render() {
    return (
      <div>
        <div className="editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={[inlinePlugin, blockPlugin, linkPlugin, toolbarPlugin]}
            ref="editor"
          />
        </div>
      </div>

    );
  }
}

ReactDOM.render((
  <ToolbarEditor />
), document.getElementById('target'));
