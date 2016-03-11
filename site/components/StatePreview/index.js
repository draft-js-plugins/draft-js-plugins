import React from 'react';
import styles from './styles';
import PureComponent from 'react-pure-render/component';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';

export default class StatePreview extends PureComponent {

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const codeStyle = {
      ...styles.code,
      height: (this.props.collapsed ? 0 : '50em'),
      padding: (this.props.collapsed ? 0 : 10),
      border: (this.props.collapsed ? '1px solid #fff' : '1px solid #ddd'),
      transition: (this.props.collapsed ?
        'height 150ms ease-in, padding 0ms 150ms' :
        'height 150ms ease-out, padding 0ms 0ms'),
    };

    let code = null;
    if (!this.props.collapsed) {
      code = JSON.stringify(this.props.editorState.getCurrentContent().toJS(), null, 2);
    }

    return (
      <div style={ styles.root }>
        <pre style={ codeStyle }>
          { code }
        </pre>
      </div>
    );
  }
}
