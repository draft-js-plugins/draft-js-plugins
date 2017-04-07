import React, { Component, PropTypes } from 'react';
import strategy from 'emojione/emoji.json';
import shortid from 'shortid';
import addEmoji from '../modifiers/addEmoji';
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

  shouldComponentUpdate() {
    return false;
  }

  onEmojiSelect = (emoji) => {
    const newEditorState = addEmoji(
      this.props.store.getEditorState(),
      emoji,
    );
    this.props.store.setEditorState(newEditorState);
  };

  emojis = createEmojisFromStrategy(strategy);

  render() {
    const {
      theme = {},
      groups = [],
      imagePath,
      imageType,
      cacheBustParam,
      ...restProps,
    } = this.props;

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
              onEmojiSelect={this.onEmojiSelect}
            />
          ))}
        </div>
        <Nav theme={theme} groups={this.props.groups} />
      </div>
    );
  }
}
