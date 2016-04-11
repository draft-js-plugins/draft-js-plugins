import React, { Component } from 'react';
import { Entity } from 'draft-js';
import ReactDOM from 'react-dom';

const getDisplayName = (WrappedComponent) => (
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
);

export default class Wrapper extends Component {
  static displayName = `Decorated(${getDisplayName(WrappedComponent)})`;

  componentDidMount() {
    const node = ReactDOM.findDOMNode(editor);
    node.addEventListener('mousedown', event => editor.fireMethod('onMouseDown', event));
    node.addEventListener('mouseup', event => editor.fireMethod('onMouseUp', event));
  }

  render() {
    console.log('CLICK');
    return (
      <WrappedComponent {...this.props} />
    );
  }
};
