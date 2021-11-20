import React, { Component } from 'react';
import PropTypes from 'prop-types';
import addEmoji from '../../../modifiers/addEmoji';
import Groups from './Groups';
import Nav from './Nav';
import ToneSelect from './ToneSelect';

export default class Popover extends Component {
  static propTypes = {
    cacheBustParam: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    imageType: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    groups: PropTypes.arrayOf(PropTypes.object).isRequired,
    emojis: PropTypes.object.isRequired,
    toneSelectOpenDelay: PropTypes.number.isRequired,
    isOpen: PropTypes.bool,
    useNativeArt: PropTypes.bool,
    menuPosition: PropTypes.oneOf(['top', 'bottom']),
  };

  static defaultProps = {
    isOpen: false,
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
      this.activeEmoji.deselect();
      this.activeEmoji = null;

      if (this.state.showToneSelect) {
        this.closeToneSelect();
      } else if (this.toneSelectTimer) {
        clearTimeout(this.toneSelectTimer);
        this.toneSelectTimer = null;
      }
    }
  };

  onWheel = e => e.preventDefault();

  onEmojiSelect = emoji => {
    const newEditorState = addEmoji(this.props.store.getEditorState(), emoji);
    this.props.store.setEditorState(newEditorState);
  };

  onEmojiMouseDown = (emojiEntry, toneSet) => {
    this.activeEmoji = emojiEntry;

    if (toneSet) {
      this.openToneSelectWithTimer(toneSet);
    }
  };

  onGroupSelect = groupIndex => {
    this.groups.scrollToGroup(groupIndex);
  };

  onGroupScroll = groupIndex => {
    if (groupIndex !== this.state.activeGroup) {
      this.setState({
        activeGroup: groupIndex,
      });
    }
  };

  openToneSelectWithTimer = toneSet => {
    this.toneSelectTimer = setTimeout(() => {
      this.toneSelectTimer = null;
      this.openToneSelect(toneSet);
    }, this.props.toneSelectOpenDelay);
  };

  openToneSelect = toneSet => {
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

  mouseDown = false;
  activeEmoji = null;
  toneSet = [];
  toneSelectTimer = null;

  renderToneSelect = () => {
    if (this.state.showToneSelect) {
      const { cacheBustParam, imagePath, imageType, theme = {} } = this.props;

      const containerBounds = this.container.getBoundingClientRect();
      const areaBounds = this.groups.container.getBoundingClientRect();
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
        },
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

  renderMenu = position => {
    const { menuPosition, theme = {}, groups = [] } = this.props;
    const { activeGroup } = this.state;

    if (position === (menuPosition || 'bottom'))
      return (
        <Nav
          theme={theme}
          groups={groups}
          activeGroup={activeGroup}
          onGroupSelect={this.onGroupSelect}
        />
      );
    return null;
  };

  render() {
    const {
      cacheBustParam,
      imagePath,
      imageType,
      theme = {},
      groups = [],
      emojis,
      isOpen = false,
      useNativeArt,
    } = this.props;
    const className = isOpen
      ? theme.emojiSelectPopover
      : theme.emojiSelectPopoverClosed;
    const { activeGroup } = this.state;

    return (
      <div
        className={className}
        onMouseDown={this.onMouseDown}
        onWheel={this.onWheel}
        ref={element => {
          this.container = element;
        }}
      >
        <h3 className={theme.emojiSelectPopoverTitle}>
          {groups[activeGroup].title}
        </h3>

        {this.renderMenu('top')}

        <Groups
          theme={theme}
          groups={groups}
          emojis={emojis}
          imagePath={imagePath}
          imageType={imageType}
          cacheBustParam={cacheBustParam}
          checkMouseDown={this.checkMouseDown}
          onEmojiSelect={this.onEmojiSelect}
          onEmojiMouseDown={this.onEmojiMouseDown}
          onGroupScroll={this.onGroupScroll}
          ref={element => {
            this.groups = element;
          }}
          useNativeArt={useNativeArt}
          isOpen={isOpen}
        />

        {this.renderToneSelect()}
        {this.renderMenu('bottom')}
      </div>
    );
  }
}
