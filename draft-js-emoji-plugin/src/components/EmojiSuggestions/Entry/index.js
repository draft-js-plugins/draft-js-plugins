import React, {
  // PropTypes,
  Component,
} from 'react';
import { Emoji } from '@tunoltd/emoji-mart';

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

  onMouseDown = event => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = () => {
    this.props.onEmojiFocus(this.props.index);
  };

  render() {
    const { theme = {}, useNativeArt, isFocused, id, emojiSet } = this.props;
    const className = isFocused
      ? theme.emojiSuggestionsEntryFocused
      : theme.emojiSuggestionsEntry;

    let emojiDisplay = null;
    if (useNativeArt === true) {
      emojiDisplay = this.props.emoji.native;
    } else {
      emojiDisplay = (
        <Emoji
          set={emojiSet}
          skin={this.props.emoji.skin || 1}
          emoji={this.props.emoji}
          size={18}
          tooltip
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
        aria-selected={isFocused ? 'true' : null}
      >
        {emojiDisplay}
        <span className={theme.emojiSuggestionsEntryText}>
          {this.props.emoji.colons}
        </span>
      </div>
    );
  }
}
