import { List } from 'immutable';
import emojioneList from './emojioneList';

const createShortNames = () => {
  const shortNames = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const emoji in emojioneList) {
    // eslint-disable-next-line no-continue, no-prototype-builtins
    if (!emojioneList.hasOwnProperty(emoji)) continue;
    shortNames.push(emoji);
  }

  return shortNames;
};

export default List(createShortNames());
