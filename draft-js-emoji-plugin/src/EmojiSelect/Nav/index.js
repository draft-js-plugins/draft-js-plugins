import React, { Component } from 'react';
import shortid from 'shortid';

export default class Nav extends Component {
  render() {
    const {
      theme = {},
      groups,
    } = this.props;

    return (
      <ul className={theme.emojiSelectNav}>
        {groups.map((group) => (
          <li key={shortid.generate()} className={theme.emojiSelectNavItem}>
            <button className={theme.emojiSelectNavEntry}>{group.icon}</button>
          </li>
        ))}
      </ul>
    );
  }
}
