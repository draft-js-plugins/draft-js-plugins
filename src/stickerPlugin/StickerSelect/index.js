/**
 * A basic sticker selector component
 */

import React, { Component } from 'react';
import styles from './styles';
import StickerOption from './StickerOption';
import add from '../modifiers/addSticker';

/**
 * Sets the CSS overflow value to newValue
 * Use like this: setOverflow('auto', document.body);
 */
function setOverflow(newValue, element) {
  element.style.overflow = newValue; // eslint-disable-line no-param-reassign
}

export default (stickers) => {
  class StickerSelect extends Component {
    // Start the selector closed
    state = {
      open: false,
    };

    // When the selector is open and users click anywhere on the page,
    // the selector should close
    componentWillMount() {
      document.addEventListener('click', this.closePopover);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.closePopover);
    }

    // When users are scrolling the popover, the page shouldn't scroll when
    // they reach the end of it
    onMouseEnter = () => {
      setOverflow('hidden', document.body);
    };

    onMouseLeave = () => {
      setOverflow('auto', document.body);
    };

    // Open the popover
    openPopover = () => {
      if (!this.state.open) {
        this.preventNextClose = true;
        this.setState({
          open: true,
        });
      }
    };

    // Close the popover
    closePopover = () => {
      if (!this.preventNextClose && this.state.open) {
        this.setState({
          open: false,
        });
      }

      this.preventNextClose = false;
    };

    // Add a sticker to the editor
    add = (id) => {
      const { editor } = this.props;
      editor.onChange(add(editor.state.editorState, id));
    };

    render() {
      // Create the sticker selection elements
      const stickerElements = stickers.get('data').map((sticker) => {
        const id = sticker.get('id');
        const url = sticker.get('url');
        return (
          <StickerOption
            key={ id }
            onClick={ this.add }
            id={ id }
            url={ url }
          />
        );
      });

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
