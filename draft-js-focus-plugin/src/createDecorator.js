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

  componentDidMount() {
    store.addType(this.props.block.type);
    this.componentDidUpdate();
  }

  componentWillUpdate() {
    document.removeEventListener('keydown', this.releaseOnKeyDown);
    document.removeEventListener('click', this.releaseOnClick);
  }

  componentDidUpdate() {
    const { isFocused } = this.props.blockProps;
    if (!store.getReadOnly()) {
      document.addEventListener('keydown', this.releaseOnKeyDown);
      if (isFocused) {
        document.addEventListener('click', this.releaseOnClick);
      }
    }
  }

  componentWillUnmount() {
    const { isFocused } = this.props.blockProps;
    this.componentWillUpdate();
    if (isFocused) {
      this.props.blockProps.unsetFocus();
    }
  }

  releaseOnKeyDown = (event) => {
    if (event.keyCode === 38) {
      this.props.blockProps.unsetFocus('up', event);
    } else if (event.keyCode === 40) {
      this.props.blockProps.unsetFocus('down', event);
    } else if (event.keyCode === 8) {
      // TODO fix backspace for removing the block
      this.props.blockProps.unsetFocus('down', event);
      store.setEditorState(removeBlock(store.getEditorState(), this.props.block.get('key')));
    }
  }

  releaseOnClick = () => {
    // TODO don't release in case it's inside this component
    this.props.blockProps.unsetFocus();
  }

  onClick = () => {
    const { isFocused } = this.props.blockProps;
    if (isFocused) return;
    this.props.blockProps.setFocus();
  };

  render() {
    const { blockProps, className } = this.props;
    const { isFocused } = blockProps;
    const combinedClassName = isFocused ? unionClassNames(className, theme.focused) : className;
    return (
      <WrappedComponent
        {...this.props}
        onClick={this.onClick}
        className={combinedClassName}
      />
    );
  }
};
