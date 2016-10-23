import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const resizeableRatioUtil = (ratio, padding) => ({
  ratioContainerStyle: {
    position: 'relative'
  },
  ratioContentStyle: {
    position: 'absolute',
    top: padding ? `-${padding}px` : 0,
    left: padding ? `-${padding}px` : 0,
    bottom: 0,
    right: 0,
    padding: padding ? `${padding}px` : 0
  },
});

// Get a component's display name
const getDisplayName = (WrappedComponent) => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

function round(x, steps) {
  return Math.ceil(x / steps) * steps;
}

// Export
export default (options) => (WrappedComponent) => class BlockResizeableDecorator extends Component {
  static displayName = `BlockDraggable(${getDisplayName(WrappedComponent)})`;
  static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;
  static defaultProps = {
    horizontal: 'relative',
    vertical: false,
    ratio: null,
    resizeSteps: 1,
    handles: false,
    caption: false,
    ...options
  };
  state = {
    hoverPosition: {},
    clicked: false,
  };

  setEntityData = (data) => {
    this.props.blockProps.setEntityData(data);
  }

  mouseLeave = () => {
    if (!this.state.clicked) {
      this.setState({ hoverPosition: {} });
    }
  }

  mouseMove = (evt) => {
    const { vertical, horizontal } = this.props;

    const hoverPosition = this.state.hoverPosition;
    const tolerance = 6;
    // TODO figure out how to achieve this without fetching the DOM node
    // eslint-disable-next-line react/no-find-dom-node
    const pane = ReactDOM.findDOMNode(this);
    const b = pane.getBoundingClientRect();
    const x = evt.clientX - b.left;
    const y = evt.clientY - b.top;

    const isTop = vertical && vertical !== 'auto' ? y < tolerance : false;
    const isLeft = horizontal ? x < tolerance : false;
    const isRight = horizontal ? x >= b.width - tolerance : false;
    const isBottom = vertical && vertical !== 'auto' ? y >= b.height - tolerance && y < b.height : false;

    const canResize = isTop || isLeft || isRight || isBottom;

    const newHoverPosition = {
      isTop, isLeft, isRight, isBottom, canResize
    };
    const hasNewHoverPositions = Object.keys(newHoverPosition).filter(
      (key) => hoverPosition[key] !== newHoverPosition[key]
    );
    if (hasNewHoverPositions.length) {
      this.setState({ hoverPosition: newHoverPosition });
    }
  }

  // Handle mousedown for resizing
  mouseDown = (event) => {
    // No mouse-hover-position data? Nothing to resize!
    if (!this.state.hoverPosition.canResize) {
      return undefined;
    }
    const { resizeSteps, vertical, horizontal } = this.props;
    const { hoverPosition } = this.state;
    const { isTop, isLeft, isRight, isBottom } = hoverPosition;

    // TODO figure out how to achieve this without fetching the DOM node
    // eslint-disable-next-line react/no-find-dom-node
    const pane = ReactDOM.findDOMNode(this);
    const startX = event.clientX;
    const startY = event.clientY;
    const startWidth = parseInt(document.defaultView.getComputedStyle(pane).width, 10);
    const startHeight = parseInt(document.defaultView.getComputedStyle(pane).height, 10);

    // Do the actual drag operation
    const doDrag = (dragEvent) => {
      let width = (startWidth + dragEvent.clientX) - startX;
      let height = (startHeight + dragEvent.clientY) - startY;
      // TODO get the editor ref here
      const block = pane.parentElement.parentElement;
      width = block.clientWidth < width ? block.clientWidth : width;
      height = block.clientHeight < height ? block.clientHeight : height;

      const widthPerc = (100 / block.clientWidth) * width;
      const heightPerc = (100 / block.clientHeight) * height;

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
      // TODO clean up event listeners
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

    // TODO clean up event listeners
    document.addEventListener('mousemove', doDrag, false);
    document.addEventListener('mouseup', stopDrag, false);

    this.setState({ clicked: true });
    event.stopPropagation();
    event.preventDefault();
    return false;
  }

  render() {
    const { blockProps, vertical, horizontal, ratio, style } = this.props;
    const { width, height, hoverPosition } = this.state;
    const { isTop, isLeft, isRight, isBottom } = hoverPosition;

    const styles = { position: 'relative', ...style };

    if (horizontal === 'auto') {
      styles.width = 'auto';
    } else if (horizontal === 'relative') {
      styles.width = `${(width || blockProps.entityData.width || 40)}%`;
    } else if (horizontal === 'absolute') {
      styles.width = `${(width || blockProps.entityData.width || 40)}px`;
    }

    if (vertical === 'auto') {
      styles.height = 'auto';
    } else if (vertical === 'relative') {
      styles.height = `${(height || blockProps.entityData.height || 40)}%`;
    } else if (vertical === 'absolute') {
      styles.height = `${(height || blockProps.entityData.height || 40)}px`;
    }

    // Handle cursor
    if ((isRight && isBottom) || (isLeft && isTop)) {
      styles.cursor = 'nwse-resize';
    } else if ((isRight && isTop) || (isBottom && isLeft)) {
      styles.cursor = 'nesw-resize';
    } else if (isRight || isLeft) {
      styles.cursor = 'ew-resize';
    } else if (isBottom || isTop) {
      styles.cursor = 'ns-resize';
    } else {
      styles.cursor = 'default';
    }

    if (ratio) {
      return (
        <WrappedComponent
          {...this.props}
          onMouseDown={this.mouseDown}
          onMouseMove={this.mouseMove}
          onMouseLeave={this.mouseLeave}
          ref={(element) => { this.wrapper = element; }}
          style={styles}
          {...resizeableRatioUtil(ratio, 3)}
        />
      );
    }

    // TODO make sure resize doesn't work in readOnly mode
    return (
      <WrappedComponent
        {...this.props}
        onMouseDown={this.mouseDown}
        onMouseMove={this.mouseMove}
        onMouseLeave={this.mouseLeave}
        ref={(element) => { this.wrapper = element; }}
        style={styles}
      />
    );
  }
};
