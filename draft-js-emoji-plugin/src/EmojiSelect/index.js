import React, { Component, PropTypes } from 'react';
import strategy from 'emojione/emoji.json';
import addEmoji from '../modifiers/addEmoji';
import createEmojisFromStrategy from '../utils/createEmojisFromStrategy';
import defaultEmojiGroups from '../utils/defaultEmojiGroups';
import Groups from './Groups';
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

  state = {
    activeGroup: 0,
  };

  onEmojiSelect = (emoji) => {
    const newEditorState = addEmoji(
      this.props.store.getEditorState(),
      emoji,
    );
    this.props.store.setEditorState(newEditorState);
  };

  onGroupSelect = (groupIndex) => {
    this.groups.scrollToGroup(groupIndex);
  };

  onGroupScroll = (groupIndex) => {
    this.setState({
      activeGroup: groupIndex,
    });
  }

  emojis = createEmojisFromStrategy(strategy);

  render() {
    const {
      theme = {},
      groups = [],
      imagePath,
      imageType,
      cacheBustParam,
    } = this.props;

    console.log('render emojiSelect');

    return (
      <div className={theme.emojiSelect}>
        <h3 className={theme.emojiSelectTitle}>
          {groups[this.state.activeGroup].title}
        </h3>
        <Groups
          theme={theme}
          groups={groups}
          emojis={this.emojis}
          imagePath={imagePath}
          imageType={imageType}
          cacheBustParam={cacheBustParam}
          onEmojiSelect={this.onEmojiSelect}
          onGroupScroll={this.onGroupScroll}
          ref={(element) => { this.groups = element; }}
        />
        <Nav
          theme={theme}
          groups={this.props.groups}
          activeGroup={this.state.activeGroup}
          onGroupSelect={this.onGroupSelect}
        />
      </div>
    );
  }
}
