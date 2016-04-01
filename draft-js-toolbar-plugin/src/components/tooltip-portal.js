import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default function (WrappedComponent) {
  var portalNodes = {};
  return class TooltipPortal extends Component {
    static defaultProps = {
      active: false,
      group: 'main',
    };

    componentDidMount() {
      if (!this.props.active || typeof window === 'undefined') {
        return;
      }

      this.renderPortal(this.props);
    }

    /*componentWillReceiveProps(nextProps) {
      const { active, group } = this.props;

      if ((!portalNodes[group] && !nextProps.active) ||
        (!active && !nextProps.active)) {
        return;
      }

      if (portalNodes[group] && portalNodes[group].timeout) {
        clearTimeout(portalNodes[group].timeout);
      }

      if (active && !nextProps.active) {
        portalNodes[group].timeout = setTimeout(() => {
          this.renderPortal({ ...nextProps, active: false });
        }, 500);

        return this.renderPortal({ ...nextProps, active: true });
      }

      this.renderPortal(nextProps);
    }*/

    removeThisGroupTip(){
      const { group } = this.props;
      portalNodes[group].tips = portalNodes[group].tips.filter(tip => {
        if (this.props.uid) {
          return tip.props.uid !== this.props.uid;
        } else if (this.props.parent) {
          return tip.props.parent !== this.props.parent;
        } return tip !== this;
      });
      return portalNodes[group].tips;
    }

    componentWillUnmount() {
      const { group } = this.props;
      if (portalNodes[group]) {

        if (portalNodes[group].tips.length > 1) {
          this.removeThisGroupTip();
          // Other tooltip was active, switching
          const item = portalNodes[group].tips[portalNodes[group].tips.length - 1];
          return item.renderPortal(item.props);
        }

        // No other tooltip, fading away..
        this.renderPortal({ ...this.props, active: false });

        // Timeout to switch to next tooltip if necessary
        portalNodes[group].timeout = setTimeout(() => {
          if (portalNodes[group].tips.length === 1) {
            ReactDOM.unmountComponentAtNode(portalNodes[group].el);
            delete portalNodes[group];
          } else {
            this.removeThisGroupTip();
            const item = portalNodes[group].tips[portalNodes[group].tips.length - 1];
            item.renderPortal(item.props);
          }
        }, 500);
      }
    }

    createPortal(group) {
      portalNodes[group] = {
        tips: [],
        el: document.createElement('div'),
        timeout: false,
      };

      document.body.appendChild(portalNodes[group].el);
    }

    renderPortal(props) {
      const { group, clearAll, ...other } = props;

      if (!portalNodes[group]) {
        this.createPortal(group);
      } else if (portalNodes[group].timeout) {
        clearTimeout(portalNodes[group].timeout);
        portalNodes[group].timeout = null;
      }

      portalNodes[group].tips = clearAll ? [this] : [
        ...this.removeThisGroupTip(),
        this,
      ];

      ReactDOM.render(<WrappedComponent {...other} />, portalNodes[group].el);
    }

    shouldComponentUpdate() {
      return false;
    }

    render() {
      return null;
    }
  };
}
