import React, { Component } from 'react';
import styles from './styles.css';
import modifier from '../modifiers/addImage';

export default class ImageAdd extends Component {
  // Start the popover closed
  state = {
    url: '',
    open: false,
    urlInputValue: '',
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

  onClick = () => {
    this.input.value = null;
    this.input.click();
  };

  onChange(e) {
    const { editorState, onChange } = this.props;
    const file = e.target.files[0];

    if (file.type.indexOf('image/') === 0) {
      const url = URL.createObjectURL(file);
      onChange(modifier(editorState, url));
      this.closePopover();
    }
  }

  render() {
    const popoverClassName = this.state.open ?
      styles.addImagePopover :
      styles.addImageClosedPopover;

    return (
      <div className={styles.addImage}>
        <div
          className={popoverClassName}
          onClick={this.onPopoverClick}
        >
          <input
            type="file"
            ref={(c) => { this.input = c; }}
            onChange={::this.onChange}
            style={{ display: 'none' }}
          />
          <button
            className={styles.addImageConfirmButton}
            type="button"
            onClick={this.onClick}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
