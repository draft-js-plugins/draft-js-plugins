import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Wrapper extends Component {
  componentDidMount() {
    const { pluginEditor } = this.props;
    const node = ReactDOM.findDOMNode(this);
    node.addEventListener('mousedown', event => pluginEditor.fireMethod('onMouseDown', event));
    node.addEventListener('mouseup', event => pluginEditor.fireMethod('onMouseUp', event));
  }

  render() {
    const { children } = this.props;
    return React.Children.only(children);
  }
}
