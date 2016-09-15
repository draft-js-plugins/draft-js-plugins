/* eslint-disable */
import ns from 'emojione';
// emojione version 2.1.2
// Original can be found here: https://github.com/Ranks/emojione
const priorityList = {
  ':thumbsup:': ["1f44d"],
  ':smile:': ["1f604"],
  ':heart:': ["2764-fe0f", "2764"],
  ':ok_hand:': ["1f44c"],
  ':joy:': ["1f602"],
  ':tada:': ["1f389"],
  ':see_no_evil:': ["1f648"],
  ':raised_hands:': ["1f64c"],
  ':100:': ["1f4af"],
};
const emojione = {};
emojione.setPriorityList = (priorityList) => {
  emojione.emojioneList = newEmojiListWithOutPriorityList(priorityList); // re-generate emojiList when set PriorityList
};
const newEmojiListWithOutPriorityList = (priorityList) => {
  let list = {};
  for (let key in ns.emojioneList) {
    if (priorityList.hasOwnProperty(key)) {
      continue;
    }
    list[key] = ns.emojioneList[key].unicode;
  }

  return { ...priorityList, ...list };
};

emojione.emojioneList = newEmojiListWithOutPriorityList(priorityList); // init emojiList
export default emojione;


