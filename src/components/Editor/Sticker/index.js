/* @flow */

import React, { Component } from 'react';
import styles from './styles';
import { Entity } from 'draft-js';

export default class Sticker extends Component {
  render() {
    const { block } = this.props;
    const data = Entity.get(block.getEntityAt(0)).getData();

    // TODO figure out why this breaks when our content block is removed
    console.log('data', data);

    // TODO add remove x so people can remove the sticker

    // TODO allow to add differnt unicorn stickers
    return (
      <figure style={ styles.root } contentEditable={ false } data-offset-key={ `${block.get('key')}-0-0` }>
        <img width={100} src="https://media4.giphy.com/media/WZmgVLMt7mp44/200_s.gif" />
      </figure>
    );
  }
}
