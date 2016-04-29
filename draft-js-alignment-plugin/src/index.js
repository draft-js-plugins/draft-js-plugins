import React from 'react';
import { Entity } from 'draft-js';
import Wrapper from './components/block-alignment-wrapper';
import styles from './style.css';

const defaultTheme = { ...styles };

let types = [];
const alignmentPlugin = config => {
  types = config.types || [];
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    blockRendererFn: (contentBlock, { setEditorState, getEditorState }) => {
      if (types.indexOf(contentBlock.get('type')) !== -1) {
        return {
          decorators: [Wrapper(setEditorState, getEditorState, theme)],
        };
      } return undefined;
    },
  };
};

export default alignmentPlugin;
