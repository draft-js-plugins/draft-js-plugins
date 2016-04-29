import React from 'react';
import { Entity } from 'draft-js';
import Wrapper from './components/block-alignment-wrapper';

let types = [];
const alignmentPlugin = options => {
  types = options.types || [];
  return {
    blockRendererFn: (contentBlock, { setEditorState, getEditorState }) => {
      if (types.indexOf(contentBlock.get('type')) !== -1) {
        return {
          decorators: [Wrapper(setEditorState, getEditorState)],
        };
      } return undefined;
    },
  };
};

export default alignmentPlugin;
