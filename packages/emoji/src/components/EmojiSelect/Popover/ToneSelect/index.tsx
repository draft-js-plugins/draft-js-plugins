import React, { Component, ComponentType, ReactElement } from 'react';
import PropTypes from 'prop-types';
import toStyle from 'to-style';
import Entry from '../Entry';
import { EmojiImageProps, EmojiPluginTheme } from '../../../../index';
import { EmojiShape, ToneSet } from '../../../../constants/type';

interface Boundaries {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;
}

interface ToneSelectParams {
  theme: EmojiPluginTheme;
  bounds: { areaBounds: Boundaries; entryBounds: Boundaries };
  onEmojiSelect(emoji: EmojiShape): void;
  toneSet: ToneSet;
  emojiImage: ComponentType<EmojiImageProps>;
}

export default class ToneSelect extends Component<ToneSelectParams> {
  static propTypes = {
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

  setCorrectPosition = (
    areaBounds: Boundaries,
    entryBounds: Boundaries
  ): void => {
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this.tones!.style as { [x: string]: any })[key] = value;
    }
  };

  render(): ReactElement {
    const { theme = {}, toneSet = [], onEmojiSelect, emojiImage } = this.props;

    return (
      <div className={theme.emojiSelectPopoverToneSelect}>
        <ul
          className={theme.emojiSelectPopoverToneSelectList}
          ref={(element) => {
            this.tones = element;
          }}
        >
          {(toneSet || []).map((emoji) => (
            <li
              key={`tone-select(${emoji})`}
              className={theme.emojiSelectPopoverToneSelectItem}
            >
              <Entry
                emoji={emoji}
                theme={theme}
                checkMouseDown={() => false}
                onEmojiSelect={onEmojiSelect}
                mouseDown
                emojiImage={emojiImage}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
