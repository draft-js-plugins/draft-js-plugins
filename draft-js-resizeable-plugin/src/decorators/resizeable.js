import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const resizeableRatioUtil = (ratio, padding) => ({
  ratioContainerStyle: {
    position: 'relative'
  }, ratioContentStyle: {
    position: 'absolute',
    top: padding ? `-${padding}px` : 0,
    left: padding ? `-${padding}px` : 0,
    bottom: 0,
    right: 0,
    padding: padding ? `${padding}px` : 0
  }, createRatioPlaceholder: () => <div style={{ display: 'block', width: '100%', paddingTop: `${ratio * 100}%` }}></div>
});

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

function round(x, steps) {
  return Math.ceil(x / steps) * steps;
}

// Export
export default options => WrappedComponent => class BlockResizeableDecorator extends Component {
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
    ...options
  };
  state = {
    hoverPosition: {},
    clicked: false,
  };

  setEntityData = data => {
    const { setEntityData } = this.props.blockProps;
    setEntityData(data);
  }

  componentDidMount() {
    this.componentDidUpdate();
  }

  componentWillUpdate() {
    if (this.DOMNode) {
      this.DOMNode.removeEventListener('mouseleave', this.mouseLeave);
      this.DOMNode.removeEventListener('mousemove', this.mouseMove);
      this.DOMNode.removeEventListener('mousedown', this.mouseDown);
    }
  }

  componentDidUpdate() {
    this.DOMNode = ReactDOM.findDOMNode(this);
    const readOnly = this.props.blockProps.pluginEditor.getReadOnly();

    if (!readOnly && this.DOMNode) {
      this.DOMNode.addEventListener('mouseleave', this.mouseLeave);
      this.DOMNode.addEventListener('mousemove', this.mouseMove);
      this.DOMNode.addEventListener('mousedown', this.mouseDown);
    }
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
    const { blockProps, vertical, horizontal, ratio, style } = this.props;
    const { width, height, hoverPosition } = this.state;
    const { isTop, isLeft, isRight, isBottom } = hoverPosition;

    const styles = { position: 'relative', ...style };

    if (horizontal === 'auto') {
      styles.width = 'auto';
    } else if (horizontal === 'relative') {
      styles.width = `${(width || blockProps.entityData.width || 40)}%`;
    } else if (horizontal === 'absolute') {
      styles.width = styles.width = `${(width || blockProps.entityData.width || 40)}px`;
    }

    if (vertical === 'auto') {
      styles.height = 'auto';
    } else if (vertical === 'relative') {
      styles.height = `${(height || blockProps.entityData.height || 40)}%`;
    } else if (vertical === 'absolute') {
      styles.height = `${(height || blockProps.entityData.height || 40)}px`;
    }

    // Handle cursor
    if (isRight && isBottom || isLeft && isTop) {
      styles.cursor = 'nwse-resize';
    } else if (isRight && isTop || isBottom && isLeft) {
      styles.cursor = 'nesw-resize';
    } else if (isRight || isLeft) {
      styles.cursor = 'ew-resize';
    } else if (isBottom || isTop) {
      styles.cursor = 'ns-resize';
    } else {
      styles.cursor = 'default';
    }

    if (ratio) {
      return <WrappedComponent {...this.props} style={styles} {...resizeableRatioUtil(ratio, 3)} />;
    }

    return (
      <WrappedComponent {...this.props} style={styles} />
    );
  }
};
