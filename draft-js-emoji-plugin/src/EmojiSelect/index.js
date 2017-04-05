import React, { Component, PropTypes } from 'react';
import strategy from 'emojione/emoji.json';
import shortid from 'shortid';

import createEmojisFromStrategy from '../utils/createEmojisFromStrategy';
import defaultEmojiGroups from '../utils/defaultEmojiGroups';
import Group from './Group';
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

    console.log(this.props.groups);

    const {
      theme = {},
      groups = [],
      imagePath,
      imageType,
      cacheBustParam,
      ...restProps,
    } = this.props;

    console.log(restProps);

    return (
      <div className={theme.emojiSelect}>
        <div className={theme.emojiSelectGroups}>
          {groups.map((group) => (
            <Group
              key={shortid.generate()}
              theme={theme}
              group={group}
              emojis={this.emojis}
              imagePath={imagePath}
              imageType={imageType}
              cacheBustParam={cacheBustParam}
            />
          ))}
        </div>
        <Nav theme={theme} groups={this.props.groups} />
      </div>
    );
  }
}
