import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from './Popover';

export default class EmojiSelect extends Component {
  static propTypes = {
    selectButtonContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
  };

  static defaultProps = {
    selectButtonContent: '☺',
  };

  // Start the selector closed
  state = {
    open: false,
  };

  // When the selector is open and users click anywhere on the page,
  // the selector should close
  componentDidMount() {
    document.addEventListener('click', this.closePopover);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover);
  }

  onClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  onButtonMouseUp = () => (
    this.state.open ? this.closePopover() : this.openPopover()
  );

  // Open the popover
  openPopover = () => {
    if (!this.state.open) {
      this.setState({
        open: true,
      });
    }
  };

  // Close the popover
  closePopover = () => {
    if (this.state.open) {
      this.setState({
        open: false,
      });
    }
  };

  render() {
    const { theme = {} } = this.props;
    const buttonClassName = this.state.open ?
      theme.emojiSelectButtonPressed :
      theme.emojiSelectButton;
    const popoverClassName = this.state.open ?
      theme.emojiSelectPopover :
      theme.emojiSelectPopoverClosed;

    return (
      <div className={theme.emojiSelect} onClick={this.onClick}>
        <button
          className={buttonClassName}
          onMouseUp={this.onButtonMouseUp}
        >
          {this.props.selectButtonContent}
        </button>
        <Popover className={popoverClassName} {...this.props} />
      </div>
    );
  }
}
