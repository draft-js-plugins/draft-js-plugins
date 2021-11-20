import React, {
  Component,
  ComponentType,
  ReactElement,
  WheelEvent,
} from 'react';
import PropTypes from 'prop-types';
import { Scrollbars, positionValues } from 'react-custom-scrollbars-2';
import Group from './Group';
import {
  EmojiImageProps,
  EmojiPluginTheme,
  EmojiSelectGroup,
} from '../../../../index';
import { EmojiStrategy } from '../../../../utils/createEmojisFromStrategy';
import Entry from '../Entry';

interface GroupsProps {
  activeGroup?: number;
  theme: EmojiPluginTheme;
  groups: EmojiSelectGroup[];
  emojis: EmojiStrategy;
  checkMouseDown(): boolean;
  onEmojiSelect(emoji: string): void;
  onEmojiMouseDown(entryComponent: Entry, toneSet: string[] | null): void;
  onGroupScroll(activeGroup: number): void;
  emojiImage: ComponentType<EmojiImageProps>;
  isOpen: boolean;
}

export default class Groups extends Component<GroupsProps> {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    groups: PropTypes.arrayOf(PropTypes.object).isRequired,
    emojis: PropTypes.object.isRequired,
    checkMouseDown: PropTypes.func.isRequired,
    onEmojiSelect: PropTypes.func.isRequired,
    onEmojiMouseDown: PropTypes.func.isRequired,
    onGroupScroll: PropTypes.func.isRequired,
    isOpen: PropTypes.bool,
  };

  state = {
    activeGroup: 0,
  };

  scrollbars?: Scrollbars | null;
  container?: HTMLDivElement | null;

  componentDidMount(): void {
    this.calculateBounds();
  }

  componentDidUpdate(): void {
    this.calculateBounds();
  }

  onScroll = (values: positionValues): void => {
    const { groups, onGroupScroll } = this.props;
    let activeGroup = 0;
    groups.forEach((group, index) => {
      if (values.scrollTop >= group.top!) {
        activeGroup = index;
        this.setState({ activeGroup });
      }
    });
    onGroupScroll(activeGroup);
  };

  onWheel = (event: WheelEvent<HTMLDivElement>): void => {
    // Disable page scroll, but enable groups scroll
    const {
      clientHeight,
      scrollHeight,
      scrollTop,
    } = this.scrollbars!.getValues();
    if (event.deltaY > 0) {
      if (scrollTop < scrollHeight - clientHeight - event.deltaY) {
        event.stopPropagation();
      } else {
        this.scrollbars!.scrollToBottom();
      }
    } else {
      if (scrollTop > -event.deltaY) {
        // eslint-disable-line no-lonely-if
        event.stopPropagation();
      } else {
        this.scrollbars!.scrollTop(0);
      }
    }
  };

  scrollToGroup = (groupIndex: number): void => {
    const { groups } = this.props;

    this.scrollbars!.scrollTop(groups[groupIndex].topList!);
  };

  calculateBounds = (): void => {
    const { scrollHeight, scrollTop } = this.scrollbars!.getValues();
    if (scrollHeight) {
      const { groups } = this.props;
      const containerTop =
        this.container!.getBoundingClientRect().top - scrollTop;

      groups.forEach((group) => {
        const groupTop = group.instance!.container!.getBoundingClientRect().top;
        const listTop = group.instance!.list!.getBoundingClientRect().top;
        group.top = groupTop - containerTop; // eslint-disable-line no-param-reassign
        group.topList = listTop - containerTop; // eslint-disable-line no-param-reassign
      });
    }
  };

  isRenderedGroupActive = (index: number): boolean => {
    const { activeGroup } = this.state;
    const { isOpen } = this.props;
    return activeGroup === index || (isOpen && activeGroup + 1 === index); // we also preload next group when popup is open
  };

  render(): ReactElement {
    const {
      theme = {},
      groups = [],
      emojis,
      checkMouseDown,
      onEmojiSelect,
      onEmojiMouseDown,
      emojiImage,
    } = this.props;

    return (
      <div
        className={theme.emojiSelectPopoverGroups}
        onWheel={this.onWheel}
        ref={(element) => {
          this.container = element;
        }}
      >
        <Scrollbars
          className={theme.emojiSelectPopoverScrollbarOuter}
          onScrollFrame={this.onScroll}
          renderTrackVertical={() => (
            <div className={theme.emojiSelectPopoverScrollbar} />
          )}
          renderThumbVertical={(props) => (
            <div
              {...props}
              className={theme.emojiSelectPopoverScrollbarThumb}
            />
          )}
          ref={(element) => {
            this.scrollbars = element;
          }}
        >
          {groups.map((group, index) => (
            <Group
              key={
                `group#${index}[${group.categories.join(',')}]` // eslint-disable-line react/no-array-index-key
              }
              theme={theme}
              group={group}
              emojis={emojis}
              checkMouseDown={checkMouseDown}
              onEmojiSelect={onEmojiSelect}
              onEmojiMouseDown={onEmojiMouseDown}
              ref={(element) => {
                group.instance = element; // eslint-disable-line no-param-reassign
              }}
              emojiImage={emojiImage}
              isActive={this.isRenderedGroupActive(index)}
            />
          ))}
        </Scrollbars>
      </div>
    );
  }
}
