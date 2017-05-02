import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollArea from 'react-scrollbar';
import Group from './Group';

export default class Groups extends Component {
  static propTypes = {
    cacheBustParam: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    groups: PropTypes.arrayOf(PropTypes.object).isRequired,
    emojis: PropTypes.object.isRequired,
    checkMouseDown: PropTypes.func.isRequired,
    onEmojiSelect: PropTypes.func.isRequired,
    onEmojiMouseDown: PropTypes.func.isRequired,
    onGroupScroll: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.calculateBounds();
  }

  componentDidUpdate() {
    this.calculateBounds();
  }

  onScroll = (value) => {
    const { topPosition } = value;

    if (typeof topPosition !== 'undefined') {
      const { groups, onGroupScroll } = this.props;
      let activeGroup = 0;
      groups.forEach((group, index) => {
        if (topPosition >= group.top) {
          activeGroup = index;
        }
      });
      onGroupScroll(activeGroup);
    }
  }

  scrollToGroup = (groupIndex) => {
    const { groups } = this.props;

    this.scroll.scrollYTo(groups[groupIndex].topList);
  }

  calculateBounds = () => {
    const { groups } = this.props;
    const scrollTop = this.scroll.content.getBoundingClientRect().top;

    groups.forEach((group) => {
      const containerTop = group.instance.container.getBoundingClientRect().top;
      const listTop = group.instance.list.getBoundingClientRect().top;
      group.top = containerTop - scrollTop; // eslint-disable-line no-param-reassign
      group.topList = listTop - scrollTop; // eslint-disable-line no-param-reassign
    });
  }

  render() {
    const {
      cacheBustParam,
      imagePath,
      imageType,
      theme = {},
      groups = [],
      emojis,
      checkMouseDown,
      onEmojiSelect,
      onEmojiMouseDown,
    } = this.props;

    const scrollbarStyle = {
      margin: 0,
      width: '.3em',
      borderRadius: '.15em',
    };

    return (
      <ScrollArea
        className={theme.emojiSelectPopoverGroups}
        verticalContainerStyle={{
          ...scrollbarStyle,
          background: '#e0e0e0',
        }}
        verticalScrollbarStyle={scrollbarStyle}
        stopScrollPropagation
        onScroll={this.onScroll}
        ref={(element) => { this.scroll = element; }}
      >
        {groups.map((group, index) => (
          <Group
            key={
              `group#${index}[${group.categories.join(',')}]` // eslint-disable-line react/no-array-index-key
            }
            theme={theme}
            group={group}
            emojis={emojis}
            imagePath={imagePath}
            imageType={imageType}
            cacheBustParam={cacheBustParam}
            checkMouseDown={checkMouseDown}
            onEmojiSelect={onEmojiSelect}
            onEmojiMouseDown={onEmojiMouseDown}
            ref={(element) => {
              group.instance = element; // eslint-disable-line no-param-reassign
            }}
          />
        ))}
      </ScrollArea>
    );
  }
}
