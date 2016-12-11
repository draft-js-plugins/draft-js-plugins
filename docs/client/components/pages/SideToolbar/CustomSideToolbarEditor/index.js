import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
// eslint-disable-next-line import/no-unresolved
import createImagePlugin from 'draft-js-image-plugin';
import editorStyles from './editorStyles.css';
import buttonStyles from './buttonStyles.css';
import toolbarStyles from './toolbarStyles.css';
import blockTypeSelectStyles from './blockTypeSelectStyles.css';

const imagePlugin = createImagePlugin();
const { ImageAdd } = imagePlugin;
let imageAddElement = null;

const toggleInput = () => {
  imageAddElement.openPopover();
};

const sideToolbarPlugin = createSideToolbarPlugin({
  theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles },
  toggleInput,
});
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin, imagePlugin];
const text = 'Once you click into the text field the sidebar plugin will show up …';

export default class CustomSideToolbarEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
          <SideToolbar />
        </div>
        <ImageAdd
          ref={(element) => { imageAddElement = element; }}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
