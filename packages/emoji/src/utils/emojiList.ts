import emojiToolkit from 'emoji-toolkit';

interface EmojiListObject {
  [s: string]: string[];
}

interface EmojiList {
  setPriorityList(newPriorityList: EmojiListObject): void;
  list: EmojiListObject;
}

function newEmojiListWithOutPriorityList(
  priorityList: EmojiListObject
): EmojiListObject {
  const list: EmojiListObject = {};
  for (const key in emojiToolkit.emojiList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }

    list[key] = [emojiToolkit.emojiList[key].uc_base];
  }

  return { ...priorityList, ...list };
}

const emojiList: EmojiList = {
  setPriorityList(newPriorityList) {
    this.list = newEmojiListWithOutPriorityList(newPriorityList);
  },
  list: {},
};

// init emojiList
const priorityList: EmojiListObject = {
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
emojiList.setPriorityList(priorityList);

export default emojiList;
