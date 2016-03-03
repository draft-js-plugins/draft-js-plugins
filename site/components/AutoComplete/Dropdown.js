import React, { Component, PropTypes } from 'react';

export default class Dropdown extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    return (
      <div className="dropdown-container">
          <div className="dropdown-item-container" style={this.props.style}>
            {this.props.children}
          </div>
      </div>
    );
  }
}
