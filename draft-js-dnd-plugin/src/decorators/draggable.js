import React, { Component } from 'react';
import { DRAFTJS_BLOCK_KEY } from '../constants';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

// Export
export default WrappedComponent => {
  const { pluginOptions } = WrappedComponent;

  return class BlockDraggableDecorator extends Component {
    // Statics
    static displayName = `BlockDraggable(${getDisplayName(WrappedComponent)})`;
    static pluginOptions = pluginOptions;
    static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

    // Default props
    static defaultProps = {
      draggable: true,
      readOnly: false,
    };

    // Handle start-drag and set dataTransfer data with blockKey
    startDrag = event => {
      const allow = this.props.draggable && !this.props.readOnly;
      if (!allow) return;
      event.dataTransfer.dropEffect = 'move'; // eslint-disable-line no-param-reassign
      // Declare data and give info that its an existing key and a block needs to be moved
      event.dataTransfer.setData('text', `${DRAFTJS_BLOCK_KEY}:${this.props.block.key}`);
    }

    render() {
      const { draggable, blockProps } = this.props;
      const readOnly = blockProps.pluginEditor.getReadOnly();

      // Check if pluginOptions.customHandleDnd != true and add a div to markup
      /* if (!pluginOptions || pluginOptions.customHandleDnd !== true) {
        return (
          <div onDragStart={this.startDrag} draggable={draggable}>
            <WrappedComponent {...this.props} />
          </div>
        );
      }*/

      // In case pluginOptions.customHandleDnd == true let component handle onDragStart
      return <WrappedComponent {...this.props} onDragStart={!readOnly ? this.startDrag : undefined} draggable={!readOnly && draggable} />;
    }
  };
};
