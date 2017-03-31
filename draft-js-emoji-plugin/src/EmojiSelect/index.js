import React, { Component } from 'react';
import strategy from 'emojione/emoji.json';

import createEmojisFromStrategy from '../utils/createEmojisFromStrategy';
import Category from './Category';

export default class EmojiSelect extends Component {

  state = {
    emojis: createEmojisFromStrategy(strategy),
  };

  render() {
    console.log(this.state.emojis);
    const emojiCategories = Object.keys(this.state.emojis);

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
