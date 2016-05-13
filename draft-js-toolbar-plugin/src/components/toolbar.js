import React, { Component } from 'react';

export default class Toolbar extends Component {
  static contextTypes = {
    toolbarTheme: React.PropTypes.object
  }

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
    const { toolbarTheme } = this.context;
    const { theme } = this.props;
    const styles = toolbarTheme || theme;

    const classNames = [styles['toolbar-item']];
    if (action.active) {
      classNames.push(styles['toolbar-item-active']);
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
    const { toolbarTheme } = this.context;
    const styles = toolbarTheme || theme;

    return (
      <div className={styles.toolbar} onMouseDown={this.preventDefault}>
        {actions.map(this.renderAction)}
      </div>
    );
  }
}
