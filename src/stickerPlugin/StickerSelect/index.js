import React, { Component } from 'react';
import styles from './styles';
import StickerOption from './StickerOption';

export default (stickers) => {
  class StickerSelect extends Component {

    state = {
      open: false,
    };

    toggle = () => {
      this.setState({
        open: !this.state.open,
      });
    };

    render() {
      const editor = this.props.editor;
      const stickerElements = stickers.map((sticker) => (
        <StickerOption
          editor={ editor }
          sticker={ sticker }
        />
      ));

      const popoverStyle = {
        ...styles.popover,
        display: (this.state.open ? 'block' : 'none'),
      };

      const buttonStyle = {
        ...styles.button,
        background: (this.state.open ? '#ededed' : '#fff'),
      };

      return (
        <div style={ styles.root }>
          <button
            style={ buttonStyle }
            onClick={ this.toggle }
            type="button"
          >
            ☺
          </button>
          <div style={ popoverStyle }>
            { stickerElements.toList().toJS() }
          </div>
        </div>
      );
    }
  }
  return StickerSelect;
};
