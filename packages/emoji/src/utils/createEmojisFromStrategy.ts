/* Idea from https://github.com/tommoor/emojione-picker */

import { EmojiList } from 'emoji-toolkit';

export interface EmojiStrategy {
  [x: string]: {
    [x: string]: string[];
  };
}

export default function createEmojisFromStrategy(
  strategy: EmojiList
): EmojiStrategy {
  const emojis: EmojiStrategy = {};

  // categorise and nest emoji
  // sort ensures that modifiers appear unmodified keys
  Object.keys(strategy).forEach((key) => {
    const { category } = strategy[key];

    // skip unknown categories
    if (category !== 'modifier') {
      if (!emojis[category]) {
        emojis[category] = {};
      }
      const match = key.match(/(.*?)_tone(.*?):$/);

      let index = 0;
      let _key: string = key;
      let _value: string = key;

      if (match) {
        // this check is to stop the plugin from failing in the case that the
        // emoji strategy miscategorizes tones - which was the case here:
        // https://github.com/Ranks/emojione/pull/330
        _key = `${match[1]}:`;
        index = parseInt(match[2], 10);
        _value = key;
      }
      if (!emojis[category][_key]) {
        emojis[category][_key] = [];
      }
      emojis[category][_key][index] = _value;
    }
  });
  // remove empty shortnames
  Object.keys(emojis).forEach((category) => {
    Object.keys(emojis[category]).forEach((shortName) => {
      if (!emojis[category][shortName][0]) {
        delete emojis[category][shortName];
      }
    });
  });

  return emojis;
}
