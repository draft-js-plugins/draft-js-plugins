import React, { Component } from 'react';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

// Improved decorateWithProps will respect pluginOptions
/* eslint-disable space-before-keywords */
export default (WrappedComponent, props) => class extends Component {
  static displayName = `Decorated(${getDisplayName(WrappedComponent)})`;
  static pluginOptions = WrappedComponent.pluginOptions;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

  render() {
    return (
      <WrappedComponent {...this.props} {...props} />
    );
  }
};
