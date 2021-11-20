import React, { Component, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { EmojiPluginTheme } from '../../../../../index';

interface EntryParams {
  theme: EmojiPluginTheme;
  icon: ReactNode;
  groupIndex: number;
  isActive: boolean;
  onGroupSelect(index: number): void;
}

export default class Entry extends Component<EntryParams> {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
    groupIndex: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    onGroupSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isActive: false,
  };
  mouseDown = false;

  onMouseDown = (): void => {
    this.mouseDown = true;
  };

  onMouseUp = (): void => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onGroupSelect(this.props.groupIndex);
    }
  };

  render(): ReactElement {
    const { theme = {}, icon, isActive } = this.props;

    return (
      <button
        className={
          isActive
            ? theme.emojiSelectPopoverNavEntryActive
            : theme.emojiSelectPopoverNavEntry
        }
        onMouseDown={this.onMouseDown}
        type="button"
        onMouseUp={this.onMouseUp}
      >
        {icon}
      </button>
    );
  }
}
