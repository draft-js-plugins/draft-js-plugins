import React, { Component, PropTypes } from 'react';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import unionClassNames from 'union-class-names';
import styles from './styles.css';
import 'prismjs/themes/prism.css';

export default class Code extends Component {

  static propTypes = {
    code: PropTypes.string,
  };

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const { className } = this.props;
    const combinedRootClassName = unionClassNames(styles.root, className);
    const nameClassname = this.props.name ? styles.name : styles.hiddenName;
    return (
      <div className={combinedRootClassName}>
        <div className={nameClassname}>{this.props.name}</div>
        <pre className={styles.code}>
          <code
            dangerouslySetInnerHTML={{ __html: this.props.code }}
          />
        </pre>
      </div>
    );
  }
}
