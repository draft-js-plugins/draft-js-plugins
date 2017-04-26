import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';

export default class Entry extends Component {
  static propTypes = {
    emoji: PropTypes.string,
    theme: PropTypes.shape({
      entry: PropTypes.string,
      entryIcon: PropTypes.string,
    }),
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    cacheBustParam: PropTypes.string,
    toneSet: PropTypes.arrayOf(PropTypes.string),
    mouseDown: PropTypes.bool,
    onEmojiSelect: PropTypes.func,
    onToneSelectOpen: PropTypes.func,
  };

  static defaultProps = {
    mouseDown: false,
  };

  constructor(props) {
    super(props);
    this.mouseDown = props.mouseDown;
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

    if (this.props.toneSet) {
      this.props.onToneSelectOpen(
        this.props.toneSet,
        this.element.getBoundingClientRect(),
      );
    }
  };

  render() {
    const { emoji, theme = {}, imagePath, imageType, cacheBustParam } = this.props;
    // short name to image url code steal from emojione source code
    const shortNameForImage = emojione.emojioneList[emoji].unicode[emojione.emojioneList[emoji].unicode.length - 1];
    const fullImagePath = `${imagePath}${shortNameForImage}.${imageType}${cacheBustParam}`;

    return (
      <button
        className={theme.entry}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        title={emoji}
        ref={(element) => { this.element = element; }}
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
