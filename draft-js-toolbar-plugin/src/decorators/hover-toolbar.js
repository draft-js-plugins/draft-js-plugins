import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

let number = 0;

// HoverToolbar decorator will render a toolbar on hovering the WrappedComponent
export default (defaultTheme, toolbarStore) => WrappedComponent => class HoverToolbarDecorator extends Component {
  // Statics
  static displayName = `HoverToolbar(${getDisplayName(WrappedComponent)})`;
  static pluginOptions = WrappedComponent.pluginOptions;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  // Default state
  state = {
    hover: false,
    hoverToolbar: false,
  };

  // Bind listeners on mount
  componentDidMount() {
    // Set this.number to a unique value
    this.number = number = number++;

    // Get this domNode
    const element = ReactDOM.findDOMNode(this);
    if (!element) {
      return;
    }
    // Bind listeners
    this.DOMNode = element;
    this.DOMNode.addEventListener('mouseover', this.showToolbar);
    this.DOMNode.parentElement.addEventListener('mouseover', this.hideToolbar);
    this.DOMNode.parentElement.parentElement.addEventListener('mouseover', this.hideToolbar);
    this.DOMNode.addEventListener('mouseleave', this.hideToolbarDelayed);
  }

  // Unbind listeners on unmount
  componentWillUnmount() {
    if (this.DOMNode) {
      this.DOMNode.removeEventListener('mouseover', this.showToolbar);
      this.DOMNode.parentElement.removeEventListener('mouseover', this.hideToolbar);
      this.DOMNode.parentElement.parentElement.removeEventListener('mouseover', this.hideToolbar);
      this.DOMNode.removeEventListener('mouseleave', this.hideToolbarDelayed);
    }
  }

  // Show the toolbar
  showToolbar = event => {
    this.doRenderToolbar(true);
    if (event) event.stopPropagation();
  };

  // Hide the toolbar
  hideToolbar = () => {
    this.doRenderToolbar(false);
  };

  // If mouse on toolbar
  mouseOverToolbar = () => {
    this.mouseOverToolbar = true;
  };

  // If mouse leaves toolbar
  mouseLeaveToolbar = () => {
    this.mouseOverToolbar = false;
    this.hideToolbar();
  };

  // Hide toolbar after delay and if mouse not on the toolbar
  hideToolbarDelayed = () => {
    setTimeout(() => {
      if (!this.mouseOverToolbar) {
        this.hideToolbar();
      }
    }, 1);
  };

  // Render the actual toolbar
  doRenderToolbar = active => {
    const props = {
      ...this.props,
      actions: [...(this.props.actions || []), ...(this.componentActions || [])],
      theme: this.props.theme || defaultTheme,
      onMouseOver: this.mouseOverToolbar,
      onMouseLeave: this.mouseLeaveToolbar,
      getTargetRectangle: () => this.DOMNode.getBoundingClientRect(),
      uid: `toolbar-${this.number}`,
    };
    if (active && props.actions.length > 0) {
      toolbarStore.add(props);
    } else {
      toolbarStore.remove(props);
    }
  }

  addActions = actions => {
    this.componentActions = actions;
  }

  render() {
    return (
      <WrappedComponent {...this.props} addActions={this.addActions} />
    );
  }
};
