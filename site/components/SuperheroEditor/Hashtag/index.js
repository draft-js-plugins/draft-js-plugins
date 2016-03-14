import React, { Component } from 'react';
import styles from './styles.css';

export default class Hashtag extends Component {
  render() {
    return (
      <span { ...this.props } className={ styles.root }>
        { this.props.children }
      </span>
    );
  }
}
