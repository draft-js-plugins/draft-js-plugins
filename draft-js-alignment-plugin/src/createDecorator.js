import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const getDisplayName = (WrappedComponent) => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ store }) => (WrappedComponent) => class BlockResizeableDecorator extends Component {
  static displayName = `BlockDraggable(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  componentDidUpdate = () => {
    if (this.props.blockProps.isFocused) {
      // TODO figure out if and how to achieve this without fetching the DOM node
      // eslint-disable-next-line react/no-find-dom-node
      const blockNode = ReactDOM.findDOMNode(this);
      const boundingRect = blockNode.getBoundingClientRect();
      store.updateItem('setAlignmentData', this.props.blockProps.setAlignmentData);
      store.updateItem('alignmentData', this.props.blockProps.alignmentData);
      store.updateItem('boundingRect', boundingRect);
      store.updateItem('isVisible', true);
    } else {
      store.updateItem('isVisible', false);
    }
  }

  render() {
    const {
      blockProps,
      style,
      // using destructuring to make sure unused props are not passed down to the block
      ...elementProps
    } = this.props;
    const alignment = blockProps.alignmentData.alignment;
    let newStyle = style;
    if (alignment === 'left') {
      newStyle = { ...style, float: 'left' };
    } else if (alignment === 'right') {
      newStyle = { ...style, float: 'right' };
    } else if (alignment === 'center') {
      newStyle = { ...style, marginLeft: 'auto', marginRight: 'auto', display: 'block' };
    }

    return (
      <WrappedComponent
        {...elementProps}
        blockProps={blockProps}
        style={newStyle}
      />
    );
  }
};
