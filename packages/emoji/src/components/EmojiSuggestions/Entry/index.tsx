import { shortnameToUnicode } from 'emoji-toolkit';
import { EmojiImageProps } from 'packages/emoji/src';
import React, {
  // PropTypes,
  Component,
  ComponentType,
  MouseEvent,
  ReactElement,
} from 'react';
import { EmojiPluginTheme } from '../../../theme';

interface EntryProps {
  emoji: string;
  onEmojiSelect(emoji: string): void;
  index: number;
  onEmojiFocus(index: number): void;
  theme: EmojiPluginTheme;
  isFocused: boolean;
  id: string;
  emojiImage: ComponentType<EmojiImageProps>;
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
    const {
      emoji,
      theme = {},
      isFocused,
      id,
      emojiImage: EmojiImage,
    } = this.props;
    const className = isFocused
      ? theme.emojiSuggestionsEntryFocused
      : theme.emojiSuggestionsEntry;

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
        <EmojiImage
          emoji={emoji}
          theme={theme}
          unicode={shortnameToUnicode(emoji)}
        />
        <span className={theme.emojiSuggestionsEntryText}>
          {this.props.emoji}
        </span>
      </div>
    );
  }
}
