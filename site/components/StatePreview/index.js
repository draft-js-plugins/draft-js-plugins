import React, { Component } from 'react';
import styles from './styles';

export default class StatePreview extends Component {

  render() {
    const codeStyle = {
      ...styles.code,
      height: (this.props.collapsed ? 0 : '30em'),
      padding: (this.props.collapsed ? 0 : 10),
      border: (this.props.collapsed ? '1px solid #fff' : '1px solid #ddd'),
      transition: (this.props.collapsed ?
        'height 150ms ease-in, padding 0ms 150ms' :
        'height 150ms ease-out, padding 0ms 0ms'),
    };

    return (
      <div style={ styles.root }>
        <pre style={ codeStyle }>
          { JSON.stringify(this.props.editorState.getCurrentContent().toJS(), null, 2) }
        </pre>
      </div>
    );
  }
}
