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

const parseUrl = (file, editorState, onChange) => {
  /* custom parsing function, might upload to S3, then retrieve the url */
  if (file.type.indexOf('image/') === 0) {
    const url = URL.createObjectURL(file);
    onChange(imagePlugin.addImage(editorState, url));
  }
};

const addImageFile = () => {
  imageAddElement.addImageFile(parseUrl);
  /* imageAddElement.addImageFile(); // default parsing of the url */
};

const sideToolbarPlugin = createSideToolbarPlugin({
  theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles },
  addImageFile,
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
