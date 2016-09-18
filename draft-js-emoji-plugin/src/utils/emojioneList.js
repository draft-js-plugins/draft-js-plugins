import ns from 'emojione';

const newEmojiListWithOutPriorityList = (priorityList) => {
  const list = {};
  for (const key in ns.emojioneList) { // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) { // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }
    list[key] = ns.emojioneList[key].unicode;
  }

  return { ...priorityList, ...list };
};

const emojione = {};

emojione.setPriorityList = (newPriorityList) => {
  // re-generate emojiList when set PriorityList
  emojione.emojioneList = newEmojiListWithOutPriorityList(newPriorityList);
};

// init emojiList
const priorityList = {
  ':thumbsup:': ['1f44d'],
  ':smile:': ['1f604'],
  ':heart:': ['2764-fe0f', '2764'],
  ':ok_hand:': ['1f44c'],
  ':joy:': ['1f602'],
  ':tada:': ['1f389'],
  ':see_no_evil:': ['1f648'],
  ':raised_hands:': ['1f64c'],
  ':100:': ['1f4af'],
};
emojione.setPriorityList(priorityList);

export default emojione;
