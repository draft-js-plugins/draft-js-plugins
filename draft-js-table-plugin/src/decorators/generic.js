import React, { Component } from 'react';

const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default WrappedComponent => (
  class PluginWrapper extends Component {
    static displayName = `Decorated(${getDisplayName(WrappedComponent)})`;
    static pluginOptions = WrappedComponent.pluginOptions;
    static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

    render() {
      return (
        <WrappedComponent {...this.props.blockProps.pluginEditor} {...this.props.blockProps} {...this.props} />
      );
    }
  }
);
