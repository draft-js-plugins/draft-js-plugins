import React, { Component } from 'react';
import { DRAFTJS_BLOCK_KEY } from './constants';

// Get a component's display name
const getDisplayName = (WrappedComponent) => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

// Export
export default ({ store }) => (WrappedComponent) => (
  class BlockDraggableDecorator extends Component {
    // Statics
    static displayName = `BlockDraggable(${getDisplayName(WrappedComponent)})`;
    // eslint-disable-next-line no-redeclare
    static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

    // Default props
    static defaultProps = {
      draggable: true,
      readOnly: false,
    };

    // Handle start-drag and set dataTransfer data with blockKey
    startDrag = (event) => {
      const allow = this.props.draggable && !this.props.readOnly;
      if (!allow) return;
      event.dataTransfer.dropEffect = 'move'; // eslint-disable-line no-param-reassign
      // Declare data and give info that its an existing key and a block needs to be moved
      event.dataTransfer.setData('text', `${DRAFTJS_BLOCK_KEY}:${this.props.block.key}`);
    }

    render() {
      const { draggable } = this.props;
      const readOnly = store.getReadOnly();
      return (
        <WrappedComponent
          {...this.props}
          onDragStart={!readOnly ? this.startDrag : undefined}
          draggable={!readOnly && draggable}
        />
      );
    }
  }
);
