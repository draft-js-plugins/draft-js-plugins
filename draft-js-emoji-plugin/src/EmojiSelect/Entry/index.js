import React, { Component } from 'react';
import emojione from 'emojione';

export default class Entry extends Component {

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
  };

  render() {
    const { theme = {}, imagePath, imageType, cacheBustParam } = this.props;
    // short name to image url code steal from emojione source code
    const shortNameForImage = emojione.emojioneList[this.props.emoji].unicode[emojione.emojioneList[this.props.emoji].unicode.length - 1];
    const fullImagePath = `${imagePath}${shortNameForImage}.${imageType}${cacheBustParam}`;

    return (
      <button
        className={theme.emojiSelectGroupEntry}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        title={this.props.emoji}
        role="option"
      >
        <img
          src={fullImagePath}
          className={theme.emojiSelectGroupEntryIcon}
          role="presentation"
        />
      </button>
    );
  }
}
