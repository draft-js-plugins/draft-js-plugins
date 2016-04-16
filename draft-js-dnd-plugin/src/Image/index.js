import React, { Component } from 'react';
import Draggable from '../components/block-draggable-wrapper';
import Alignment from '../components/block-alignment-wrapper';

class Image extends Component {
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
    const { blockProps, block, attachButtons, theme, alignment, onDragStart, draggable } = this.props;

    const buttons = [
      <span className={ theme.get('imageButton') }
        onClick={this.alignLeft}
        style={{ marginLeft: '-2.4em' }}
        role="button" key={'left'}
      >
        L
      </span>,
      <span className={ theme.get('imageButton') }
        onClick={this.alignCenter}
        role="button" key={'center'}
      >
        C
      </span>,
      <span className={ theme.get('imageButton') }
        onClick={this.alignRight}
        style={{ marginLeft: '0.9em' }}
        role="button" key={'right'}
      >
        R
      </span>,
    ];

    const className = `${theme.get('imageWrapper')} ${theme.get(alignment || 'center')}`;
    return (
        <figure className={ className }
          contentEditable={false}
          data-offset-key={ `${block.get('key')}-0-0` }
          onDragStart={onDragStart} draggable={draggable}
        >
          <img src={blockProps.src || blockProps.url} width="100%" height="auto" className={ theme.get('image') } role="presentation" />
          {blockProps.progress >= 0 ? <div className={theme.get('imageLoader')} style={{ width: `${100 - blockProps.progress}%` }} /> : null}
          { attachButtons ? buttons : null }
        </figure>
    );
  }
}

export default Draggable(Alignment(Image));
