import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tooltip from '../utils/tooltip';
import Portal from '../utils/portal';

export default class Toolbar extends Component {
  static defaultProps = {
    actions: [],
    active: true,
  };

  preventDefault = (event) => {
    event.preventDefault();
  };

  toggleAction = (action) => {
    if (action.toggle) {
      action.toggle(action, !action.active);
    }
  };

  renderAction = (action) => {
    const { theme } = this.props;
    const classNames = [theme.get('toolbar-item')];
    if (action.active) {
      classNames.push(theme.get('toolbar-item-active'));
    }

    const toggle = () => this.toggleAction(action);
    return (
      <div key={action.label} className={classNames.join(' ')}>
        <button onClick={toggle} data-tooltip={action.label}>
          {action.icon ? <i className={`${action.icon} icon`}></i> : action.button}
        </button>
      </div>
    );
  };

  render() {
    const { theme, blockProps, active } = this.props;

    const actions = (blockProps && blockProps.actions ? blockProps.actions : this.props.actions) || [];

    if (!active) return null;

    return (
      <Tooltip {...this.props} active={active} group="toolbar">
        <div className={theme.get('toolbar')} onMouseDown={this.preventDefault}>
          {actions.map(this.renderAction)}
        </div>
      </Tooltip>
    );
  }
}

export const renderToolbar = function (props, Component) {
  const method = props.active === false ? Portal.removePortal : Portal.renderPortal
  method({
    ...props,
    Element: Component ? Component : Toolbar
  });
};
