import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './styles.css';

export default class Link extends Component {

  render() {
    const { className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = clsx(styles.root, className);
    return (
      <a {...props} className={combinedClassName}>
        {this.props.children}
      </a>
    );
  }
}
