import React from 'react';
import Table from './components/table';
import styles from './style.css';
import NestedEditor from './draft-nested-editor';

const defaultTheme = {
  ...styles,
};

const renderNestedEditor = (block, editorState, onChange, setFocus, active) => {
  const { pluginEditor } = block.props.blockProps;
  return (
    <NestedEditor {...pluginEditor.props} setFocus={setFocus} setReadOnly={pluginEditor.setReadOnly} readOnly={!active} editorState={editorState} onChange={onChange} />
  );
};

const tablePlugin = config => {
  const type = config.type || 'block-table';
  const theme = config.theme ? config.theme : defaultTheme;

  const component = Table({ theme, renderNestedEditor });

  return {
    // Handle 'block-image' block-type with Image component
    blockRendererFn: (contentBlock) => {
      const blockType = contentBlock.getType();
      if (blockType === type) {
        return {
          component,
          props: {
            renderNestedEditor
          }
        };
      } return undefined;
    }
  };
};

export default tablePlugin;
export const TableBlock = Table({ theme: styles });
