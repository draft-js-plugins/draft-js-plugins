/* @flow */

import React, { Component } from 'react';
import styles from './styles';
import { Entity } from 'draft-js';
import stickers from '../constants/stickers';

export default class Sticker extends Component {

  remove: Function = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();
    event.stopPropagation();

    this.props.blockProps.onRemove(this.props.block.getKey());
  };

  render() {
    const { block } = this.props;
    const data = Entity.get(block.getEntityAt(0)).getData();
    return (
      <figure style={ styles.root } contentEditable={ false } data-offset-key={ `${block.get('key')}-0-0` }>
        <img height={100} src={ stickers[data.id].url } />
        <button className="TeXEditor-removeButton" onClick={this.remove}>
          Remove
        </button>
      </figure>
    );
  }
}
