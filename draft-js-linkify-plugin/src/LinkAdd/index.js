import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import linkifyIt from 'linkify-it';
import modifier from '../modifiers/addLink';
import styles from './styles.css';

const linkify = linkifyIt();

export default class LinkAdd extends Component {
  // Start the popover closed
  state = {
    url: '',
    open: false,
    linkError: false
  };

  // When the popover is open and users click anywhere on the page,
  // the popover should close
  componentDidMount() {
    document.addEventListener('click', this.closePopover);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover);
  }

  onPopoverClick = () => {
    this.preventNextClose = true;
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.stopPropagation();
      this.addLink();
    }
  }

  setPosition = (toolbarElement) => {
    const position = {
      top: toolbarElement.offsetTop,
      left: toolbarElement.offsetLeft,
      width: toolbarElement.offsetWidth,
      transform: 'translate(-50%) scale(1)',
      transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
    };
    this.setState({ position });
  }

  openPopover = () => {
    if (!this.state.open) {
      this.preventNextClose = true;
      // eslint-disable-next-line react/no-find-dom-node
      const toolbarElement = ReactDOM.findDOMNode(this.props.inlineToolbarElement);
      this.setPosition(toolbarElement);
      setTimeout(() => {
        setTimeout(() => this.inputElement.focus(), 0);
        this.setState({ open: true, });
      }, 0);
    }
  };

  closePopover = () => {
    if (!this.preventNextClose && this.state.open) {
      this.setState({ open: false });
    }

    this.preventNextClose = false;
  };

  addLink = () => {
    const { editorState, onChange } = this.props;
    const { url } = this.state;
    if (linkify.test(url)) {
      this.setState({ linkError: false });
      onChange(modifier(editorState, url));
      this.closePopover();
    } else {
      this.setState({ linkError: true });
    }
  };

  changeUrl = (evt) => {
    this.setState({ url: evt.target.value });
  }

  render() {
    const popoverClassName = this.state.open ?
      styles.addLinkPopover :
      styles.addLinkClosedPopover;

    const inputClassName = this.state.linkError ?
      `${styles.addLinkInput} ${styles.addLinkInputError}` :
      styles.addLinkInput;

    return (
      <div className={styles.addLink}>
        <div
          className={popoverClassName}
          onClick={this.onPopoverClick}
          style={this.state.position}
        >
          <input
            ref={(element) => { this.inputElement = element; }}
            type="text"
            placeholder="Paste the link url …"
            className={inputClassName}
            onChange={this.changeUrl}
            onKeyDown={(e) => this.onKeyDown(e)}
            value={this.state.url}
          />
          <button
            className={styles.addLinkConfirmButton}
            type="button"
            onClick={this.addLink}
          >
            +
          </button>
          <button
            className={styles.addLinkConfirmButton}
            type="button"
            onClick={this.closePopover}
          >
            x
          </button>
        </div>
      </div>
    );
  }
}
