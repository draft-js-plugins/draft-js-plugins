import React from 'react';

import DefaultDivider from './components/DefaultDivider';
import DividerButton from './components/DividerButton';

import addDivider from './modifiers/addDivider';

const createDividerPlugin = ({
  blockType = 'divider',
  component = DefaultDivider
} = {}) => ({
  /* eslint-disable consistent-return */
  blockRendererFn: (block) => {
    if (block.getType() === blockType) {
      return {
        component,
        editable: false
      };
    }
  },
  DividerButton: (props) => (
    <DividerButton
      {...props}
      blockType={blockType}
      addDivider={addDivider(blockType)}
    />
  ),
  addDivider: addDivider(blockType)
});

export default createDividerPlugin;
