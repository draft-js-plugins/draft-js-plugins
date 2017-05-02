import React, { Component } from 'react';

export default class Entry extends Component {
  onMouseDown = () => {
    this.mouseDown = true;
  };

  onMouseUp = () => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onGroupSelect(this.props.groupIndex);
    }
  };

  mouseDown = false;

  render() {
    const {
      theme = {},
      isActive,
      icon,
    } = this.props;

    return (
      <button
        className={isActive ?
          theme.emojiSelectPopoverNavEntryActive :
          theme.emojiSelectPopoverNavEntry}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
      >{icon}</button>
    );
  }
}
