import React, { Component } from 'react';
import toStyle from 'to-style';
import shortid from 'shortid';
import Entry from '../Entry';

export default class ToneSelect extends Component {
  componentDidMount() {
    const { areaBounds, entryBounds } = this.props.bounds;

    this.setCorrectPosition(areaBounds, entryBounds);
  }

  setCorrectPosition = (areaBounds, entryBounds) => {
    const width = this.select.offsetWidth;
    const height = this.select.offsetHeight;

    let style = {
      marginLeft: 0,
      left: entryBounds.left + entryBounds.width / 2 - width / 2, // eslint-disable-line no-mixed-operators
      bottom: entryBounds.bottom + entryBounds.height,
    };

    if (style.left < areaBounds.left) {
      delete style.marginLeft;
      style.left = areaBounds.left;
    } else if (style.left > areaBounds.left + areaBounds.width - width) { // eslint-disable-line no-mixed-operators
      delete style.marginLeft;
      delete style.left;
      style.right = areaBounds.right;
    }

    if (style.bottom > areaBounds.bottom + areaBounds.height - height) { // eslint-disable-line no-mixed-operators
      delete style.bottom;
      style.top = entryBounds.top + entryBounds.height;
    }

    style = toStyle.object(style);

    Object.keys(style).forEach((property) => {
      this.select.style[property] = style[property];
    });
  }

  render() {
    const {
      theme = {},
      toneSet = [],
      cacheBustParam,
      imagePath,
      imageType,
      onEmojiSelect,
    } = this.props;

    return (
      <ul
        className={theme.emojiSelectTone}
        ref={(element) => { this.select = element; }}
      >
        {toneSet.map((emoji) => (
          <li key={shortid.generate()} className={theme.emojiSelectToneItem}>
            <Entry
              emoji={emoji}
              theme={{
                entry: theme.emojiSelectToneEntry,
                entryIcon: theme.emojiSelectToneEntryIcon,
              }}
              imagePath={imagePath}
              imageType={imageType}
              cacheBustParam={cacheBustParam}
              onEmojiSelect={onEmojiSelect}
              forceMouseDown
            />
          </li>
        ))}
      </ul>
    );
  }
}
