import React, { Component } from 'react';

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
    const { theme, actions } = this.props; // eslint-disable-line no-use-before-define

    return (
      <div className={theme.toolbar} onMouseDown={this.preventDefault}>
        {actions.map(this.renderAction)}
      </div>
    );
  }
}
