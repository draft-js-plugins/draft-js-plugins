import React, { Component } from 'react';
import styles from './styles';

export default class StatePreview extends Component {
  render() {
    return (
      <div style={ styles.root }>
        <div style={ styles.header }>State</div>
        <pre style={ styles.code }>
          { JSON.stringify(this.props.editorState.getCurrentContent().toJS(), null, 2) }
        </pre>
      </div>
    );
  }
}
