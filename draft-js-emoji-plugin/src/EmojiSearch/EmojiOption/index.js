import React, {
  // PropTypes,
  Component,
} from 'react';
import emojioneList from '../../utils/emojioneList';
import convertShortNameToUnicode from '../../utils/convertShortNameToUnicode';
import escapeMap from '../../utils/escapeMap';

export default class EmojiOption extends Component {

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
    const { theme } = this.props;
    const className = this.props.isFocused ? theme.get('autocompleteEntryFocused') : theme.get('autocompleteEntry');
    const unicode = emojioneList[this.props.emoji][0].toUpperCase();
    const emoji = convertShortNameToUnicode(unicode);
    const unicodeForImage = escapeMap[emoji];
    const imagePathSVG = '//cdn.jsdelivr.net/emojione/assets/svg/';
    const cacheBustParam = '?v=2.1.2';
    const imagePath = `${imagePathSVG}${unicodeForImage}.svg${cacheBustParam}`;
    return (
      <div
        className={ className }
        onMouseDown={ this.onMouseDown }
        onMouseUp={ this.onMouseUp }
        onMouseEnter={ this.onMouseEnter }
        role="option"
      >
        <img
          src={imagePath}
          className={ theme.get('autocompleteEntryIcon') }
          role="presentation"
        />
        <span className={ theme.get('autocompleteEntryText') }>
          { this.props.emoji }
        </span>
      </div>
    );
  }
}
