import React, { Component } from 'react';
import shortid from 'shortid';

export default class Nav extends Component {
  render() {
    const {
      theme = {},
      groups,
      activeGroup,
      onGroupSelect,
    } = this.props;

    return (
      <ul className={theme.emojiSelectNav}>
        {groups.map((group, index) => (
          <li key={shortid.generate()} className={theme.emojiSelectNavItem}>
            <button
              className={index === activeGroup ?
                theme.emojiSelectNavEntryActive : theme.emojiSelectNavEntry}
              onClick={() => onGroupSelect(index)}
            >{group.icon}</button>
          </li>
        ))}
      </ul>
    );
  }
}
