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

export default ({ theme, isFocused, setFocus, unsetFocus, removeBlock }) => WrappedComponent => class BlockFocusDecorator extends Component {
  // Statics
  static displayName = `BlockFocus(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  setFocus = () => {
    const { blockProps } = this.props;
    (setFocus || blockProps.setFocus)();
  }

  unsetFocus = (direction, event) => {
    const { blockProps } = this.props;
    (unsetFocus || blockProps.unsetFocus)(direction, event);
  }

  removeBlock = () => {
    const { blockProps } = this.props;
    (removeBlock || blockProps.removeBlock)();
  }

  componentDidMount() {
    if (this.refs.component) {
      this.DOMNode = ReactDOM.findDOMNode(this.refs.component);
      if (this.DOMNode) {
        this.DraftNode = findParentNode(this.DOMNode, node => node.className.indexOf('public-DraftEditor-content') !== -1);
      }
      this.componentDidUpdate();
    }
  }

  componentWillUpdate() {
    if (this.DOMNode) {
      this.DOMNode.removeEventListener('mousedown', this.mouseDown);
      // document.removeEventListener('keydown', this.releaseOnArrowKey);
      // document.removeEventListener('mousedown', this.releaseOnMouseDown);
      document.removeEventListener('keydown', this.releaseOnArrowKey);
      this.DraftNode.removeEventListener('mousedown', this.releaseOnMouseDown);
    }
  }

  componentDidUpdate() {
    const { blockProps } = this.props;
    const focused = (isFocused || blockProps.isFocused);

    if (this.DOMNode) {
      this.DOMNode.addEventListener('mousedown', this.mouseDown);
      if (focused) {
        // document.addEventListener('keydown', this.releaseOnArrowKey);
        // document.addEventListener('mousedown', this.releaseOnMouseDown);
        document.addEventListener('keydown', this.releaseOnArrowKey);
        this.DraftNode.addEventListener('mousedown', this.releaseOnMouseDown);
      }
    }
  }

  componentWillUnmount() {
    const { blockProps } = this.props;
    const focused = (isFocused || blockProps.isFocused);
    this.componentWillUpdate();
    if (focused) {
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
    this.unsetFocus();
  }

  mouseDown = event => {
    event.stopPropagation();
    const { blockProps } = this.props;
    const focused = (isFocused || blockProps.isFocused);
    if (focused) return;
    this.setFocus();
  };

  render() {
    const { blockProps, className } = this.props;
    const focused = (isFocused || blockProps.isFocused);

    const newClassName = [className, (focused ? theme.focused : null)].filter(p => p);

    return (
      <WrappedComponent ref="component" {...this.props} className={newClassName.join(' ')} isFocused={focused} setFocus={this.setFocus} focusClassName={focused ? theme.focused : ''} />
    );
  }
};
