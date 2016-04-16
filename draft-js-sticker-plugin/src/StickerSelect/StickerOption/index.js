/**
 * Showcases a sticker one can then pick to add to the editor
 */

import React, { Component } from 'react';

export default class StickerOption extends Component {

  onClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    const { id, url } = this.props;
    const { theme } = this.props;
    return (
      <button
        onClick={ this.onClick }
        key={ id }
        type="button"
        className={ theme.get('selectSticker') }
      >
        <img
          className={ theme.get('selectStickerImage') }
          src={ url }
          role="presentation"
        />
      </button>
    );
  }
}
