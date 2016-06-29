import React, { Component } from 'react';

export default class Toolbar extends Component {
  static contextTypes = {
    toolbarTheme: React.PropTypes.object
  }

  static defaultProps = {
    actions: [],
  };

  // PreventDefault helper to swallow clicks on toolbar to not loose focus
  preventDefault = event => {
    event.preventDefault();
  };

  // Render single action buttons
  renderAction = (ActionComponent, index) => {
    const { toolbarTheme } = this.context;
    const { theme } = this.props;
    const styles = toolbarTheme || theme;

    const classNames = [styles['toolbar-item']];

    return (
      <div key={index} className={classNames.join(' ')}>
          <ActionComponent />
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
