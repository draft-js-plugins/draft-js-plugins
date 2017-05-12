import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
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

  onScroll = (values) => {
    const { groups, onGroupScroll } = this.props;
    let activeGroup = 0;
    console.log(values.top);
    groups.forEach((group, index) => {
      if (values.top >= group.top) {
        activeGroup = index;
      }
    });
    onGroupScroll(activeGroup);
  }

  onWheel = (e) => {
    // Disable page scroll
    const height = this.scrollbars.getValues().scrollHeight;
    const delta = e.deltaY / height;
    const top = this.scrollbars.getValues().top;
    if (delta > 0) {
      if (top < 1 - delta) {
        e.stopPropagation();
      } else {
        this.scrollbars.scrollToBottom();
      }
    } else {
      if (top > -delta) { // eslint-disable-line no-lonely-if
        e.stopPropagation();
      } else {
        this.scrollbars.scrollTop();
      }
    }
  }

  scrollToGroup = (groupIndex) => {
    const { groups } = this.props;

    this.scrollbars.scrollTop(groups[groupIndex].topList);
  }

  calculateBounds = () => {
    const { groups } = this.props;
    const height = this.scrollbars.getValues().scrollHeight;
    const scrollTop = this.scrollbars.getValues().scrollTop;
    const containerTop = this.container.getBoundingClientRect().top - scrollTop;

    console.log(height);

    if (height) {
      groups.forEach((group) => {
        const groupTop = group.instance.container.getBoundingClientRect().top;
        const listTop = group.instance.list.getBoundingClientRect().top;
        group.top = (groupTop - containerTop) / height; // eslint-disable-line no-param-reassign
        group.topList = (listTop - containerTop) / height; // eslint-disable-line no-param-reassign
      });
    }

    console.log(groups);
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

    return (
      <div
        className={theme.emojiSelectPopoverGroups}
        onWheel={this.onWheel}
        ref={(element) => { this.container = element; }}
      >
        <Scrollbars
          onScrollFrame={this.onScroll}
          ref={(element) => { this.scrollbars = element; }}
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
        </Scrollbars>
      </div>
    );
  }
}
