import PropTypes from 'prop-types';
import React, { Component, ComponentType, ReactElement } from 'react';
import {
  EmojiImageProps,
  EmojiPluginTheme,
  EmojiSelectGroup,
} from '../../../../../index';
import { EmojiStrategy } from '../../../../../utils/createEmojisFromStrategy';
import Entry from '../../Entry';
import { EmojiShape, ToneSet } from '../../../../../constants/type';

interface GroupProps {
  theme: EmojiPluginTheme;
  group: EmojiSelectGroup;
  emojis: EmojiStrategy;
  checkMouseDown(): boolean;
  onEmojiSelect(emoji: EmojiShape): void;
  onEmojiMouseDown(entryComponent: Entry, toneSet: ToneSet): void;
  emojiImage: ComponentType<EmojiImageProps>;
  isActive?: boolean;
}

export default class Group extends Component<GroupProps> {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    group: PropTypes.object.isRequired,
    emojis: PropTypes.object.isRequired,
    checkMouseDown: PropTypes.func.isRequired,
    onEmojiSelect: PropTypes.func.isRequired,
    onEmojiMouseDown: PropTypes.func.isRequired,
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
      theme = {},
      emojis,
      checkMouseDown,
      onEmojiSelect,
      onEmojiMouseDown,
      emojiImage,
      isActive,
    } = this.props;

    const categoryEmojis = emojis[category];

    return Object.keys(categoryEmojis).map((key) => (
      <li
        key={categoryEmojis[key][0].shortname}
        className={theme.emojiSelectPopoverGroupItem}
      >
        {isActive && (
          <Entry
            emoji={categoryEmojis[key][0]}
            theme={theme}
            toneSet={
              categoryEmojis[key].length > 1 ? categoryEmojis[key] : null
            }
            checkMouseDown={checkMouseDown}
            onEmojiSelect={onEmojiSelect}
            onEmojiMouseDown={onEmojiMouseDown}
            emojiImage={emojiImage}
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
