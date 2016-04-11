import React, { Component } from 'react';
import { AlignmentDecorator } from 'draft-js-alignment-plugin';
import { HoverToolbar } from 'draft-js-toolbar-plugin';
import imageStyles from './image.css';

class BlockImage extends Component {
  renderProgress = progress => {
    if (progress >= 0) {
      return (
        <div className={imageStyles.imageLoader} style={{ width: `${100 - progress}%` }} />
      );
    } return null;
  }

  render() {
    const { blockProps, alignment, onDragStart, draggable } = this.props;

    const actions = [
      {
        active: alignment === 'left',
        button: <span>L</span>,
        toggle: () => this.props.align('left'),
        label: 'Align left',
      }, {
        active: !alignment || alignment === 'center',
        button: <span>C</span>,
        toggle: () => this.props.align('center'),
        label: 'Align center',
      }, {
        active: alignment === 'right',
        button: <span>R</span>,
        toggle: () => this.props.align('right'),
        label: 'Align right',
      },
    ];

    const className = `${imageStyles.imageWrapper} ${imageStyles[alignment || 'center']}`;

    return (
        <figure className={className} contentEditable={false} onDragStart={onDragStart} draggable={draggable}
          onClick={ blockProps.focus }
        >
          <img src={blockProps.src || blockProps.url} width="100%" height="auto" className={ imageStyles.image } />
          {this.renderProgress(blockProps.progress)}
          <HoverToolbar parent={ this } theme={blockProps.toolbarTheme} actions={actions} />
        </figure>
    );
  }
}

export default AlignmentDecorator(BlockImage);
