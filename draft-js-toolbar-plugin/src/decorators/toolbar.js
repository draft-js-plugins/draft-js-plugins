import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

let number = 0;

// HoverToolbar decorator will render a toolbar on hovering the WrappedComponent
export default ({ theme, toolbarHandler, customRender }) => WrappedComponent => class FocusedToolbarDecorator extends Component {
  // Statics
  static displayName = `FocusedToolbar(${getDisplayName(WrappedComponent)})`;
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
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    if (!customRender) {
      this.renderToolbar(
        [...(this.props.actions || []), ...(this._componentActions || [])],
        this.props.blockProps.isFocused
      );
    }
  }

  componentWillUnmount() {
    if (!customRender) {
      this.renderToolbar(
        [...(this.props.actions || []), ...(this._componentActions || [])],
        false
      );
    }
  }

  // Render the actual toolbar
  renderToolbar = (actions, active) => {
    const { blockProps } = this.props;
    const handler = toolbarHandler || blockProps.toolbarHandler;

    const props = {
      ...this.props,
      actions,
      theme,
      getTargetRectangle: () => this.DOMNode.getBoundingClientRect(),
      uid: this.DOMNode,
    };
    if (active) {
      handler.add(props);
    } else {
      handler.remove(props);
    }
  }

  addActions = actions => {
    this._componentActions = actions;
  }

  render() {
    return (
      <WrappedComponent {...this.props} addActions={this.addActions} renderToolbar={this.renderToolbar} />
    );
  }
};
