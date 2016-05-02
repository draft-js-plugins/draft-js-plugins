import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

let number = 0;

// HoverToolbar decorator will render a toolbar on hovering the WrappedComponent
export default (defaultTheme, toolbarStore) => WrappedComponent => class FocusedToolbarDecorator extends Component {
  // Statics
  static displayName = `FocusedToolbar(${getDisplayName(WrappedComponent)})`;
  static pluginOptions = WrappedComponent.pluginOptions;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  // Bind listeners on mount
  componentDidMount() {
    // Set this.number to a unique value
    this.number = number++;

    // Get this domNode
    const element = ReactDOM.findDOMNode(this);
    if (!element) {
      return;
    }
    // Bind listeners
    this.DOMNode = element;
    this.doRenderToolbar(this.props.isFocused);
  }

  componentDidUpdate() {
    this.doRenderToolbar(this.props.isFocused);
  }

  // Render the actual toolbar
  doRenderToolbar = active => {
    const props = {
      ...this.props,
      actions: [...(this.props.actions || []), ...(this._componentActions || [])],
      theme: this.props.theme || defaultTheme,
      getTargetRectangle: () => this.DOMNode.getBoundingClientRect(),
      uid: this.DOMNode,
    };
    if (active) {
      toolbarStore.add(props);
    } else {
      toolbarStore.remove(props);
    }
  }

  addActions = actions => {
    this._componentActions = actions;
  }

  render() {
    return (
      <WrappedComponent {...this.props} addActions={this.addActions} />
    );
  }
};
