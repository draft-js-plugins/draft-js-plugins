import React, { Component, ReactElement } from 'react';
import PropTypes from 'prop-types';
import Entry from '../../Entry';
import { EmojiPluginTheme, EmojiSelectGroup } from '../../../../../index';
import { EmojiStrategy } from '../../../../../utils/createEmojisFromStrategy';

interface GroupProps {
  hasRenderedEmoji?: boolean;
  cacheBustParam: string;
  imagePath: string;
  imageType: string;
  theme: EmojiPluginTheme;
  group: EmojiSelectGroup;
  emojis: EmojiStrategy;
  checkMouseDown(): boolean;
  onEmojiSelect(emoji: string): void;
  onEmojiMouseDown(entryComponent: Entry, toneSet: string[] | null): void;
  useNativeArt?: boolean;
  isActive?: boolean;
}

export default class Group extends Component<GroupProps> {
  static propTypes = {
    cacheBustParam: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    group: PropTypes.object.isRequired,
    emojis: PropTypes.object.isRequired,
    checkMouseDown: PropTypes.func.isRequired,
    onEmojiSelect: PropTypes.func.isRequired,
    onEmojiMouseDown: PropTypes.func.isRequired,
    useNativeArt: PropTypes.bool,
    isActive: PropTypes.bool,
  };

  state = {
    hasRenderedEmoji: false,
  };

  container?: HTMLElement | null;
  list?: HTMLUListElement | null;

  shouldComponentUpdate = (nextProps: GroupProps): boolean => {
    if (this.state.hasRenderedEmoji) {
      return false;
    }

    return nextProps.isActive!;
  };

  componentDidUpdate(): void {
    if (this.props.isActive) {
      this.setState({ hasRenderedEmoji: true }); // eslint-disable-line
    }
  }

  renderCategory = (category: string): ReactElement[] => {
    const {
      cacheBustParam,
      imagePath,
      imageType,
      theme = {},
      emojis,
      checkMouseDown,
      onEmojiSelect,
      onEmojiMouseDown,
      useNativeArt,
      isActive,
    } = this.props;

    const categoryEmojis = emojis[category];

    return Object.keys(categoryEmojis).map((key) => (
      <li
        key={categoryEmojis[key][0]}
        className={theme.emojiSelectPopoverGroupItem}
      >
        {isActive && (
          <Entry
            emoji={categoryEmojis[key][0]}
            theme={theme}
            imagePath={imagePath}
            imageType={imageType}
            cacheBustParam={cacheBustParam}
            toneSet={
              categoryEmojis[key].length > 1 ? categoryEmojis[key] : null
            }
            checkMouseDown={checkMouseDown}
            onEmojiSelect={onEmojiSelect}
            onEmojiMouseDown={onEmojiMouseDown}
            useNativeArt={useNativeArt}
          />
        )}
      </li>
    ));
  };

  render(): ReactElement {
    const { theme = {}, group } = this.props;

    return (
      <section
        className={theme.emojiSelectPopoverGroup}
        ref={(element) => {
          this.container = element;
        }}
      >
        <h3 className={theme.emojiSelectPopoverGroupTitle}>{group.title}</h3>
        <ul
          className={theme.emojiSelectPopoverGroupList}
          ref={(element) => {
            this.list = element;
          }}
        >
          {group.categories.map((category) => this.renderCategory(category))}
        </ul>
      </section>
    );
  }
}
