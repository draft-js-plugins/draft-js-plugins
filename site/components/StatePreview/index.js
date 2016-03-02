import React, { Component } from 'react';
import styles from './styles';

export default class StatePreview extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
    this.toggleCollapsedCode = this.toggleCollapsedCode.bind(this);
  }

  toggleCollapsedCode() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const codeStyle = {
      ...styles.code,
      height: (this.state.collapsed ? 0 : '30em'),
      padding: (this.state.collapsed ? 0 : 10 ),
      transition: (this.state.collapsed ?
        'height 150ms ease-in, padding 0ms 150ms' :
        'height 150ms ease-out, padding 0ms 0ms' )
    };

    const headerStyle = {
      borderBottom: (this.state.collapsed ? '0px solid transparent' : '1px solid #ddd'),
      transition: (this.state.collapsed ?
        'border-width 0ms 150ms, border-color 0ms 150ms' :
        'border-width 0ms 0ms, border-color 0ms 0ms' )
    };

    return (
      <div style={ styles.root }>
        <div style={ headerStyle }>
          <button
            onClick={ this.toggleCollapsedCode }
            style={ styles.collapseButton }
          >
            <span style={ styles.headerTitle }>State</span>
            <span style={ styles.collapseArrow }>
              { (this.state.collapsed ? '▼' : '▲') }
            </span>
          </button>
        </div>
        <pre style={ codeStyle }>
          { JSON.stringify(this.props.editorState.getCurrentContent().toJS(), null, 2) }
        </pre>
      </div>
    );
  }
}
