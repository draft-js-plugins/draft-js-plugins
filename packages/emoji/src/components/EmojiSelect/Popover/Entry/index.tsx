import PropTypes from 'prop-types';
import React, {
  Component,
  ComponentType,
  KeyboardEvent,
  ReactElement,
} from 'react';
import { EmojiImageProps, EmojiPluginTheme } from '../../../../index';
import shortnameToUnicode from '../../../../utils/shortnameToUnicode';

interface EntryProps {
  mouseDown?: boolean;
  theme: EmojiPluginTheme;
  emoji: string;
  checkMouseDown(): boolean;
  onEmojiSelect(emoji: string): void;
  // eslint-disable-next-line no-use-before-define
  onEmojiMouseDown?(entryComponent: Entry, toneSet: string[] | null): void;
  toneSet?: string[] | null;
  emojiImage: ComponentType<EmojiImageProps>;
}

export default class Entry extends Component<EntryProps> {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    emoji: PropTypes.string.isRequired,
    mouseDown: PropTypes.bool,
    checkMouseDown: PropTypes.func.isRequired,
    onEmojiSelect: PropTypes.func.isRequired,
    onEmojiMouseDown: PropTypes.func,
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

  onKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      this.props.onEmojiSelect(this.props.emoji);
    }
  };

  mouseDown = this.props.mouseDown;

  render(): ReactElement {
    const { theme = {}, emoji, emojiImage: EmojiImage } = this.props;
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
        onKeyDown={this.onKeyDown}
        ref={(element) => {
          this.button = element;
        }}
      >
        <EmojiImage
          emoji={emoji}
          theme={theme}
          unicode={shortnameToUnicode(emoji)}
        />
      </button>
    );
  }
}
