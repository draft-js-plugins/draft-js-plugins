/* @flow */

import React, { Component } from 'react';
import styles from './styles';

export default class Hashtag extends Component {
  render() {
    return (
      <span {...this.props} style={styles.root}>
        {this.props.children}
      </span>
    );
  }
}
