import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

function round(x, steps) {
  return Math.ceil(x / steps) * steps;
}

// Export
export default ({ setEntityData, ...rest }) => WrappedComponent => class BlockResizeableDecorator extends Component {
  // Statics
  static displayName = `BlockDraggable(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;
  static defaultProps = {
    horizontal: 'relative',
    vertical: false,
    ratio: null,
    resizeSteps: 5,
    handles: false,
    caption: false,
    ...rest
  };
  state = {
    hoverPosition: {},
    clicked: false,
  };

  setEntityData = data => {
    const { blockProps } = this.props;
    (setEntityData || blockProps.setEntityData)(data);
  }

  componentDidMount() {
    // Get this domNode
    const element = ReactDOM.findDOMNode(this);
    if (!element) {
      return;
    }
    // Bind listeners
    this.DOMNode = element;
    this.DOMNode.addEventListener('mouseleave', this.mouseLeave);
    this.DOMNode.addEventListener('mousemove', this.mouseMove);
    this.DOMNode.addEventListener('mousedown', this.mouseDown);
  }

  mouseLeave = () => {
    if (!this.state.clicked) {
      this.setState({ hoverPosition: {} });
    }
  }

  mouseMove = (e) => {
    const { vertical, horizontal } = this.props;

    const hoverPosition = this.state.hoverPosition;
    const tolerance = 6;
    const pane = this.DOMNode;

    const b = pane.getBoundingClientRect();
    const x = e.clientX - b.left;
    const y = e.clientY - b.top;

    const isTop = vertical && vertical !== 'auto' ? y < tolerance : false;
    const isLeft = horizontal ? x < tolerance : false;
    const isRight = horizontal ? x >= b.width - tolerance : false;
    const isBottom = vertical && vertical !== 'auto' ? y >= b.height - tolerance && y < b.height : false;

    const canResize = isTop || isLeft || isRight || isBottom;

    const newHoverPosition = {
      isTop, isLeft, isRight, isBottom, canResize
    };

    if (Object.keys(newHoverPosition).filter(key => hoverPosition[key] !== newHoverPosition[key]).length) {
      this.setState({ hoverPosition: newHoverPosition });
    }
  }

  // Handle mousedown for resizing
  mouseDown = event => {
    // No mouse-hover-position data? Nothing to resize!
    if (!this.state.hoverPosition.canResize) {
      return undefined;
    }
    const { resizeSteps, vertical, horizontal } = this.props;
    const { hoverPosition } = this.state;
    const { isTop, isLeft, isRight, isBottom } = hoverPosition;

    const component = this.DOMNode;
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = parseInt(document.defaultView.getComputedStyle(component).width, 10);
    const startHeight = parseInt(document.defaultView.getComputedStyle(component).height, 10);

    // Do the actual drag operation
    const doDrag = (dragEvent) => {
      let width = (startWidth + dragEvent.clientX - startX);
      let height = (startHeight + dragEvent.clientY - startY);
      const b = component.parentElement.parentElement;
      width = b.clientWidth < width ? b.clientWidth : width;
      height = b.clientHeight < height ? b.clientHeight : height;

      const widthPerc = 100 / b.clientWidth * width;
      const heightPerc = 100 / b.clientHeight * height;

      const newState = {};
      if ((isLeft || isRight) && horizontal === 'relative') {
        newState.width = resizeSteps ? round(widthPerc, resizeSteps) : widthPerc;
      } else if ((isLeft || isRight) && horizontal === 'absolute') {
        newState.width = resizeSteps ? round(width, resizeSteps) : width;
      }

      if ((isTop || isBottom) && vertical === 'relative') {
        newState.height = resizeSteps ? round(heightPerc, resizeSteps) : heightPerc;
      } else if ((isTop || isBottom) && vertical === 'absolute') {
        newState.height = resizeSteps ? round(height, resizeSteps) : height;
      }

      this.setState(newState);
      dragEvent.stopPropagation();
      dragEvent.preventDefault();
      return false;
    };

    // Finished dragging
    const stopDrag = (e) => {
      document.removeEventListener('mousemove', doDrag, false);
      document.removeEventListener('mouseup', stopDrag, false);

      const { width, height } = this.state;
      this.setState({ clicked: false });
      setTimeout(() => {
        this.setEntityData({ width, height });
      });

      e.stopPropagation();
      return false;
    };

    document.addEventListener('mousemove', doDrag, false);
    document.addEventListener('mouseup', stopDrag, false);

    this.setState({ clicked: true });
    event.stopPropagation();
    event.preventDefault();
    return false;
  }

  render() {
    const { blockProps, vertical, horizontal } = this.props;
    const { width, height, hoverPosition } = this.state;
    const { isTop, isLeft, isRight, isBottom } = hoverPosition;

    const style = {};

    if (horizontal === 'auto') {
      style.width = 'auto';
    } else if (horizontal === 'relative') {
      style.width = `${(width || blockProps.width || 40)}%`;
    } else if (horizontal === 'absolute') {
      style.width = style.width = `${(width || blockProps.width || 40)}px`;
    }

    if (vertical === 'auto') {
      style.height = 'auto';
    } else if (vertical === 'relative') {
      style.height = `${(height || blockProps.height || 40)}%`;
    } else if (vertical === 'absolute') {
      style.height = `${(height || blockProps.height || 40)}px`;
    }

    // Handle cursor
    if (isRight && isBottom || isLeft && isTop) {
      style.cursor = 'nwse-resize';
    } else if (isRight && isTop || isBottom && isLeft) {
      style.cursor = 'nesw-resize';
    } else if (isRight || isLeft) {
      style.cursor = 'ew-resize';
    } else if (isBottom || isTop) {
      style.cursor = 'ns-resize';
    } else {
      style.cursor = 'default';
    }

    return (
      <WrappedComponent {...this.props} style={style} />
    );
  }
};
