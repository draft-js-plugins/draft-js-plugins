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
    const nameClassname = this.props.name ? styles.name : styles.hiddenName;
    return (
      <div className={ styles.root }>
        <div className={ nameClassname }>{ this.props.name }</div>
        <pre>
          <code
            dangerouslySetInnerHTML={{ __html: this.props.code }}
          />
        </pre>
      </div>
    );
  }
}
