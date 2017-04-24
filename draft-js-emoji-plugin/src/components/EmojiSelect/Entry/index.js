import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';

export default class Entry extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      entry: PropTypes.string,
      entryIcon: PropTypes.string,
    }),
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    cacheBustParam: PropTypes.string,
    toneSelectOpenDelay: PropTypes.number,
    forceMouseDown: PropTypes.bool,
    onEmojiSelect: PropTypes.func,
    onToneSelectOpen: PropTypes.func,
  };

  static defaultProps = {
    forceMouseDown: false,
  };

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onMouseUp = () => {
    if (this.mouseDown) {
      if (this.toneSelectTimer) {
        clearTimeout(this.toneSelectTimer);
        this.toneSelectTimer = null;
      }

      this.mouseDown = false;
      this.props.onEmojiSelect(this.props.emoji);
    }
  };

  onMouseDown = () => {
    this.mouseDown = true;
    if (this.props.onToneSelectOpen) {
      this.toneSelectTimer = setTimeout(() => {
        this.mouseDown = false;
        this.props.onToneSelectOpen();
      }, this.props.toneSelectOpenDelay);
    }
  };

  mouseDown = this.props.forceMouseDown;
  toneSelectTimer = null;

  render() {
    const { theme = {}, imagePath, imageType, cacheBustParam } = this.props;
    // short name to image url code steal from emojione source code
    const shortNameForImage = emojione.emojioneList[this.props.emoji].unicode[emojione.emojioneList[this.props.emoji].unicode.length - 1];
    const fullImagePath = `${imagePath}${shortNameForImage}.${imageType}${cacheBustParam}`;

    return (
      <button
        className={theme.entry}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        title={this.props.emoji}
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
