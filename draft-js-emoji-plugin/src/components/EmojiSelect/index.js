import React, { Component } from 'react';
import PropTypes from 'prop-types';
import strategy from 'emojione/emoji.json';
import addEmoji from '../../modifiers/addEmoji';
import createEmojisFromStrategy from '../../utils/createEmojisFromStrategy';
import defaultEmojiGroups from '../../constants/defaultEmojiGroups';
import Groups from './Groups';
import Nav from './Nav';
import ToneSelect from './ToneSelect';

export default class EmojiSelect extends Component {
  static propTypes = {
    groups: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      emojis: PropTypes.array,
      categories: PropTypes.arrayOf(PropTypes.string),
    })),
    toneSelectOpenDelay: PropTypes.number,
  };

  static defaultProps = {
    groups: defaultEmojiGroups,
    toneSelectOpenDelay: 500,
  };

  state = {
    activeGroup: 0,
    showToneSelect: false,
  };

  componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown = () => {
    this.mouseDown = true;
  };

  onMouseUp = () => {
    this.mouseDown = false;

    if (this.activeEmoji) {
      this.activeEmoji.unsetActive();
      this.activeEmoji = null;

      if (this.state.showToneSelect) {
        this.closeToneSelect();
      } else if (this.toneSelectTimer) {
        clearTimeout(this.toneSelectTimer);
        this.toneSelectTimer = null;
      }
    }
  };

  onEmojiSelect = (emoji) => {
    const newEditorState = addEmoji(
      this.props.store.getEditorState(),
      emoji,
    );
    this.props.store.setEditorState(newEditorState);
  };

  onEmojiMouseDown = (emojiEntry, toneSet) => {
    this.activeEmoji = emojiEntry;
    this.activeEmoji.setActive();

    if (toneSet) {
      this.openToneSelectWithTimer(toneSet);
    }
  };

  onGroupSelect = (groupIndex) => {
    this.groups.scrollToGroup(groupIndex);
  };

  onGroupScroll = (groupIndex) => {
    if (groupIndex !== this.state.activeGroup) {
      this.setState({
        activeGroup: groupIndex,
      });
    }
  };

  openToneSelectWithTimer = (toneSet) => {
    this.toneSelectTimer = setTimeout(() => {
      this.toneSelectTimer = null;
      this.openToneSelect(toneSet);
    }, this.props.toneSelectOpenDelay);
  }

  openToneSelect = (toneSet) => {
    this.toneSet = toneSet;

    this.setState({
      showToneSelect: true,
    });
  };

  closeToneSelect = () => {
    this.toneSet = [];

    this.setState({
      showToneSelect: false,
    });
  };

  checkMouseDown = () => this.mouseDown;

  emojis = createEmojisFromStrategy(strategy);
  mouseDown = false;
  activeEmoji = null;
  toneSet = [];
  toneSelectTimer = null;

  renderToneSelect = () => {
    if (this.state.showToneSelect) {
      const { theme = {}, imagePath, imageType, cacheBustParam } = this.props;

      const containerBounds = this.container.getBoundingClientRect();
      const areaBounds = this.groups.scroll.wrapper.getBoundingClientRect();
      const entryBounds = this.activeEmoji.button.getBoundingClientRect();
      // Translate TextRectangle coords to CSS relative coords
      const bounds = {
        areaBounds: {
          left: areaBounds.left - containerBounds.left,
          right: containerBounds.right - areaBounds.right,
          top: areaBounds.top - containerBounds.top,
          bottom: containerBounds.bottom - areaBounds.bottom,
          width: areaBounds.width,
          height: areaBounds.width,
        },
        entryBounds: {
          left: entryBounds.left - containerBounds.left,
          right: containerBounds.right - entryBounds.right,
          top: entryBounds.top - containerBounds.top,
          bottom: containerBounds.bottom - entryBounds.bottom,
          width: entryBounds.width,
          height: entryBounds.width,
        }
      };

      return (
        <ToneSelect
          theme={theme}
          bounds={bounds}
          toneSet={this.toneSet}
          imagePath={imagePath}
          imageType={imageType}
          cacheBustParam={cacheBustParam}
          onEmojiSelect={this.onEmojiSelect}
        />
      );
    }

    return null;
  };

  render() {
    const {
      theme = {},
      groups = [],
      imagePath,
      imageType,
      cacheBustParam,
    } = this.props;

    const { activeGroup } = this.state;

    console.log('render emojiSelect');

    return (
      <div
        className={theme.emojiSelect}
        onMouseDown={this.onMouseDown}
        ref={(element) => { this.container = element; }}
      >
        <h3 className={theme.emojiSelectTitle}>{groups[activeGroup].title}</h3>
        <Groups
          theme={theme}
          groups={groups}
          emojis={this.emojis}
          imagePath={imagePath}
          imageType={imageType}
          cacheBustParam={cacheBustParam}
          checkMouseDown={this.checkMouseDown}
          onEmojiSelect={this.onEmojiSelect}
          onEmojiMouseDown={this.onEmojiMouseDown}
          onGroupScroll={this.onGroupScroll}
          ref={(element) => { this.groups = element; }}
        />
        <Nav
          theme={theme}
          groups={this.props.groups}
          activeGroup={activeGroup}
          onGroupSelect={this.onGroupSelect}
        />
        {this.renderToneSelect()}
      </div>
    );
  }
}
