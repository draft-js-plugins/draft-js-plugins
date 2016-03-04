/**
 * Showcases a sticker one can then pick to add to the editor
 */

import React, { Component } from 'react';
import styles from './styles';

export default class StickerOption extends Component {

  // Hack hoverstate support because we're using inline styles
  state = {
    hover: false,
  };

  onMouseEnter = () => {
    this.setState({
      hover: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false,
    });
  };

  onClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    const { id, url } = this.props;
    const rootStyle = {
      ...styles.root,
      background: (this.state.hover ? '#eee' : '#fff'),
    };
    return (
      <button
        onClick={ this.onClick }
        onMouseEnter={ this.onMouseEnter }
        onMouseLeave={ this.onMouseLeave }
        key={ id }
        type="button"
        style={ rootStyle }
      >
        <img style={ styles.image } src={ url } />
      </button>
    );
  }
}
