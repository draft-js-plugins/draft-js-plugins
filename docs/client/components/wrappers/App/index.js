import React, { Component } from 'react';
import styles from './styles.css';

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <footer className={ styles.footer }>
            Built with&nbsp;
            <span className={ styles.heart }>
              &#x2764;
            </span>
            &nbsp;on Planet Earth :)
        </footer>
      </div>
    );
  }
}
