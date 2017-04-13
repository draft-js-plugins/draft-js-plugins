import React, { Component } from 'react';
import Entry from './Entry';

export default class Group extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      theme = {},
      group,
      emojis,
      cacheBustParam,
      imagePath,
      imageType,
      onEmojiSelect,
    } = this.props;

    function renderEmoji(emoji) {
      if (emoji) {
        return (
          <Entry
            emoji={emoji}
            theme={theme}
            imagePath={imagePath}
            imageType={imageType}
            cacheBustParam={cacheBustParam}
            onEmojiSelect={onEmojiSelect}
          />
        );
      }
      return null;
    }

    function renderEmojis(groupEmojis) {
      if (groupEmojis && groupEmojis.length) {
        return groupEmojis.map((emoji) => (
          <li key={emoji} className={theme.emojiSelectGroupItem}>
            {renderEmoji(emoji)}
          </li>
        ));
      }
      return null;
    }

    function renderCategory(category) {
      if (category) {
        return Object.keys(category).map((key) => (
          <li key={category[key][0]} className={theme.emojiSelectGroupItem}>
            {renderEmoji(category[key][0])}
          </li>
        ));
      }
      return null;
    }

    function renderCategories(categories) {
      if (categories && categories.length) {
        return categories.map((category) => renderCategory(emojis[category]));
      }
      return null;
    }

    console.log('render group', group.title);

    return (
      <section
        className={theme.emojiSelectGroup}
      >
        <h3 className={theme.emojiSelectGroupTitle}>{group.title}</h3>
        <ul
          className={theme.emojiSelectGroupList}
          ref={(node) => { this.list = node; }}
        >
          {renderEmojis(group.emojis)}
          {renderCategories(group.categories)}
        </ul>
      </section>
    );
  }
}
