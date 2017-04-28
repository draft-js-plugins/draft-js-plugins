import React, { Component } from 'react';
import Entry from '../../Entry';

export default class Group extends Component {
  shouldComponentUpdate = () => false;

  renderCategory = (category) => {
    const {
      theme = {},
      emojis,
      imagePath,
      imageType,
      cacheBustParam,
      checkMouseDown,
      onEmojiSelect,
      onEmojiMouseDown,
    } = this.props;

    const categoryEmojis = emojis[category];

    return Object.keys(categoryEmojis).map((key) => (
      <li key={categoryEmojis[key][0]} className={theme.emojiSelectGroupItem}>
        <Entry
          emoji={categoryEmojis[key][0]}
          theme={{
            entry: theme.emojiSelectGroupEntry,
            entryFocused: theme.emojiSelectGroupEntryFocused,
            entryIcon: theme.emojiSelectGroupEntryIcon,
          }}
          imagePath={imagePath}
          imageType={imageType}
          cacheBustParam={cacheBustParam}
          toneSet={categoryEmojis[key].length > 1 ? categoryEmojis[key] : null}
          checkMouseDown={checkMouseDown}
          onEmojiSelect={onEmojiSelect}
          onEmojiMouseDown={onEmojiMouseDown}
        />
      </li>
    ));
  };

  render() {
    const {
      theme = {},
      group,
    } = this.props;

    console.log('render group', group.title);

    return (
      <section
        className={theme.emojiSelectGroup}
        ref={(element) => { this.container = element; }}
      >
        <h3 className={theme.emojiSelectGroupTitle}>{group.title}</h3>
        <ul
          className={theme.emojiSelectGroupList}
          ref={(element) => { this.list = element; }}
        >
          {group.categories.map((category) => this.renderCategory(category))}
        </ul>
      </section>
    );
  }
}
