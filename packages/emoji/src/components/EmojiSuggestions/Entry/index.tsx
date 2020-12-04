import React, {
  // PropTypes,
  Component,
  MouseEvent,
  ReactElement,
} from 'react';
import { EmojiPluginTheme } from '../../../theme';
import JoyPixelEmojiImage from '../../Emoji/JoyPixelEmojiImage';
import NativeEmojiImage from '../../Emoji/NativeEmojiImage';

interface EntryProps {
  emoji: string;
  onEmojiSelect(emoji: string): void;
  index: number;
  onEmojiFocus(index: number): void;
  theme: EmojiPluginTheme;
  useNativeArt?: boolean;
  isFocused: boolean;
  id: string;
}

export default class Entry extends Component<EntryProps> {
  mouseDown = false;

  componentDidUpdate(): void {
    this.mouseDown = false;
  }

  onMouseUp = (): void => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onEmojiSelect(this.props.emoji);
    }
  };

  onMouseDown = (event: MouseEvent): void => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = (): void => {
    this.props.onEmojiFocus(this.props.index);
  };

  render(): ReactElement {
    const { emoji, theme = {}, useNativeArt, isFocused, id } = this.props;
    const className = isFocused
      ? theme.emojiSuggestionsEntryFocused
      : theme.emojiSuggestionsEntry;

    let emojiDisplay = null;
    if (useNativeArt === true) {
      emojiDisplay = <NativeEmojiImage emoji={emoji} theme={theme} />;
    } else {
      emojiDisplay = <JoyPixelEmojiImage emoji={emoji} theme={theme} />;
    }

    return (
      <div
        className={className}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        role="option"
        id={id}
        aria-selected={isFocused ? 'true' : undefined}
      >
        {emojiDisplay}
        <span className={theme.emojiSuggestionsEntryText}>
          {this.props.emoji}
        </span>
      </div>
    );
  }
}
