import React, { Component } from 'react';
import Portal from 'react-portal';
import ReactDOM from 'react-dom';

export default class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let { left, top, width } = this.props;
    const { forceLeft, position } = this.props;

    // Was props.parent set? Query parent element and get its rect
    if (this.props.parent) {
      const parentEl = document.querySelector(this.props.parent);

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
        top: top - (position === 'left' ? 0 : refRect.height) + scrollY - (position === 'left' ? 0 : 5),
        left: forceLeft || (left - (refRect.width / 2) + (width / 2) + scrollX),
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
    if (typeof window === 'undefined' || this.props.active === false) {
      return null;
    }

    const left = `${this.state.left}px`;
    const top = `${this.state.top}px`;

    return (
      <Portal isOpened>
        <div {...this.props} className="draft-tooltip" ref="tooltip" style={{ zIndex: 3, position: 'absolute', left, top }}>
          {this.props.children}
        </div>
      </Portal>
    );
  }
}
