import React from 'react';
import { Entity } from 'draft-js';
import Decorator from './decorators/block-alignment';
import styles from './style.css';

const defaultTheme = { ...styles };

// Block-Types to be handled will be stored here
let types = [];

const alignmentPlugin = config => {
  types = config.types || [];
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    blockRendererFn: (contentBlock, { setEditorState, getEditorState }) => {
      // Check if the contentBlock's block-type is registered to be handled
      if (types.indexOf(contentBlock.get('type')) !== -1) {
        return {
          // Wrap the contentBlock in the alignment decorator, that will either
          // handle the alignment with the above styles or let the wrapped
          // block handle itself if it defines
          decorators: [Decorator(setEditorState, getEditorState, theme)],
        };
      } return undefined;
    },
  };
};

export default alignmentPlugin;
