/**
 * A higher-order component to render a sticker in the editor
 */

import React, { Component } from 'react';
import { Entity } from 'draft-js';
import applyStyles from '../../utils/applyStyles';

export default (stickers, hasRemove = true) => {
  class Sticker extends Component {

    remove = (event) => {
      // Note: important to avoid a content edit change
      event.preventDefault();
      event.stopPropagation();

      this.props.blockProps.onRemove(this.props.block.getKey());
    };

    render() {
      const { block } = this.props
      const theme = this.props.theme.map(applyStyles);
      const removeButton = (
        <span
          {...theme.get('removeSticker')}
          onClick={ this.remove }
          role="button"
        >
          ✕
        </span>
      );

      const data = Entity.get(block.getEntityAt(0)).getData();
      return (
        <figure {...theme.get('root')} contentEditable={ false } data-offset-key={ `${block.get('key')}-0-0` }>
          <img {...theme.get('stickerImage')} src={ stickers.getIn(['data', data.id, 'url']) } />
          { hasRemove ? removeButton : null }
        </figure>
      );
    }
  }
  return Sticker;
};
