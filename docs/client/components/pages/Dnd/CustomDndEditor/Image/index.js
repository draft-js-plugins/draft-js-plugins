import React, { Component } from 'react';
import Draggable from 'draft-js-dnd-plugin/components/block-draggable-wrapper';
import Alignment from 'draft-js-dnd-plugin/components/block-alignment-wrapper';
import Toolbar from 'draft-js-toolbar-plugin/components/hover-toolbar';

class Image extends Component {
  renderProgress = (progress, theme) => {
    if (progress >= 0) {
      return (
        <div className={theme.get('imageLoader')} style={{ width: `${100 - progress}%` }} />
      );
    } return null;
  }
  render() {
    const { blockProps, block, toolbarTheme, theme, alignment, onDragStart, draggable } = this.props;

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

    const className = `${theme.get('imageWrapper')} ${theme.get(alignment || 'center')}`;
    const key = `${block.get('key')}-0-0`;
    return (
      <figure className={ className } contentEditable={false} data-offset-key={ key } onDragStart={onDragStart} draggable={draggable}>
        <img src={blockProps.src || blockProps.url} width="100%" height="auto" className={ theme.get('image') } />
        {this.renderProgress(blockProps.progress, theme)}
        <Toolbar parent={ `figure[data-offset-key="${key}"]` } theme={toolbarTheme} actions={actions} />
      </figure>
    );
  }
}

export default Draggable(Alignment(Image));
