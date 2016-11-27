import React from 'react';
import { Entity } from 'draft-js';

const ColorBlock = ({
  block, // eslint-disable-line no-unused-vars
  blockProps, // eslint-disable-line no-unused-vars
  customStyleMap, // eslint-disable-line no-unused-vars
  customStyleFn, // eslint-disable-line no-unused-vars
  decorator, // eslint-disable-line no-unused-vars
  forceSelection, // eslint-disable-line no-unused-vars
  offsetKey, // eslint-disable-line no-unused-vars
  selection, // eslint-disable-line no-unused-vars
  tree, // eslint-disable-line no-unused-vars
  style,
  ...elementProps
}) => (
  <div
    {...elementProps}
    style={{ width: 200, height: 80, backgroundColor: '#9bc0c7', ...style }}
  />
);

const createColorBlockPlugin = (config = {}) => {
  const component = config.decorator ? config.decorator(ColorBlock) : ColorBlock;
  return {
    blockRendererFn: (block) => {
      if (block.getType() === 'atomic') {
        const entity = Entity.get(block.getEntityAt(0));
        const type = entity.getType();
        if (type === 'colorBlock') {
          return {
            component,
            editable: false,
          };
        }
      }
      return null;
    },
  };
};

export default createColorBlockPlugin;
