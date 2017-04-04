import React, { Component, PropTypes } from 'react';
import strategy from 'emojione/emoji.json';

import defaultEmojiGroups from '../utils/defaultEmojiGroups';
import createEmojisFromStrategy from '../utils/createEmojisFromStrategy';
import Category from './Category';
import Nav from './Nav';

export default class EmojiSelect extends Component {

  static propTypes = {
    groups: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      emojis: PropTypes.array,
      categories: PropTypes.arrayOf(PropTypes.string),
    })),
  };

  static defaultProps = {
    groups: defaultEmojiGroups,
  };

  emojis = createEmojisFromStrategy(strategy);

  render() {
    console.log(this.emojis);
    const emojiCategories = Object.keys(this.emojis);

    console.log(this.props.groups);

    return (
      <div>
        {emojiCategories.map((category) => (
          <Category
            category={{
              label: category,
            }}
            emojis={this.emojis[category]}
          />
        ))}
        <Nav groups={this.props.groups} />
      </div>
    );
  }
}
