/**
 * A basic sticker selector component
 */

import React, { Component } from 'react';
import StickerOption from './StickerOption';
import add from '../modifiers/addSticker';
import applyStyles from '../../utils/applyStyles';

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
    componentDidMount() {
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
            theme={this.props.theme}
            key={ id }
            onClick={ this.add }
            id={ id }
            url={ url }
          />
        );
      });

      const theme = this.props.theme.map(applyStyles);
      const popoverStyle = this.state.open ? theme.get('popover') : theme.get('closedPopover');
      const buttonStyle = this.state.open ? theme.get('pressedButton') : theme.get('button');

      return (
        <div { ...theme.get('root') }>
          <button
            { ...buttonStyle }
            onMouseUp={ this.openPopover }
            type="button"
          >
            <span { ...theme.get('icon') }>☺</span>
            <span { ...theme.get('buttonText') }>Add Sticker</span>
          </button>
          <div
            { ...popoverStyle }
            onMouseEnter={ this.onMouseEnter }
            onMouseLeave={ this.onMouseLeave }
          >
            <div { ...theme.get('stickerList') }>
              { stickerElements.toList().toJS() }
            </div>
            <div { ...theme.get('bottomGradient') }></div>
          </div>
        </div>
      );
    }
  }
  return StickerSelect;
};
