import React from 'react';
import { Entity } from 'draft-js';
import getSelectedBlockElement from './utils';
import Sidebar from './Components/Sidebar';
import InputBlock from './Components/InputBlock';
import EmbedIframe from './Components/EmbedIframe';
export { INPUT_TYPES } from './Actions';

const buttonBox = {
  height: 25,
  width: 25 + 20,
};

let sidebarDisplay = {
  top: 0,
  left: 0,
  display: 'none',
}

let selectedBlockElement = null;
let enterCount = -1;

const updateSidebarPosition = (editor) => {
  if (editor === undefined) {
    return;
  }

  const blockElt = getSelectedBlockElement();
  if (blockElt === null) {
    return;
  }

  const bodyBound = document.body.getBoundingClientRect();
  const blockBound = blockElt.getBoundingClientRect();
  const editorBound = editor.refs.editor.getBoundingClientRect();
  let initTop = blockBound.top;

  //On enter key pressed, draft-js does not create a new block right the way
  //it does it when you unfocus, change line etc
  //so we need to add the height of the block to take the return into account
  if (selectedBlockElement === blockElt) {
    initTop += blockBound.height + blockBound.height * enterCount;
  } else {
    enterCount = -1;
  }
  selectedBlockElement = blockElt;

  sidebarDisplay = {
    top: `${initTop - bodyBound.top + (buttonBox.height / 2)}px`,
    left: `${editorBound.left - buttonBox.width}px`,
    display: 'flex',
  }
}

const createSidebarPlugin = (config) => {

  let getEditorState = () => {};
  let setEditorState = () => {};
  let setReadOnly = () => {};

  const onChange = (editorState, pluginFunctions) => {
    updateSidebarPosition(pluginFunctions.getRef());

    return editorState;
  };

  const initialize = (pluginFunctions) => {
    getEditorState = pluginFunctions.getEditorState;
    setEditorState = pluginFunctions.setEditorState;
    setReadOnly= pluginFunctions.setReadOnly;
  };

  const renderSidebar = () => {
    return <Sidebar
      display={sidebarDisplay}
      getEditorState={getEditorState}
      setEditorState={setEditorState}
      setReadOnly={setReadOnly}
      actions={config.actions}
    />;
  };

  const handleReturn = (event) => {
    enterCount++;
    return 'not-handled';
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
    initialize,
    onChange,
    renderSidebar,
    handleReturn,
    blockRendererFn: myBlockRenderer
  };
}

export default createSidebarPlugin;