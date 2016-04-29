import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default theme => WrappedComponent => {
  class BlockFocusWrapper extends Component {
    static pluginOptions = WrappedComponent.pluginOptions;
    static WrappedComponent = WrappedComponent;
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
      this.props.blockProps.focus();
      event.stopPropagation();
    };

    render() {
      if (WrappedComponent.pluginOptions && WrappedComponent.pluginOptions.customFocusedStyle) {
        return <WrappedComponent ref="component" focusedStyle={theme} {...this.props} />;
      }

      return this.props.blockProps.focused ? (
        <div className={theme.focused}>
          <WrappedComponent ref="component" {...this.props} />
        </div>
      ) : <WrappedComponent ref="component" {...this.props} />;
    }
  }
  return BlockFocusWrapper;
}
