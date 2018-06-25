import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Entry from '../../Entry';

export default class Group extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    group: PropTypes.object.isRequired,
    emojis: PropTypes.object.isRequired,
    checkMouseDown: PropTypes.func.isRequired,
    onEmojiSelect: PropTypes.func.isRequired,
    onEmojiMouseDown: PropTypes.func.isRequired,
    useNativeArt: PropTypes.bool,
  };

  shouldComponentUpdate = () => false;

  renderCategory = (category) => {
    const {
      theme = {},
      emojis,
      checkMouseDown,
      onEmojiSelect,
      onEmojiMouseDown,
      useNativeArt,
    } = this.props;

    const categoryEmojis = emojis[category];

    return Object.keys(categoryEmojis).map((key) => (
      <li
        key={categoryEmojis[key][0]}
        className={theme.emojiSelectPopoverGroupItem}
      >
        <Entry
          emoji={categoryEmojis[key][0]}
          theme={theme}
          toneSet={categoryEmojis[key].length > 1 ? categoryEmojis[key] : null}
          checkMouseDown={checkMouseDown}
          onEmojiSelect={onEmojiSelect}
          onEmojiMouseDown={onEmojiMouseDown}
          useNativeArt={useNativeArt}
        />
      </li>
    ));
  };

  render() {
    const {
      theme = {},
      group,
    } = this.props;

    return (
      <section
        className={theme.emojiSelectPopoverGroup}
        ref={(element) => { this.container = element; }}
      >
        <h3 className={theme.emojiSelectPopoverGroupTitle}>{group.title}</h3>
        <ul
          className={theme.emojiSelectPopoverGroupList}
          ref={(element) => { this.list = element; }}
        >
          {group.categories.map((category) => this.renderCategory(category))}
        </ul>
      </section>
    );
  }
}
