import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

const findParentNode = (node, filter) => {
  if (!node) return null;
  return node.parentElement && filter(node.parentElement)
    ? node.parentElement
    : findParentNode(node.parentElement, filter);
};

export default ({ theme, store }) => WrappedComponent => class BlockFocusDecorator extends Component {
  // Statics
  static displayName = `BlockFocus(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  setFocus = () => {
    const { blockProps } = this.props;
    blockProps.setFocus();
  }

  unsetFocus = (direction, event) => {
    const { unsetFocus } = this.props.blockProps;
    unsetFocus(direction, event);
  }

  removeBlock = () => {
    const { removeBlock } = this.props.blockProps;
    removeBlock();
  }

  componentDidMount() {
    store.addType(this.props.block.type);
    this.componentDidUpdate();
  }

  componentWillUpdate() {
    if (this.DOMNode) {
      this.DOMNode.removeEventListener('click', this.mouseDown);
      // document.removeEventListener('keydown', this.releaseOnArrowKey);
      // document.removeEventListener('mousedown', this.releaseOnMouseDown);
    }
    if (this.ReactRoot) {
      document.removeEventListener('keydown', this.releaseOnArrowKey);
      this.ReactRoot.removeEventListener('mousedown', this.releaseOnMouseDown);
    }
  }

  componentDidUpdate() {
    this.DOMNode = ReactDOM.findDOMNode(this);
    this.ReactRoot = document.querySelector('[data-reactroot]');
    const { pluginEditor, isFocused } = this.props.blockProps;
    const { getReadOnly } = pluginEditor;

    if (this.DOMNode && !getReadOnly()) {
      this.DOMNode.addEventListener('click', this.mouseDown);
      if (isFocused && this.ReactRoot) {
        // document.addEventListener('keydown', this.releaseOnArrowKey);
        // document.addEventListener('mousedown', this.releaseOnMouseDown);
        document.addEventListener('keydown', this.releaseOnArrowKey);
        this.ReactRoot.addEventListener('mousedown', this.releaseOnMouseDown);
      }
    }
  }

  componentWillUnmount() {
    const { isFocused } = this.props.blockProps;
    this.componentWillUpdate();
    if (isFocused) {
      this.unsetFocus();
    }
  }

  releaseOnArrowKey = event => {
    if (event.keyCode === 38) {
      event.stopPropagation();
      this.unsetFocus('up', event);
    } else if (event.keyCode === 40) {
      event.stopPropagation();
      this.unsetFocus('down', event);
    } else if (event.keyCode === 8) {
      event.stopPropagation();
      event.preventDefault();
      this.unsetFocus('down', event);
      this.removeBlock();
    }
  }

  releaseOnMouseDown = () => {
    if (!findParentNode(event.target, x => x === this.DOMNode)) {
      this.unsetFocus();
    }
  }

  mouseDown = event => {
    const { isFocused } = this.props.blockProps;
    if (isFocused) return;
    event.stopPropagation();
    this.setFocus();
  };

  render() {
    const { blockProps, className } = this.props;
    const { isFocused } = blockProps;

    const newClassName = [className, (isFocused ? theme.focused : null)].filter(p => p);

    return (
      <WrappedComponent {...this.props} className={newClassName.join(' ')} isFocused={isFocused} setFocus={this.setFocus} focusClassName={isFocused ? theme.focused : ''} />
    );
  }
};
