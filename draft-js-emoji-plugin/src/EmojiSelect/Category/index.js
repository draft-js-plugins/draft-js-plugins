import React, { Component } from 'react';

import Entry from '../Entry';

export default class Category extends Component {
  render() {
    console.log(this.props.category.label, this.props.emojis);

    return (
      <div>
        <h3>{this.props.category.label}</h3>
      </div>
    );
  }
}
