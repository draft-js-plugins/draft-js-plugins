import React, { Component } from 'react';
import Tooltip from './tooltip';


export default class DraftToolbar extends Component {
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
    const { theme, actions, active } = this.props;

    // const current = toolbars.indexOf(this) === (toolbars.length - 1);
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
