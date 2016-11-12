import React, { Component } from 'react';

const getDisplayName = (WrappedComponent) => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ store }) => (WrappedComponent) => class BlockResizeableDecorator extends Component {
  static displayName = `BlockDraggable(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

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
