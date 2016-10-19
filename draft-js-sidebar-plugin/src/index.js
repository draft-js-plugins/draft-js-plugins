import React from 'react';
import { Entity, EditorState } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import Sidebar from './Components/Sidebar';
import InputBlock from './Components/InputBlock';
import EmbedIframe from './Components/EmbedIframe';
export { INPUT_TYPES } from './Actions';

const createSidebarPlugin = (config) => {

  const onChange = (editorState, pluginFunctions) => {
    return editorState;
  };

  const myBlockRenderer = (contentBlock) => {
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
      case 'EMBED': {
        return {
          component: EmbedIframe,
          editable: false,
          props: {
            html: entity.getData()['html'],
          }
        };
      }

      case 'TEXT-INPUT': {
        return {
          component: InputBlock,
          editable: false,
        };
      }
    }
  }


  return {
    onChange: onChange,
    Sidebar: decorateComponentWithProps(Sidebar, {
      actions: config.actions,
      emptyLineOnly: config.emptyLineOnly || false,
    }),
    blockRendererFn: myBlockRenderer
  };
}

export default createSidebarPlugin;