import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

let number = 0;

// HoverToolbar decorator will render a toolbar on hovering the WrappedComponent
export default ({ theme, customRender }) => WrappedComponent => class FocusedToolbarDecorator extends Component {
  // Statics
  static displayName = `FocusedToolbar(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  // Bind listeners on mount
  componentDidMount() {
    // Set this.number to a unique value
    this.number = number++;

    // Bind listeners
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    this.DOMNode = ReactDOM.findDOMNode(this);
    if (!customRender) {
      this.renderToolbar(
        [...(this.props.actions || []), ...(this.componentActions || [])],
        this.props.blockProps.isFocused
      );
    }
  }

  componentWillUnmount() {
    if (!customRender) {
      this.renderToolbar(
        [...(this.props.actions || []), ...(this.componentActions || [])],
        false
      );
    }
  }

  // Render the actual toolbar
  renderToolbar = (actions, active) => {
    const { blockProps } = this.props;
    const handler = blockProps.toolbarHandler;

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
    this.componentActions = actions;
  }

  render() {
    return (
      <WrappedComponent {...this.props} addActions={this.addActions} renderToolbar={this.renderToolbar} />
    );
  }
};
