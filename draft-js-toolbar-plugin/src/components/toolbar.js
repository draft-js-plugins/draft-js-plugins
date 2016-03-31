import React, { Component } from 'react';
import Tooltip from './tooltip';

export default class DraftToolbar extends Component {
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
    const { theme, actions } = this.props;
    return (
      <Tooltip {...this.props}>
        <div className={theme.get('toolbar')} onMouseDown={this.preventDefault}>
          {actions.map(this.renderAction)}
        </div>
      </Tooltip>
    );
  }
}
DraftToolbar.defaultProps = {
  actions: [],
};
