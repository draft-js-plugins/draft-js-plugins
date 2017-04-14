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
  };

  constructor(props) {
    super(props);
    this.mouseDown = false;
  }

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onMouseUp = () => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onEmojiSelect(this.props.emoji);
    }
  };

  onMouseDown = () => {
    this.mouseDown = true;
    if (this.props.onToneSelectOpen) {
      this.props.onToneSelectOpen();
    }
  };

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
