import emojiToolkit from 'emoji-toolkit';
import { EmojiShape } from 'packages/emoji/src/constants/type';

interface EmojiListObject {
  [s: string]: EmojiShape[];
}
interface EmojiPriorityListObject {
  [s: string]: string[];
}

interface EmojiList {
  setPriorityList(newPriorityList: EmojiPriorityListObject): void;
  list: EmojiListObject;
}

function newEmojiListWithOutPriorityList(
  priorityList: EmojiPriorityListObject
): EmojiListObject {
  const list: EmojiListObject = {};
  for (const key in emojiToolkit.emojiList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }

    list[key] = [
      {
        shortname: key,
        unicode: emojiToolkit.convert(emojiToolkit.emojiList[key].uc_full),
      },
    ];
  }

  const mappedPriorityList = Object.entries(priorityList).reduce(
    (acc, [shortname, unicodes]) => ({
      ...acc,
      [shortname]: unicodes.map((unicode) => ({
        shortname,
        unicode: emojiToolkit.convert(unicode),
      })),
    }),
    {}
  );

  return { ...mappedPriorityList, ...list };
}

const emojiList: EmojiList = {
  setPriorityList(newPriorityList) {
    this.list = newEmojiListWithOutPriorityList(newPriorityList);
  },
  list: {},
};

// init emojiList
const priorityList: EmojiPriorityListObject = {
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
