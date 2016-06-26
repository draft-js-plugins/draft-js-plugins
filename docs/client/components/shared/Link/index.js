import React, { Component } from 'react';
import styles from './styles.css';
import unionClassNames from 'union-class-names';

export default class Link extends Component {

  render() {
    const { className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(styles.root, className);
    return (
      <a {...props} className={combinedClassName}>
        {this.props.children}
      </a>
    );
  }
}
