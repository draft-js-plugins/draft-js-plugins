import React, { Component } from 'react';
import {
  EditorState,
  Modifier,
  RichUtils,
  Entity,
} from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import editorStyles from './editorStyles.css';

import createSidebarPlugin, { INPUT_TYPES } from 'draft-js-sidebar-plugin';

const Image = ({ block }) => {
  const data = Entity.get(block.getEntityAt(0)).getData();
  return (
      <img src={data.src} />
  );
}

const actions = [{
  name: 'insert-unicorne',
  inputType: INPUT_TYPES.BASIC,
  icon: 'insert-unicorne',
  add: () =>  Entity.create('IMAGE', 'IMMUTABLE', { src: '/images/unicorn-1.png' }),
}];

const sidebarPlugin = createSidebarPlugin({ actions });
const { renderSidebar } = sidebarPlugin;
const plugins = [sidebarPlugin];
const text = ` When you click somewhere on the editor,
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

    switch(entity.getType()) {
      case 'IMAGE': {
        return {
          component: Image,
          editable: false,
        };
      }
    }
  }

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
            blockRendererFn={this.myBlockRenderer}
          />
        </div>
        {renderSidebar()}
      </div>
    );
  }
}
