import React, { Component } from 'react';
import Draggable from 'draft-js-dnd-plugin/components/block-draggable-wrapper';
import Alignment from 'draft-js-dnd-plugin/components/block-alignment-wrapper';
import Toolbar from 'draft-js-toolbar-plugin/components/hover-toolbar';
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
    const { blockProps, block, alignment, onDragStart, draggable } = this.props;

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

    const key = `${block.get('key')}-0-0`;
    return (
        <figure className={ className }
          contentEditable={false}
          data-offset-key={ key }
          onDragStart={onDragStart} draggable={draggable}
        >
          <img src={blockProps.src || blockProps.url} width="100%" height="auto" className={ imageStyles.image } />
          {this.renderProgress(blockProps.progress)}
          <Toolbar parent={ `figure[data-offset-key="${key}"]` } theme={blockProps.toolbarTheme} actions={actions} />
        </figure>
    );
  }
}

export default Draggable(Alignment(BlockImage));
