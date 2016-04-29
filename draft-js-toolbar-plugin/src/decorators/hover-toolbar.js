import React, { Component } from 'react';
import { renderToolbar } from '../components/toolbar';
import ReactDOM from 'react-dom';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

var number = 0;

// HoverToolbar decorator will render a toolbar on hovering the WrappedComponent
export default defaultTheme => WrappedComponent => {
  return class HoverToolbarDecorator extends Component {
    // Statics
    static displayName = `HoverToolbar(${getDisplayName(WrappedComponent)})`;
    static pluginOptions = WrappedComponent.pluginOptions;
    static WrappedComponent = WrappedComponent.WrappedComponent || WrappedComponent;

    // Default state
    state = {
      hover: false,
      hoverToolbar: false,
    };

    // Bind listeners on mount
    componentDidMount() {
      // Set this.number to a unique value
      this.number = number = number++;

      // Get this domNode
      const element = ReactDOM.findDOMNode(this);
      if (!element) {
        return;
      }
      // Bind listeners
      this.DOMNode = element;
      this.DOMNode.addEventListener('mouseover', this.showToolbar);
      this.DOMNode.parentElement.addEventListener('mouseover', this.hideToolbar);
      this.DOMNode.addEventListener('mouseleave', this.hideToolbarDelayed);
    }

    // Unbind listeners on unmount
    componentWillUnmount() {
      if (this.DOMNode) {
        this.DOMNode.removeEventListener('mouseover', this.showToolbar);
        this.DOMNode.parentElement.removeEventListener('mouseover', this.hideToolbar);
        this.DOMNode.removeEventListener('mouseleave', this.hideToolbarDelayed);
      }
    }

    // Show the toolbar
    showToolbar = event => {
      this.doRenderToolbar(true);
      if (event) event.stopPropagation();
    };

    // Hide the toolbar
    hideToolbar = () => {
      this.doRenderToolbar(false);
    };

    // If mouse on toolbar
    mouseOverToolbar = event => {
      this._mouseOverToolbar = true;
    };

    // If mouse leaves toolbar
    mouseLeaveToolbar = event => {
      this._mouseOverToolbar = false;
      this.hideToolbar();
    };

    // Hide toolbar after delay and if mouse not on the toolbar
    hideToolbarDelayed = event => {
      setTimeout(() => {
        if (!this._mouseOverToolbar) {
          this.hideToolbar();
        }
      }, 1);
    };

    // Render the actual toolbar
    doRenderToolbar = (active) => {
      renderToolbar({
        ...this.props,
        theme: this.props.theme || defaultTheme,
        onMouseOver: this.mouseOverToolbar,
        onMouseLeave: this.mouseLeaveToolbar,
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
}
