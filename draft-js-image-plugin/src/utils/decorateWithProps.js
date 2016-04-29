import React, { Component } from 'react';

const getDisplayName = (WrappedComponent) => (
  WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

/* eslint-disable space-before-keywords */
export default (EmbeddedComponent, props) => (class extends Component {

  static displayName = `Decorated(${getDisplayName(EmbeddedComponent)})`;
  static pluginOptions = EmbeddedComponent.pluginOptions;
  static WrappedComponent = EmbeddedComponent;

  render() {
    return (
      <EmbeddedComponent { ...this.props } { ...props } />
    );
  }
});
