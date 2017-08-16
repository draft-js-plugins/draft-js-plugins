import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Entry extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]).isRequired,
    groupIndex: PropTypes.number.isRequired,
    isActive: PropTypes.bool,
    onGroupSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isActive: false,
  };

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
      icon,
      isActive,
    } = this.props;

    return (
      <button
        className={isActive ?
          theme.emojiSelectPopoverNavEntryActive :
          theme.emojiSelectPopoverNavEntry}
        onMouseDown={this.onMouseDown}
        type="button"
        onMouseUp={this.onMouseUp}
      >{icon}</button>
    );
  }
}
