import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default (theme, isFocused, setFocus) => WrappedComponent => {
  const { pluginOptions } = WrappedComponent;
  return class BlockFocusDecorator extends Component {
    // Statics
    static displayName = `BlockFocus(${getDisplayName(WrappedComponent)})`;
    static pluginOptions = WrappedComponent.pluginOptions;
    static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

    componentDidMount() {
      if (this.refs.component) {
        this.DOMNode = ReactDOM.findDOMNode(this.refs.component);
        this.DOMNode.addEventListener('mouseup', this.click);
      }
    }

    componentWillUnmount() {
      if (this.DOMNode) {
        this.DOMNode.removeEventListener('mouseup', this.click);
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
          <WrappedComponent ref="component" {...this.props} focusedStyle={theme} isFocused={isFocused} setFocus={setFocus} />
        );
      }
      // If is focused, add a div and apply className
      return (
        <div className={theme.focused}>
          <WrappedComponent ref="component" {...this.props} isFocused={isFocused} setFocus={setFocus} />
        </div>
      );
    }
  };
};
