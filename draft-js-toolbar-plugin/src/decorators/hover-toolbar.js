import React, { Component } from 'react';
import { renderToolbar } from '../components/toolbar';
import ReactDOM from 'react-dom';

var number = 0;
export default defaultTheme => WrappedComponent => {
  class Wrapper extends Component {
    static pluginOptions = WrappedComponent.pluginOptions;
    static WrappedComponent = WrappedComponent;
    state = {
      hover: false,
      hoverToolbar: false,
    };

    componentDidMount() {
      number = this.number = number++;
      const parentEl = ReactDOM.findDOMNode(this);

      if (!parentEl) {
        return;
      }

      this.DOMNode = parentEl;
      this.DOMNode.addEventListener('mouseover', this.onMouseOver);
      this.DOMNode.parentElement.addEventListener('mouseover', this.onMouseOverParent);
      this.DOMNode.addEventListener('mouseleave', this.onMouseLeave);
    }

    componentWillUnmount() {
      if (this.DOMNode) {
        this.DOMNode.removeEventListener('mouseover', this.onMouseOver);
        this.DOMNode.parentElement.removeEventListener('mouseover', this.onMouseOverParent);
        this.DOMNode.removeEventListener('mouseleave', this.onMouseLeave);
      }
    }

    onMouseOver = (event) => {
      this.setState({ hover: true });
      this._renderToolbar(true);
      event.stopPropagation();
    };

    onMouseOverParent = () => {
      this.setState({ hover: false });
      this._renderToolbar(false);
    };

    onMouseOverToolbar = () => {
      this.setState({ hoverToolbar: true });
    };

    onMouseLeave = () => {
      setTimeout(() => {
        if (!this.state.hoverToolbar) {
          this._renderToolbar(false);
          this.setState({ hover: false });
        }
      }, 1);
    };

    onMouseLeaveToolbar = () => {
      this._renderToolbar(false);
      this.setState({ hoverToolbar: false, hover: false });
    };

    _renderToolbar = (active) => {
      renderToolbar({
        ...this.props,
        theme: this.props.theme || defaultTheme,
        onMouseOver: this.onMouseOverToolbar,
        onMouseLeave: this.onMouseLeaveToolbar,
        parent: this.DOMNode,
        uid: 'toolbar'+this.number,
        active,
      });
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }
  return Wrapper;
}
