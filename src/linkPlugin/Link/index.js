/* @flow */

import React, { Component } from 'react';
import styles from './styles';

export default class Link extends Component {

  render() {
    return (
      <a { ...this.props } href={ this.props.children[0].props.text } style={ styles.root }>
        { this.props.children }
      </a>
    );
  }
}
