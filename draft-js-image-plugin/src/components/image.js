import React, { Component } from 'react';
import { FocusDecorator } from 'draft-js-focus-plugin';
import { DraggableDecorator } from 'draft-js-dnd-plugin';
import { ResizeableDecorator } from 'draft-js-resizeable-plugin';
import { ToolbarDecorator } from 'draft-js-toolbar-plugin';
import { AlignmentDecorator } from 'draft-js-alignment-plugin';

const ImageComponent = ({ theme }) => class Image extends Component {
  componentDidMount() {
    /* this.props.addActions([{
      button: <span>Hello World</span>,
      label: 'Log Hello World!',
      active: (block, editorState) => editorState.getSelection().isCollapsed(),
      toggle: state => console.log('Hello World!', state),
    }]); */
  }

  renderProgress = progress => progress >= 0 // eslint-disable-line no-confusing-arrow
    ? <div className={ theme.imageLoader } style={{ width: `${100 - progress}%` }} />
    : null;

  render() {
    const { alignmentClassName, focusClassName, blockProps, style, ...other } = this.props;
    const { progress, src, url } = blockProps;

    // Compose figure classNames
    let className = theme.imageWrapper;
    if (alignmentClassName) className = `${alignmentClassName} ${className}`;
    // Compose image classNames
    let imageClassName = theme.image;
    if (focusClassName) imageClassName += ` ${focusClassName}`;

    return (
      <div className={className} contentEditable={false} style={style}>
        <img {...other} src={src || url} alt="" width="100%" height="auto" className={imageClassName} />
        {this.renderProgress(progress, theme)}
      </div>
    );
  }
};

export default options => ResizeableDecorator({
  resizeSteps: 10,
  handles: true,
  vertical: 'auto'
})(
  DraggableDecorator(
    FocusDecorator(
      AlignmentDecorator(
        ToolbarDecorator()(
          ImageComponent(options)
        )
      )
    )
  )
);
