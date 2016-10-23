import React, { Component } from 'react';
import addImage from '../modifiers/addImage';

export default class ImageAdd extends Component {
  // Start the popover closed
  state = {
    url: '',
    open: false,
  };

  // When the popover is open and users click anywhere on the page,
  // the popover should close
  componentDidMount() {
    document.addEventListener('click', this.closePopover);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover);
  }

  // Note: make sure whenever a click happens within the popover it is not closed
  onPopoverClick = () => {
    this.preventNextClose = true;
  }

  openPopover = () => {
    if (!this.state.open) {
      this.preventNextClose = true;
      this.setState({
        open: true,
      });
    }
  };

  closePopover = () => {
    if (!this.preventNextClose && this.state.open) {
      this.setState({
        open: false,
      });
    }

    this.preventNextClose = false;
  };

  addImage = () => {
    const { editorState, onChange } = this.props;
    onChange(addImage(editorState, this.state.url));
  };

  changeUrl = (evt) => {
    this.setState({ url: evt.target.value });
  }

  render() {
    const { theme = {} } = this.props;
    const popoverClassName = this.state.open ?
      theme.addImagePopover :
      theme.addImageClosedPopover;
    const buttonClassName = this.state.open ?
      theme.addImagePressedButton :
      theme.addImageButton;

    return (
      <div className={theme.addImage}>
        <button
          className={buttonClassName}
          onMouseUp={this.openPopover}
          type="button"
        >
          {this.props.addImageButtonContent}
        </button>
        <div
          className={popoverClassName}
          onClick={this.onPopoverClick}
        >
          <input
            type="text"
            placeholder="Paste the image url …"
            className={theme.addImageInput}
            onChange={this.changeUrl}
            value={this.state.url}
          />
          <button
            className={theme.addImageConfirmButton}
            type="button"
            onClick={this.addImage}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
