import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let { left, top, width } = this.props;
    const { forceLeft, position, rectGetter, parent } = this.props;

    // Was props.parent set? Query parent element and get its rect
    if (rectGetter) {
      const rect = rectGetter();
      if (rect) {
        left = rect.left;
        top = rect.top;
        width = rect.width;
      }
    } else if (parent) {
      const parentEl = typeof parent === 'string' ? document.querySelector(parent) : parent;

      if (!parentEl) {
        return;
      }

      const rect = parentEl.getBoundingClientRect();
      left = rect.left;
      top = rect.top;
      width = rect.width;
    }

    // Get tooltip ref for width centering
    const ref = ReactDOM.findDOMNode(this.refs.tooltip);
    if (ref) {
      // Should update next time
      this.shouldUpdate = true;
      const refRect = ref.getBoundingClientRect();

      const scrollY = window.scrollY ? window.scrollY : window.pageYOffset;
      const scrollX = window.scrollX ? window.scrollX : window.pageXOffset;

      // Set state
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        top: top - (position === 'left' ? 0 : refRect.height) + scrollY,
        left: forceLeft || (left - (refRect.width / 2) + (width / 2) + scrollX),
        width,
      });
    }
  }

  shouldComponentUpdate(newProps) {
    // Explicitly set to update in componentDidMount
    if (this.shouldUpdate) {
      this.shouldUpdate = false;
      return true;
    }

    // Relevant props changed
    if (this.props.parent !== newProps.parent
      || this.props.top !== newProps.top
      || this.props.left !== newProps.left
      || this.props.width !== newProps.width) {
      this.shouldUpdate = true;
      return true;
    }

    if (this.props.active !== newProps.active) {
      this.shouldUpdate = true;
      return true;
    }

    if (this.props.children !== newProps.children) {
      return true;
    }

    return false;
  }

  componentDidUpdate() {
    if (this.shouldUpdate) {
      this.shouldUpdate = false;
      this.componentDidMount();
    }
  }

  render() {
    // Is server?
    if (typeof window === 'undefined') {
      return null;
    }

    const left = `${this.state.left}px`;
    const top = `${this.state.top + 1}px`;

    const style = {
      transition: 'all .3s ease-in-out, visibility .3s ease-in-out',
      zIndex: 3,
      position: 'absolute',
      left,
      top,
    }

    if (this.props.active === false) {
      style.opacity = 0;
    }

    return (
      <div className="draft-tooltip" ref="tooltip" style={style} {...this.props}>
        {this.props.children}
        <div style={{ backgroundColor: 'transparent', height: '5px', width: '100%', clear: 'both' }} />
      </div>
    );
  }
}

export default Tooltip;
