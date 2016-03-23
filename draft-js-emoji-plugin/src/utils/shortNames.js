import emojioneList from './emojioneList';
import { List } from 'immutable';

const createShortNames = () => {
  const shortNames = [];
  for (const emoji in emojioneList) {
    if (!emojioneList.hasOwnProperty(emoji)) continue;
    shortNames.push(emoji);
  }

  return shortNames;
};

export default List(createShortNames());
