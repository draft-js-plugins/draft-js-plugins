/**
 * A higher-order component to render a sticker in the editor
 */

import React, { Component } from 'react';
import styles from './styles.css';
import { Entity } from 'draft-js';
import stickers from '../stickers.js';

export default class Sticker extends Component {

  render() {
    const { block } = this.props;
    const data = Entity.get(block.getEntityAt(0)).getData();
    return (
      <figure
        className={ styles.root }
        contentEditable={ false }
        data-offset-key={ `${block.get('key')}-0-0` }
      >
        <img className={ styles.image } src={ stickers.getIn(['data', data.id, 'url']) } />
      </figure>
    );
  }
}
