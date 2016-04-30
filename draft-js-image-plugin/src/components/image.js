import React, { Component } from 'react';

class Image extends Component {
  // Set pluginOptions
  static pluginOptions = {
    // Handle focused style manually
    customFocusedStyle: true,
    // Handle alignment style manually
    customAlignmentStyle: true,
    // Handle upload progress style manually
    customUploadProgress: true,
    // Handle dnd onDragStart/draggable manually
    customHandleDnd: true
  }

  renderProgress = (progress, theme) => progress >= 0 // eslint-disable-line no-confusing-arrow
    ? <div className={ theme.imageLoader } style={{ width: `${100 - progress}%` }} />
    : null;

  render() {
    const { alignment, theme, focusedStyle, isFocused,
      progress, src, url } = this.props;

    // Compose figure classNames
    const className = `${theme.imageWrapper} ${theme[alignment || 'center']}`;
    // Compose image classNames
    const imageClassName = theme.image + (isFocused ? ` ${focusedStyle.focused}` : '');

    return (
      <figure className={className} contentEditable={false}>
        <img {...this.props} src={src || url} alt="" width="100%" height="auto" className={imageClassName} />
        {this.renderProgress(progress, theme)}
      </figure>
    );
  }
}

export default Image;
