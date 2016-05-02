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

export default (theme, isFocused, setFocus, setReadOnly, removeBlock) => WrappedComponent => {
  const { pluginOptions } = WrappedComponent;
  return class BlockFocusDecorator extends Component {
    // Statics
    static displayName = `BlockFocus(${getDisplayName(WrappedComponent)})`;
    static pluginOptions = WrappedComponent.pluginOptions;
    static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

    componentDidMount() {
      if (this.refs.component) {
        this.DOMNode = ReactDOM.findDOMNode(this.refs.component);
        this.DOMNode.addEventListener('click', this.click);
        this.DraftNode = findParentNode(this.DOMNode, node => node.className.indexOf('public-DraftEditor-content') !== -1);
        this.DraftNode.addEventListener('mousedown', this.release);

        if (isFocused) {
          document.addEventListener('keydown', this.releaseOnArrowKey);
        }
      }
    }

    componentDidUpdate() {
      document.removeEventListener('keydown', this.releaseOnArrowKey);
      document.addEventListener('keydown', this.releaseOnArrowKey);
    }

    componentWillUnmount() {
      if (this.DOMNode) {
        this.DOMNode.removeEventListener('click', this.click);
        document.removeEventListener('keydown', this.releaseOnArrowKey);
        this.DraftNode.removeEventListener('mousedown', this.release);
      }
    }

    release = () => {
      setReadOnly(false);
    }

    releaseOnArrowKey = event => {
      if (event.keyCode === 38) {
        event.stopPropagation();
        this.release();
      } else if (event.keyCode === 40) {
        event.stopPropagation();
        this.release();
      } else if (event.keyCode === 8) {
        event.stopPropagation();
        event.preventDefault();
        removeBlock();
      }
    }

    click = event => {
      setFocus();
      event.stopPropagation();
    };

    render() {
      // If pluginOptions.customFocusedStyle let wrapped component handle itself
      // or if not focused, do nothing
      if ((pluginOptions && pluginOptions.customFocusedStyle) || !isFocused) {
        return (
          <WrappedComponent ref="component" {...this.props} focusedClassName={isFocused ? theme.focused : ''} focusedStyle={theme} isFocused={isFocused} setFocus={setFocus} />
        );
      }
      // If is focused, add a div and apply className
      return (
        <div className={theme.focused} onKeyDown={this.releaseOnArrowKey}>
          <WrappedComponent ref="component" {...this.props} isFocused={isFocused} setFocus={setFocus} />
        </div>
      );
    }
  };
};
