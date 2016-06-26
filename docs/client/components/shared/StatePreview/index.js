import React, { Component } from 'react';
import styles from './styles.css';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

export default class StatePreview extends Component {

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const codeClassName = this.props.collapsed ? styles.collapsedCode : styles.expandedCode;

    let code = null;
    if (!this.props.collapsed) {
      code = JSON.stringify(this.props.editorState.getCurrentContent().toJS(), null, 2);
    }

    return (
      <div className={styles.root}>
        <pre className={codeClassName}>
          {code}
        </pre>
      </div>
    );
  }
}
