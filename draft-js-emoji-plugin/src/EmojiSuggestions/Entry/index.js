import React, {
  // PropTypes,
  Component,
} from 'react';
import emojioneList from '../../utils/emojioneList';
import convertShortNameToUnicode from '../../utils/convertShortNameToUnicode';
import escapeMap from '../../utils/escapeMap';

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

  onMouseDown = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = () => {
    this.props.onEmojiFocus(this.props.index);
  };

  render() {
    const { theme = {}, imagePath, cacheBustParam } = this.props;
    const className = this.props.isFocused ? theme.emojiSuggestionsEntryFocused : theme.emojiSuggestionsEntry;
    const unicode = emojioneList[this.props.emoji][0].toUpperCase();
    const emoji = convertShortNameToUnicode(unicode);
    const unicodeForImage = escapeMap[emoji];
    const fullImagePath = `${imagePath}${unicodeForImage}.svg${cacheBustParam}`;
    return (
      <div
        className={className}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        role="option"
      >
        <img
          src={fullImagePath}
          className={theme.emojiSuggestionsEntryIcon}
          role="presentation"
        />
        <span className={theme.emojiSuggestionsEntryText}>
          {this.props.emoji}
        </span>
      </div>
    );
  }
}
