import React, { Component } from 'react';
import unionClassNames from 'union-class-names';
import removeBlock from './modifiers/removeBlock';

// Get a component's display name
const getDisplayName = (WrappedComponent) => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ theme, store }) => (WrappedComponent) => class BlockFocusDecorator extends Component {
  static displayName = `BlockFocus(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  componentWillMount() {
    store.subscribeToItem('selection', this.onSelectionChanged);
  }

  componentWillUnmount() {
    store.unsubscribeFromItem('selection', this.onSelectionChanged);
  }

  // onSelectionChanged = (selection) => {
  onSelectionChanged = () => {
    // TODO only update if something changed
    this.forceUpdate();
  }

  // TODO fix this with left/right up down
  releaseOnKeyDown = (event) => {
    if (event.keyCode === 38) {
      this.props.blockProps.unsetFocus('up', event);
    } else if (event.keyCode === 40) {
      this.props.blockProps.unsetFocus('down', event);
    } else if (event.keyCode === 8) {
      // TODO fix backspace for removing the block
      this.props.blockProps.unsetFocus('down', event);
      store.setEditorState(removeBlock(store, this.props.block.get('key')));
    }
  }

  releaseOnClick = () => {
    // TODO don't release in case it's inside this component
    this.props.blockProps.unsetFocus();
  }

  render() {
    const { blockProps, className } = this.props;
    const { isFocused } = blockProps;
    const combinedClassName = isFocused()
      ? unionClassNames(className, theme.focused)
      : unionClassNames(className, theme.unfocused);
    return (
      <WrappedComponent
        {...this.props}
        className={combinedClassName}
      />
    );
  }
};
