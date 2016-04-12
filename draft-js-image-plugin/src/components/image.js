import React, { Component } from 'react';
import imageStyles from '../style.css';

class Image extends Component {
  renderProgress = progress => {
    if (progress >= 0) {
      return (
        <div className={ imageStyles.imageLoader } style={{ width: `${100 - progress}%` }} />
      );
    } return null;
  }

  render() {
    const { blockProps, alignment, onDragStart, draggable, actions } = this.props;
    const { HoverToolbar } = blockProps;
    const className = `${imageStyles.imageWrapper} ${imageStyles[alignment || 'center']}`;

    return (
        <figure className={className} contentEditable={false} onDragStart={onDragStart} draggable={draggable}
          onClick={ blockProps.focus }
        >
          <img src={blockProps.src || blockProps.url} width="100%" height="auto" className={ imageStyles.image } />
          {this.renderProgress(blockProps.progress)}
          {HoverToolbar ? <HoverToolbar parent={ this } theme={blockProps.toolbarTheme} actions={ actions } /> : null}
        </figure>
    );
  }
}

export default Image;
