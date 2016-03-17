/* @flow */

import React, { Component } from 'react';
import styles from './styles.css';

// The component we render when we encouter a hyperlink in the text
export default class Link extends Component {
  render() {
    return (
      <a { ...this.props } href={ this.props.decoratedText } className={ styles.root }>
        { this.props.children }
      </a>
    );
  }
}
