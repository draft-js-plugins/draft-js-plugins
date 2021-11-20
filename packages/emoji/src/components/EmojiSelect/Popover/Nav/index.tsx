import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Entry from './Entry';
import { EmojiPluginTheme, EmojiSelectGroup } from '../../../../index';

interface NavParams {
  theme: EmojiPluginTheme;
  groups: EmojiSelectGroup[];
  activeGroup: number;
  onGroupSelect(index: number): void;
}

const Nav = ({
  theme = {},
  groups,
  activeGroup,
  onGroupSelect,
}: NavParams): ReactElement => (
  <ul className={theme.emojiSelectPopoverNav}>
    {groups.map((group, index) => (
      <li
        key={
          `nav-group#${index}[${group.categories.join(',')}]` // eslint-disable-line react/no-array-index-key
        }
        className={theme.emojiSelectPopoverNavItem}
      >
        <Entry
          theme={theme}
          groupIndex={index}
          isActive={index === activeGroup}
          icon={group.icon}
          onGroupSelect={onGroupSelect}
        />
      </li>
    ))}
  </ul>
);

Nav.propTypes = {
  theme: PropTypes.object.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeGroup: PropTypes.number.isRequired,
  onGroupSelect: PropTypes.func.isRequired,
};

export default Nav;
