import React, { Component, PropTypes } from 'react';
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin';
import unionClassNames from 'union-class-names';
import styles from './styles.css';
import 'prismjs/themes/prism.css';

export default class InlineCode extends Component {

  static propTypes = {
    code: PropTypes.string,
  };

  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    const { className } = this.props;
    const combinedRootClassName = unionClassNames(styles.root, className);
    return (
      <span className={combinedRootClassName}>
        <code
          dangerouslySetInnerHTML={{ __html: this.props.code }}
        />
      </span>
    );
  }
}
