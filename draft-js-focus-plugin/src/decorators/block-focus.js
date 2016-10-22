import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import unionClassNames from 'union-class-names';

// Get a component's display name
const getDisplayName = (WrappedComponent) => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

const findParentNode = (node, filter) => {
  if (!node) return null;
  return node.parentElement && filter(node.parentElement)
    ? node.parentElement
    : findParentNode(node.parentElement, filter);
};

export default ({ theme, store }) => (WrappedComponent) => class BlockFocusDecorator extends Component {

  static displayName = `BlockFocus(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  componentDidMount() {
    store.addType(this.props.block.type);
    this.componentDidUpdate();
  }

  componentWillUpdate() {
    document.removeEventListener('keydown', this.releaseOnArrowKey);
    if (this.ReactRoot) {
      this.ReactRoot.removeEventListener('mousedown', this.releaseOnMouseDown);
    }
  }

  componentDidUpdate() {
    // eslint-disable-next-line react/no-find-dom-node
    this.DOMNode = ReactDOM.findDOMNode(this);
    this.ReactRoot = document.querySelector('[data-reactroot]');
    const { pluginEditor, isFocused } = this.props.blockProps;
    const { getReadOnly } = pluginEditor;
    if (!getReadOnly()) {
      document.addEventListener('keydown', this.releaseOnArrowKey);
    }

    if (this.DOMNode && !getReadOnly() && isFocused && this.ReactRoot) {
      this.ReactRoot.addEventListener('mousedown', this.releaseOnMouseDown);
    }
  }

  componentWillUnmount() {
    const { isFocused } = this.props.blockProps;
    this.componentWillUpdate();
    if (isFocused) {
      this.unsetFocus();
    }
  }

  releaseOnArrowKey = (event) => {
    if (event.keyCode === 38) {
      this.props.blockProps.unsetFocus('up', event);
    } else if (event.keyCode === 40) {
      this.props.blockProps.unsetFocus('down', event);
    } else if (event.keyCode === 8) {
      // TODO fix backspace for removing the block
      this.props.blockProps.unsetFocus('down', event);
      this.props.blockProps.removeBlock();
    }
  }

  releaseOnMouseDown = () => {
    if (!findParentNode(event.target, (x) => x === this.DOMNode)) {
      this.props.blockProps.unsetFocus();
    }
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
