import React, { Component } from 'react';
import Entry from '../../Entry';

export default class Group extends Component {
  shouldComponentUpdate = () => false;

  render() {
    const {
      theme = {},
      group,
      emojis,
      imagePath,
      imageType,
      cacheBustParam,
      toneSelectOpenDelay,
      onEmojiSelect,
      onToneSelectOpen,
    } = this.props;

    const renderCategory = (category) => Object.keys(category).map((key) => (
      <li key={category[key][0]} className={theme.emojiSelectGroupItem}>
        <Entry
          emoji={category[key][0]}
          theme={{
            entry: theme.emojiSelectGroupEntry,
            entryIcon: theme.emojiSelectGroupEntryIcon,
          }}
          imagePath={imagePath}
          imageType={imageType}
          cacheBustParam={cacheBustParam}
          toneSelectOpenDelay={toneSelectOpenDelay}
          onEmojiSelect={onEmojiSelect}
          onToneSelectOpen={category[key].length > 1 ?
            () => onToneSelectOpen(category[key]) : null}
        />
      </li>
    ));

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
          {group.categories.map((category) => renderCategory(emojis[category]))}
        </ul>
      </section>
    );
  }
}
