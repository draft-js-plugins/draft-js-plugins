import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';

export default class Entry extends Component {
  static propTypes = {
    emoji: PropTypes.string,
    theme: PropTypes.shape({
      entry: PropTypes.string,
      entryFocused: PropTypes.string,
      entryIcon: PropTypes.string,
    }),
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    cacheBustParam: PropTypes.string,
    toneSet: PropTypes.arrayOf(PropTypes.string),
    mouseDown: PropTypes.bool,
    onEmojiSelect: PropTypes.func,
    onEmojiMouseDown: PropTypes.func,
  };

  static defaultProps = {
    mouseDown: false,
  };

  state = {
    isActive: false,
    isFocused: false,
  };

  onMouseUp = () => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onEmojiSelect(this.props.emoji);
    }
  };

  onMouseDown = () => {
    this.mouseDown = true;
    this.props.onEmojiMouseDown(this, this.props.toneSet);
  };

  onMouseEnter = () => {
    this.setState({ isFocused: true });
  }

  onMouseLeave = () => {
    this.setState({ isFocused: false });
  }

  setActive = () => {
    this.setState({ isActive: true });
  }

  unsetActive = () => {
    this.setState({ isActive: false });
  }

  mouseDown = this.props.mouseDown;

  render() {
    const { emoji, theme = {}, imagePath, imageType, cacheBustParam } = this.props;
    // short name to image url code steal from emojione source code
    const shortNameForImage = emojione.emojioneList[emoji].unicode[emojione.emojioneList[emoji].unicode.length - 1];
    const fullImagePath = `${imagePath}${shortNameForImage}.${imageType}${cacheBustParam}`;
    const { isActive, isFocused } = this.state;

    return (
      <button
        className={isActive || isFocused ? theme.entryFocused : theme.entry}
        onMouseDown={this.onMouseDown}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseUp={this.onMouseUp}
        title={emoji}
        ref={(element) => { this.button = element; }}
        role="option"
      >
        <img
          src={fullImagePath}
          className={theme.entryIcon}
          draggable={false}
          role="presentation"
        />
      </button>
    );
  }
}
