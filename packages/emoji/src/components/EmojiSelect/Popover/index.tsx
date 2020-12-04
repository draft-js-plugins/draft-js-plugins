import React, {
  Component,
  ComponentType,
  ReactElement,
  WheelEvent,
} from 'react';
import PropTypes from 'prop-types';
import addEmoji from '../../../modifiers/addEmoji';
import Groups from './Groups';
import Nav from './Nav';
import ToneSelect from './ToneSelect';
import {
  EmojiImageProps,
  EmojiPluginStore,
  EmojiPluginTheme,
  EmojiSelectGroup,
} from '../../../index';
import { EmojiStrategy } from '../../../utils/createEmojisFromStrategy';
import Entry from './Entry';

interface PopoverProps {
  theme: EmojiPluginTheme;
  store: EmojiPluginStore;
  groups: EmojiSelectGroup[];
  emojis: EmojiStrategy;
  toneSelectOpenDelay: number;
  isOpen?: boolean;
  emojiImage: ComponentType<EmojiImageProps>;
}

export default class Popover extends Component<PopoverProps> {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    groups: PropTypes.arrayOf(PropTypes.object).isRequired,
    emojis: PropTypes.object.isRequired,
    toneSelectOpenDelay: PropTypes.number.isRequired,
    isOpen: PropTypes.bool,
  };

  activeEmoji: Entry | null = null;
  toneSelectTimer: ReturnType<typeof setTimeout> | null = null;
  mouseDown = false;
  toneSet: string[] | null = null;
  container?: HTMLDivElement | null;
  groupsElement?: Groups | null;

  static defaultProps = {
    isOpen: false,
  };

  state = {
    activeGroup: 0,
    showToneSelect: false,
  };

  componentDidMount(): void {
    window.addEventListener('mouseup', this.onMouseUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown = (): void => {
    this.mouseDown = true;
  };

  onMouseUp = (): void => {
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

  onWheel = (event: WheelEvent): void => event.preventDefault();

  onEmojiSelect = (emoji: string): void => {
    const newEditorState = addEmoji(this.props.store.getEditorState!(), emoji);
    this.props.store.setEditorState!(newEditorState);
  };

  onEmojiMouseDown = (emojiEntry: Entry, toneSet: string[] | null): void => {
    this.activeEmoji = emojiEntry;

    if (toneSet) {
      this.openToneSelectWithTimer(toneSet);
    }
  };

  onGroupSelect = (groupIndex: number): void => {
    this.groupsElement!.scrollToGroup(groupIndex);
  };

  onGroupScroll = (groupIndex: number): void => {
    if (groupIndex !== this.state.activeGroup) {
      this.setState({
        activeGroup: groupIndex,
      });
    }
  };

  openToneSelectWithTimer = (toneSet: string[] | null): void => {
    this.toneSelectTimer = setTimeout(() => {
      this.toneSelectTimer = null;
      this.openToneSelect(toneSet);
    }, this.props.toneSelectOpenDelay);
  };

  openToneSelect = (toneSet: string[] | null): void => {
    this.toneSet = toneSet;

    this.setState({
      showToneSelect: true,
    });
  };

  closeToneSelect = (): void => {
    this.toneSet = [];

    this.setState({
      showToneSelect: false,
    });
  };

  checkMouseDown = (): boolean => this.mouseDown;

  renderToneSelect = (): ReactElement | null => {
    if (this.state.showToneSelect) {
      const { theme = {}, emojiImage } = this.props;

      const containerBounds = this.container!.getBoundingClientRect();
      const areaBounds = this.groupsElement!.container!.getBoundingClientRect();
      const entryBounds = this.activeEmoji!.button!.getBoundingClientRect();
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
          onEmojiSelect={this.onEmojiSelect}
          emojiImage={emojiImage}
        />
      );
    }

    return null;
  };

  render(): ReactElement {
    const {
      theme = {},
      groups = [],
      emojis,
      isOpen = false,
      emojiImage,
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
        ref={(element) => {
          this.container = element;
        }}
      >
        <h3 className={theme.emojiSelectPopoverTitle}>
          {groups[activeGroup].title}
        </h3>
        <Groups
          theme={theme}
          groups={groups}
          emojis={emojis}
          checkMouseDown={this.checkMouseDown}
          onEmojiSelect={this.onEmojiSelect}
          onEmojiMouseDown={this.onEmojiMouseDown}
          onGroupScroll={this.onGroupScroll}
          ref={(element) => {
            this.groupsElement = element;
          }}
          emojiImage={emojiImage}
          isOpen={isOpen}
        />
        <Nav
          theme={theme}
          groups={groups}
          activeGroup={activeGroup}
          onGroupSelect={this.onGroupSelect}
        />
        {this.renderToneSelect()}
      </div>
    );
  }
}
