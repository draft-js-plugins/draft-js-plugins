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
    toneSelectBounds: {},
    toneSet: [],
  };

  onEmojiSelect = (emoji) => {
    const newEditorState = addEmoji(
      this.props.store.getEditorState(),
      emoji,
    );
    this.props.store.setEditorState(newEditorState);
  };

  onToneSelectOpen = (toneSet, entryBounds) => {
    const containerBounds = this.container.getBoundingClientRect();
    const areaBounds = this.groups.scroll.wrapper.getBoundingClientRect();

    console.log('test', containerBounds, areaBounds);

    this.setState({
      showToneSelect: true,
      toneSelectBounds: {
        // Translate TextRectangle coords to CSS relative coords
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
        },
      },
      toneSet,
    });

    window.addEventListener('mouseup', this.onToneSelectClose);
  };

  onToneSelectClose = () => {
    if (this.state.showToneSelect) {
      this.setState({
        showToneSelect: false,
        toneSelectBounds: {},
        toneSet: [],
      });
    }

    window.removeEventListener('mouseup', this.onToneSelectClose);
  }

  onGroupSelect = (groupIndex) => {
    this.groups.scrollToGroup(groupIndex);
  };

  onGroupScroll = (groupIndex) => {
    if (groupIndex !== this.state.activeGroup) {
      this.setState({
        activeGroup: groupIndex,
      });
    }
  }

  emojis = createEmojisFromStrategy(strategy);

  render() {
    const {
      theme = {},
      groups = [],
      imagePath,
      imageType,
      cacheBustParam,
      toneSelectOpenDelay,
    } = this.props;

    const {
      activeGroup,
      showToneSelect,
      toneSelectBounds,
      toneSet,
    } = this.state;

    console.log('render emojiSelect', showToneSelect);

    return (
      <div
        className={theme.emojiSelect}
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
          toneSelectOpenDelay={toneSelectOpenDelay}
          onEmojiSelect={this.onEmojiSelect}
          onToneSelectOpen={this.onToneSelectOpen}
          onGroupScroll={this.onGroupScroll}
          ref={(element) => { this.groups = element; }}
        />
        <Nav
          theme={theme}
          groups={this.props.groups}
          activeGroup={activeGroup}
          onGroupSelect={this.onGroupSelect}
        />
        {showToneSelect && (
          <ToneSelect
            theme={theme}
            bounds={toneSelectBounds}
            toneSet={toneSet}
            imagePath={imagePath}
            imageType={imageType}
            cacheBustParam={cacheBustParam}
            onEmojiSelect={this.onEmojiSelect}
          />
        )}
      </div>
    );
  }
}
