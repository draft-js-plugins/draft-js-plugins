/**
 * Showcases a sticker one can then pick to add to the editor
 */

import React, { Component } from 'react';
import styles from './styles.css';

export default class StickerOption extends Component {

  onClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    const { id, url } = this.props;
    return (
      <button
        onClick={ this.onClick }
        key={ id }
        type="button"
        className={ styles.root }
      >
        <img className={ styles.image } src={ url } />
      </button>
    );
  }
}
