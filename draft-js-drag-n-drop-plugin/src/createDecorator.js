import React, { Component } from 'react';
import { DRAFTJS_BLOCK_KEY } from './constants';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ store }) => WrappedComponent =>
  class BlockDraggableDecorator extends Component {
    static displayName = `BlockDraggable(${getDisplayName(WrappedComponent)})`;
    // eslint-disable-next-line no-redeclare
    static WrappedComponent = WrappedComponent.WrappedComponent ||
      WrappedComponent;

    // Handle start-drag and set dataTransfer data with blockKey
    startDrag = event => {
      event.dataTransfer.dropEffect = 'move'; // eslint-disable-line no-param-reassign
      // declare data and give info that its an existing key and a block needs to be moved
      event.dataTransfer.setData(
        'text',
        `${DRAFTJS_BLOCK_KEY}:${this.props.block.key}`
      );
    };

    render() {
      // If this is rendered before the store is initialized default to read only
      // NOTE(@mxstbr): Reference issue: draft-js-plugins/draft-js-plugins#926
      const readOnly = store.getReadOnly ? store.getReadOnly() : true;
      return (
        <WrappedComponent
          {...this.props}
          onDragStart={!readOnly ? this.startDrag : undefined}
        />
      );
    }
  };
