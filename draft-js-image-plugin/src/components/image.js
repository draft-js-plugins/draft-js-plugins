import React, { Component } from 'react';
import decorateComponentWithProps from 'decorate-component-with-props';

class Image extends Component {
  static pluginOptions = {
    customFocusedStyle: true,
    customAlignmentStyle: true,
    customUploadProgress: true
  }

  renderProgress = (progress, theme) => progress >= 0
    ? <div className={ theme.imageLoader } style={{ width: `${100 - progress}%` }} />
    : null;

  render() {
    const { blockProps, alignment, onDragStart, draggable, theme, focusedStyle } = this.props;
    const { focused, progress, src, url } = blockProps;
    const className = `${theme.imageWrapper} ${theme[alignment || 'center']}`;
    const imageClassName = theme.image + (focused ? ` ${focusedStyle.focused}` : '');

    return (
      <figure className={className} contentEditable={false} onDragStart={onDragStart} draggable={draggable}>
        <img src={src || url} width="100%" height="auto" className={imageClassName} />
        {this.renderProgress(progress, theme)}
      </figure>
    );
  }
}

export default Image;
