import React, { Component } from 'react';
import shortid from 'shortid';

export default class Nav extends Component {
  render() {
    return (
      <ul>
        {this.props.groups.map((group) => {
          console.log(group);
          return (
            <li key={shortid.generate()}>{group.icon}</li>
          );
        })}
      </ul>
    );
  }
}
