import React, { Component } from 'react';

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
