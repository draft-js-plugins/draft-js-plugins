import React, { Component } from 'react';

const getDisplayName = (WrappedComponent) => (
  WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

export default (EmbeddedComponent, props) => (class extends Component {

  static displayName = `Decorated(${getDisplayName(EmbeddedComponent)})`;

  render() {
    return (
      <EmbeddedComponent { ...this.props } { ...props } />
    );
  }
});
