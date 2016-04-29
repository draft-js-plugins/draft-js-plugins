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

    // rectGetter? Get rect!
    if (rectGetter) {
      const rect = rectGetter();
      if (rect) {
        left = rect.left;
        top = rect.top;
        width = rect.width;
      }
    }
    // Was props.parent set? Query parent element and get its rect
    else if (parent) {
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
      const refRect = ref.getBoundingClientRect();
      const scrollY = window.scrollY ? window.scrollY : window.pageYOffset;
      const scrollX = window.scrollX ? window.scrollX : window.pageXOffset;

      // Skip next componentDidUpdate
      this._skip = true;

      // Set state
      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        top: top - (position === 'left' ? 0 : refRect.height) + scrollY,
        left: forceLeft || (left - (refRect.width / 2) + (width / 2) + scrollX),
        width,
      });
    }
  }

  componentDidUpdate() {
    // skip componentDidUpdate if necessary
    if (this._skip){
      return this._skip = false;
    }
    this.componentDidMount();
  }

  render() {
    // Is server?
    if (typeof window === 'undefined') {
      return null;
    }

    // Left/Top
    const left = `${this.state.left}px`;
    const top = `${this.state.top + 1}px`;

    // Style
    const style = {
      transition: 'all .3s ease-in-out, visibility .3s ease-in-out',
      zIndex: 3,
      position: 'absolute',
      left,
      top,
    }

    // If !active => opacity = 0
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
