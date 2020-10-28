import React, {
  // PropTypes,
  Component,
  MouseEvent,
  ReactElement,
} from 'react';
import emojione from 'emojione';
import emojiList from '../../../utils/emojiList';
import convertShortNameToUnicode from '../../../utils/convertShortNameToUnicode';
import { EmojiPluginTheme } from '../../../theme';

interface EntryProps {
  emoji: string;
  onEmojiSelect(emoji: string): void;
  index: number;
  onEmojiFocus(index: number): void;
  theme: EmojiPluginTheme;
  imagePath: string;
  imageType: string;
  cacheBustParam: string;
  useNativeArt?: boolean;
  isFocused: boolean;
  id: string;
}

export default class Entry extends Component<EntryProps> {
  mouseDown: boolean = false;

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
      theme = {},
      imagePath,
      imageType,
      cacheBustParam,
      useNativeArt,
      isFocused,
      id,
    } = this.props;
    const className = isFocused
      ? theme.emojiSuggestionsEntryFocused
      : theme.emojiSuggestionsEntry;

    let emojiDisplay = null;
    if (useNativeArt === true) {
      const unicode = emojiList.list[this.props.emoji][0];
      emojiDisplay = convertShortNameToUnicode(unicode);
    } else {
      // short name to image url code steal from emojione source code
      const shortNameForImage =
        emojione.emojioneList[this.props.emoji].unicode[
          emojione.emojioneList[this.props.emoji].unicode.length - 1
        ];
      const fullImagePath = `${imagePath}${shortNameForImage}.${imageType}${cacheBustParam}`;
      emojiDisplay = (
        <img
          src={fullImagePath}
          className={theme.emojiSuggestionsEntryIcon}
          role="presentation"
        />
      );
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
