import React, { Component, CSSProperties } from 'react';
import PropTypes from 'prop-types';
import toStyle from 'to-style';
import Entry from '../Entry';
import { EmojiPluginTheme } from '../../../../index';

interface Boundaries {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
}

interface ToneSelectParams {
  cacheBustParam: string;
  imagePath: string;
  imageType: string;
  theme: EmojiPluginTheme;
  bounds: { areaBounds: Boundaries; entryBounds: Boundaries };
  onEmojiSelect(emoji: string): void;
  toneSet: string[] | null;
}

export default class ToneSelect extends Component<ToneSelectParams> {
  static propTypes = {
    cacheBustParam: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    bounds: PropTypes.shape({
      areaBounds: PropTypes.shape({
        left: PropTypes.number.isRequired,
        right: PropTypes.number.isRequired,
        top: PropTypes.number.isRequired,
        bottom: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
      entryBounds: PropTypes.shape({
        left: PropTypes.number.isRequired,
        right: PropTypes.number.isRequired,
        top: PropTypes.number.isRequired,
        bottom: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    onEmojiSelect: PropTypes.func.isRequired,
  };
  tones?: HTMLUListElement | null;

  componentDidMount(): void {
    const { areaBounds, entryBounds } = this.props.bounds;

    this.setCorrectPosition(areaBounds, entryBounds);
  }

  setCorrectPosition = (areaBounds: ClientRect, entryBounds: ClientRect) => {
    const width = this.tones!.offsetWidth;
    const height = this.tones!.offsetHeight;

    let style: {
      marginLeft?: number;
      left?: number;
      right?: number;
      bottom?: number;
      top?: number;
    } = {
      marginLeft: 0,
      left: entryBounds.left + entryBounds.width / 2 - width / 2, // eslint-disable-line no-mixed-operators
      bottom: entryBounds.bottom + entryBounds.height,
    };

    if (style.left! < areaBounds.left) {
      delete style.marginLeft;
      style.left = areaBounds.left;
    } else if (style.left! > areaBounds.left + areaBounds.width - width) {
      // eslint-disable-line no-mixed-operators
      delete style.marginLeft;
      delete style.left;
      style.right = areaBounds.right;
    }

    if (style.bottom! > areaBounds.bottom + areaBounds.height - height) {
      delete style.bottom;
      style.top = entryBounds.top + entryBounds.height;
    }
    style = toStyle.object(style);

    for (const [key, value] of Object.entries(style)) {
      (this.tones!.style as { [x: string]: any })[key] = value;
    }
  };

  render() {
    const {
      cacheBustParam,
      imagePath,
      imageType,
      theme = {},
      toneSet = [],
      onEmojiSelect,
    } = this.props;

    return (
      <div className={theme.emojiSelectPopoverToneSelect}>
        <ul
          className={theme.emojiSelectPopoverToneSelectList}
          ref={element => {
            this.tones = element;
          }}
        >
          {(toneSet || []).map(emoji => (
            <li
              key={`tone-select(${emoji})`}
              className={theme.emojiSelectPopoverToneSelectItem}
            >
              <Entry
                emoji={emoji}
                theme={theme}
                imagePath={imagePath}
                imageType={imageType}
                cacheBustParam={cacheBustParam}
                checkMouseDown={() => false}
                onEmojiSelect={onEmojiSelect}
                mouseDown
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
