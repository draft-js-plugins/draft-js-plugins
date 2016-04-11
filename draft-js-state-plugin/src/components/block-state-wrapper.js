import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default function(WrappedComponent) {
  class BlockStateWrapper extends Component {
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
      return (
        <div style={this.props.blockProps.focused ? { border: '1px solid blue' } : null}>
          <WrappedComponent ref="component" {...this.props} />
        </div>
      );
    }
  }
  return BlockStateWrapper;
}
