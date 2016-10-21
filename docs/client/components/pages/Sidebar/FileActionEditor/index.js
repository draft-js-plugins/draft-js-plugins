import React, { Component } from 'react';
import {
  Entity,
} from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createSidebarPlugin, { INPUT_TYPES } from 'draft-js-sidebar-plugin';
import editorStyles from './editorStyles.css';

const Image = ({ block }) => {
  const data = Entity.get(block.getEntityAt(0)).getData();
  return (
    <img src={data.src} alt="img" />
  );
};

const actions = [{
  name: 'insert-unicorne',
  inputType: INPUT_TYPES.FILE,
  icon: 'insert-image',
  add: (data) => Entity.create('IMAGE', 'IMMUTABLE', { src: data.fileReader.result }),
}];

const sidebarPlugin = createSidebarPlugin({ actions });
const { Sidebar } = sidebarPlugin;
const plugins = [sidebarPlugin];
const text = ` When you click somewhere on an empty line of the editor,
a button will appear on the left.
When you click on the button you will have access to the actions.
`;

export default class FileActionEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  getPluginMethods = () => {
    if (!this.editor) {
      return {};
    }
    return this.editor.getPluginMethods();
  };

  focus = () => {
    this.editor.focus();
  };

  myBlockRenderer = (contentBlock) => {
    const type = contentBlock.getType();

    if (type !== 'atomic') {
      return;
    }

    const entityKey = contentBlock.getEntityAt(0);
    if (!entityKey) {
      return;
    }

    const entity = Entity.get(entityKey);

    switch (entity.getType()) {
      case 'IMAGE': {
        // eslint-disable-next-line consistent-return
        return {
          component: Image,
          editable: false,
        };
      }

      default:
        return;
    }
  }

  render() {
    return (
      <div style={{ position: 'relative' }} ref={(container) => { this.container = container; }}>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
            blockRendererFn={this.myBlockRenderer}
          />
        </div>
        <Sidebar
          editorState={this.state.editorState}
          getPluginMethods={this.getPluginMethods}
          container={this.container}
        />
      </div>
    );
  }
}
