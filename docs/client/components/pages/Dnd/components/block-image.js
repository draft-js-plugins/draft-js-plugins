import React, { Component } from 'react';
import Draggable from 'draft-js-dnd-plugin/components/block-draggable-wrapper';
import Alignment from 'draft-js-dnd-plugin/components/block-alignment-wrapper';
import imageStyles from './image.css';

class BlockImage extends Component {
  remove = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.props.blockProps.onRemove(this.props.block.getKey());
  };

  alignLeft = () => {
    this.props.align('left');
  };

  alignCenter = () => {
    this.props.align('center');
  };

  alignRight = () => {
    this.props.align('right');
  };

  render() {
    const { blockProps, block, alignment, onDragStart, draggable } = this.props;

    const buttons = [
      <span className={ imageStyles.imageButton }
        onClick={this.alignLeft}
        style={{ marginLeft: '-2.4em' }}
        role="button" key={'left'}
      >
        L
      </span>,
      <span className={ imageStyles.imageButton }
        onClick={this.alignCenter}
        role="button" key={'center'}
      >
        C
      </span>,
      <span className={ imageStyles.imageButton }
        onClick={this.alignRight}
        style={{ marginLeft: '0.9em' }}
        role="button" key={'right'}
      >
        R
      </span>,
    ];

    const className = `${imageStyles.imageWrapper} ${imageStyles[alignment || 'center']}`;

    return (
        <figure className={ className }
          contentEditable={false}
          data-offset-key={ `${block.get('key')}-0-0` }
          onDragStart={onDragStart} draggable={draggable}
        >
          <img src={blockProps.src || blockProps.url} width="100%" height="auto" className={ imageStyles.image } />
          {blockProps.progress >= 0 ? <div className={imageStyles.imageLoader} style={{ width: `${100 - blockProps.progress}%` }} /> : null}
          {buttons}
        </figure>
    );
  }
}

export default Draggable(Alignment(BlockImage));
