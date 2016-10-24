import React, { Component } from 'react';
import {
  Entity,
} from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createSidebarPlugin, { BasicAction, Sidebar } from 'draft-js-sidebar-plugin';
import editorStyles from './editorStyles.css';
import addPhotoImg from './addPhotoMD.svg';

const Image = ({ block }) => {
  const data = Entity.get(block.getEntityAt(0)).getData();
  return (
    <img src={data.src} alt="img" />
  );
};


class AddImageButton extends React.Component {
  getEntity = () => Entity.create('IMAGE', 'IMMUTABLE', { src: '/images/unicorn-1.png' });

  render = () => (
    <BasicAction icon={addPhotoImg} getEntity={this.getEntity} {...this.props} />
  );
}

const actions = [AddImageButton];

const sidebarPlugin = createSidebarPlugin({ actions, emptyLineOnly: true });
const plugins = [sidebarPlugin];
const text = ` When you click somewhere on an empty line of the editor,
a button will appear on the left.
When you click on the button you will have access to the actions.
`;

export default class BasicActionEditor extends Component {

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
        <Sidebar
          editorState={this.state.editorState}
          editor={this.editor}
          emptyLineOnly={true}
          actions={actions}
        >
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
            blockRendererFn={this.myBlockRenderer}
          />
        </div>
      </Sidebar>
    );
  }
}
