import React, { Component, PropTypes } from 'react';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import styles from './styles.css';
import 'prismjs/themes/prism.css';

export default class Code extends Component {

  static propTypes = {
    code: PropTypes.string,
  };

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <pre className={ styles.root } >
        <code
          dangerouslySetInnerHTML={{ __html: this.props.code }}
        />
      </pre>
    );
  }
}
