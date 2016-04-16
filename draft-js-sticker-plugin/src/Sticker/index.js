import React, { Component } from 'react';
import { Entity } from 'draft-js';

export default class Sticker extends Component {

  remove = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();
    event.stopPropagation();

    this.props.blockProps.onRemove(this.props.block.getKey());
  };

  render() {
    const { block, stickers, theme } = this.props;

    console.log('Sticker', this.props.blockProps);
    const removeButton = (
      <span
        className={ theme.get('stickerRemoveButton') }
        onClick={ this.remove }
        role="button"
      >
        ✕
      </span>
    );

    const data = Entity.get(block.getEntityAt(0)).getData();
    return (
      <figure
        contentEditable={ false }
        data-offset-key={ `${block.get('key')}-0-0` }
        className={ theme.get('sticker') }
        style={this.props.blockProps.focused ? { border: '1px solid red' } : {}}
      >
        <img
          className={ theme.get('stickerImage') }
          src={ stickers.getIn(['data', data.id, 'url']) }
          role="presentation"
        />
        { this.props.attachRemoveButton ? removeButton : null }
      </figure>
    );
  }
}
