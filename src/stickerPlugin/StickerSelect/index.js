import React, { Component } from 'react';
import styles from './styles';
import StickerOption from './StickerOption';

/**
 * Sets the CSS overflow value to newValue
 * Use like this: setOverflow('auto', document.body);
 */
function setOverflow(newValue, element) {
  element.style.overflow = newValue; // eslint-disable-line no-param-reassign
}

export default (stickers) => {
  class StickerSelect extends Component {

    state = {
      open: false,
    };

    componentWillMount() {
      document.addEventListener('click', this.closePopover);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.closePopover);
    }

    onMouseEnter = () => {
      setOverflow('hidden', document.body);
    };

    onMouseLeave = () => {
      setOverflow('auto', document.body);
    };

    openPopover = () => {
      if (!this.state.open) {
        this.preventNextClose = true;
        this.setState({
          open: true,
        });
      }
    };

    closePopover = () => {
      if (!this.preventNextClose && this.state.open) {
        this.setState({
          open: false,
        });
      }

      this.preventNextClose = false;
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
            onMouseUp={ this.openPopover }
            type="button"
          >
            <span style={ styles.icon }>☺</span>
            <span style={ styles.buttonText }>Add Sticker</span>
          </button>
          <div
            style={ popoverStyle }
            onMouseEnter={ this.onMouseEnter }
            onMouseLeave={ this.onMouseLeave }
          >
            <div style={ styles.stickerList }>
              { stickerElements.toList().toJS() }
            </div>
            <div style={ styles.bottomGradient }></div>
          </div>
        </div>
      );
    }
  }
  return StickerSelect;
};
