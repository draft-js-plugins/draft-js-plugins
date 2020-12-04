import React, { Component, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { EmojiPluginTheme } from '../../../../index';
import NativeEmojiImage from '../../../Emoji/NativeEmojiImage';
import JoyPixelEmojiImage from '../../../Emoji/JoyPixelEmojiImage';

interface EntryProps {
  isFocused?: boolean;
  mouseDown?: boolean;
  theme: EmojiPluginTheme;
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
    const { theme = {}, emoji, useNativeArt } = this.props;
    const { isFocused } = this.state;

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
        {useNativeArt && <NativeEmojiImage emoji={emoji} theme={theme} />}
        {!useNativeArt && <JoyPixelEmojiImage emoji={emoji} theme={theme} />}
      </button>
    );
  }
}
