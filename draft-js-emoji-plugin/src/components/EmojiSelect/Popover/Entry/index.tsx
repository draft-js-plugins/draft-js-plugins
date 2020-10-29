import React, { Component, ReactElement } from 'react';
import PropTypes from 'prop-types';
import emojione from 'emojione';
import emojiList from '../../../../utils/emojiList';
import convertShortNameToUnicode from '../../../../utils/convertShortNameToUnicode';
import { EmojiPluginTheme } from '../../../../index';

interface EntryProps {
  isFocused?: boolean;
  mouseDown?: boolean;
  theme: EmojiPluginTheme;
  cacheBustParam: string;
  imagePath: string;
  imageType: string;
  emoji: string;
  checkMouseDown(): boolean;
  onEmojiSelect(emoji: string): void;
  // eslint-disable-next-line no-use-before-define
  onEmojiMouseDown?(entryComponent: Entry, toneSet: string[] | null): void;
  useNativeArt?: boolean;
  toneSet?: string[] | null;
}

export default class Entry extends Component<EntryProps> {
  static propTypes = {
    cacheBustParam: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    emoji: PropTypes.string.isRequired,
    mouseDown: PropTypes.bool,
    checkMouseDown: PropTypes.func.isRequired,
    onEmojiSelect: PropTypes.func.isRequired,
    onEmojiMouseDown: PropTypes.func,
    useNativeArt: PropTypes.bool,
  };

  static defaultProps = {
    mouseDown: false,
  };

  state = {
    isFocused: false,
  };

  button?: HTMLButtonElement | null;

  onMouseUp = (): void => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onEmojiSelect(this.props.emoji);
    }
  };

  onMouseDown = (): void => {
    this.mouseDown = true;
    if (this.props.onEmojiMouseDown) {
      this.props.onEmojiMouseDown(this, this.props.toneSet || null);
    }
  };

  onMouseEnter = (): void => {
    if (!this.props.checkMouseDown()) {
      this.setState({ isFocused: true });
    }
  };

  onMouseLeave = (): void => {
    if (!this.props.checkMouseDown()) {
      this.setState({ isFocused: false });
    }
  };

  deselect = (): void => {
    this.setState({ isFocused: false });
  };

  mouseDown = this.props.mouseDown;

  render(): ReactElement {
    const {
      cacheBustParam,
      imagePath,
      imageType,
      theme = {},
      emoji,
      useNativeArt,
    } = this.props;
    const { isFocused } = this.state;

    let emojiDisplay = null;
    if (useNativeArt === true) {
      const unicode = emojiList.list[emoji][0];
      emojiDisplay = convertShortNameToUnicode(unicode);
    } else {
      // short name to image url code steal from emojione source code
      const shortNameForImage =
        emojione.emojioneList[emoji].unicode[
          emojione.emojioneList[emoji].unicode.length - 1
        ];
      const fullImagePath = `${imagePath}${shortNameForImage}.${imageType}${cacheBustParam}`;
      emojiDisplay = (
        <img
          src={fullImagePath}
          className={theme.emojiSelectPopoverEntryIcon}
          draggable={false}
          role="presentation"
        />
      );
    }

    return (
      <button
        type="button"
        className={
          isFocused
            ? theme.emojiSelectPopoverEntryFocused
            : theme.emojiSelectPopoverEntry
        }
        onMouseDown={this.onMouseDown}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onMouseUp={this.onMouseUp}
        ref={element => {
          this.button = element;
        }}
      >
        {emojiDisplay}
      </button>
    );
  }
}
