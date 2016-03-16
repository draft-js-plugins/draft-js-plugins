import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <IndexLink to="/" activeClassName={'wow'}>Home</IndexLink>
          <Link to="/about" activeClassName={'that'}>About</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
