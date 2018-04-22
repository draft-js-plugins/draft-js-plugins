import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
// eslint-disable-next-line
import createDividerPlugin from 'draft-js-divider-plugin';
// eslint-disable-next-line
import BlockTypeSelect from 'draft-js-side-toolbar-plugin/components/BlockTypeSelect';

import editorStyles from './editorStyles.css';

const dividerPlugin = createDividerPlugin();
const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, theme }) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
    theme={theme}
    structure={[dividerPlugin.DividerButton]}
  />
);
const sideToolbarPlugin = createSideToolbarPlugin({
  structure: [DefaultBlockTypeSelect],
});
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin, dividerPlugin];
const text = 'Once you click into the text field the sidebar plugin will show up …';

export default class SimpleSideToolbarEditor extends Component {

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
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
        <SideToolbar />
      </div>
    );
  }
}
