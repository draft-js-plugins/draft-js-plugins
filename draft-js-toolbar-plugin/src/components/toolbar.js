import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tooltip from '../utils/tooltip';
import Portal from '../utils/portal';

export default class Toolbar extends Component {
  static defaultProps = {
    actions: [],
    active: true,
  };

  // PreventDefault helper to swallow clicks on toolbar to not loose focus
  preventDefault = event => {
    event.preventDefault();
  };

  // Action toggle
  toggleAction = action => {
    if (action.toggle) {
      action.toggle(action, !action.active);
    }
  };

  // Render single action buttons
  renderAction = action => {
    const { theme } = this.props;
    const classNames = [theme['toolbar-item']];
    if (action.active) {
      classNames.push(theme['toolbar-item-active']);
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

  // Render
  render() {
    const { theme, blockProps, active, actions } = this.props;

    return (
      <Tooltip {...this.props} active={active}>
        <div className={theme['toolbar']} onMouseDown={this.preventDefault}>
          {actions.map(this.renderAction)}
        </div>
      </Tooltip>
    );
  }
}

// Render the Toolbar or Component with provided props using the Portal
export const renderToolbar = function (props, Component) {
  const method = props.active === false ? Portal.removePortal : Portal.renderPortal
  method({
    ...props,
    Element: Component ? Component : Toolbar
  });
};
