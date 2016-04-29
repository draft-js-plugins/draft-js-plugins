import React, { Component } from 'react';
import imageStyles from '../style.css';

class Image extends Component {
  static pluginOptions = {
    customFocusedStyle: true,
  }

  renderProgress = progress => progress >= 0
    ? <div className={ imageStyles.imageLoader } style={{ width: `${100 - progress}%` }} />
    : null;

  render() {
    const { blockProps, alignment, onDragStart, draggable } = this.props;
    const { focused, progress, src, url } = blockProps;
    const className = `${imageStyles.imageWrapper} ${imageStyles[alignment || 'center']}`;

    const style = focused ? { outline: '1px solid blue' } : null;
    return (
      <figure className={className} contentEditable={false} onDragStart={onDragStart} draggable={draggable}>
        <img src={src || url} width="100%" height="auto" className={imageStyles.image} style={style} />
        {this.renderProgress(progress)}
      </figure>
    );
  }
}

export default Image;
