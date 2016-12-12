import React, { Component } from 'react';
import styles from './styles.css';
import modifier from '../modifiers/addImage';

export default class ImageAdd extends Component {

  onChange(e) {
    const { editorState, onChange } = this.props;
    const file = e.target.files[0];

    if (this.parseUrl !== undefined) {
      this.parseUrl(file, editorState, onChange);
    } else {
      const url = URL.createObjectURL(file);
      onChange(modifier(editorState, url));
    }
  }

  addImageFile = (parseUrl) => {
    this.input.click();
    this.parseUrl = parseUrl;
  };

  render() {
    return (
      <div className={styles.addImage}>
        <input
          type="file"
          ref={(c) => { this.input = c; }}
          onChange={(e) => this.onChange(e)}
          style={{ display: 'none' }}
        />
      </div>
    );
  }
}
