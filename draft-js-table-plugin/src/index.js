import React from 'react';
import Table from './components/table';
import { Entity, EditorState } from 'draft-js';
import styles from './style.css';
import decorateComponentWithProps from './utils/decorateWithProps';
import NestedEditor from './draft-nested-editor';

const defaultTheme = {
  ...styles,
};

const tablePlugin = config => {
  const theme = config.theme ? config.theme : defaultTheme;

  const renderNestedEditor = (block, editorState, onChange) => {
    const { pluginEditor } = block.props;
    return (
      <NestedEditor {...pluginEditor.props} setReadOnly={pluginEditor.setReadOnly} readOnly={false} editorState={editorState} onChange={onChange} />
    );
  };
  const component = decorateComponentWithProps(Table, { theme, renderNestedEditor });

  return {
    // Handle 'block-image' block-type with Image component
    blockRendererFn: (contentBlock, pluginEditor) => {
      const type = contentBlock.getType();
      if (type === 'table') {
        const entityKey = contentBlock.getEntityAt(0);
        const entityData = entityKey ? Entity.get(entityKey).data : {};
        const saveEntityData = data => {
          const editorState = pluginEditor.getEditorState();
          Entity.mergeData(entityKey, data);
          pluginEditor.setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()));
        };
        return {
          component,
          props: {
            pluginEditor,
            entityKey,
            saveEntityData,
            entityData
          }
        };
      } return undefined;
    }
  };
};

export default tablePlugin;
