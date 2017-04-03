import React, { Component, PropTypes } from 'react';
import strategy from 'emojione/emoji.json';

import emojiDefaultGroups from '../utils/emojiDefaultGroups';
import createEmojisFromStrategy from '../utils/createEmojisFromStrategy';
import Category from './Category';

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
    groups: emojiDefaultGroups,
  };

  state = {
    emojis: createEmojisFromStrategy(strategy),
  };

  render() {
    console.log(this.state.emojis);
    const emojiCategories = Object.keys(this.state.emojis);

    console.log(this.props.groups);

    return (
      <div>
        {emojiCategories.map((category) => (
          <Category
            category={{
              label: category,
            }}
            emojis={this.state.emojis[category]}
          />
        ))}
      </div>
    );
  }
}
