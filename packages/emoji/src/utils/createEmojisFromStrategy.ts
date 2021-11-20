import { emojiList, toShort } from 'emoji-toolkit';
import data from 'emojibase-data/en/compact.json';

export interface EmojiStrategy {
  [x: string]: {
    [x: string]: string[];
  };
}

export default function createEmojisFromStrategy(): EmojiStrategy {
  const emojis: EmojiStrategy = {};

  for (const item of data) {
    const shortName = toShort(item.unicode);
    const emoji = emojiList[shortName];
    if (emoji) {
      if (!emojis[emoji.category]) {
        emojis[emoji.category] = {};
      }
      emojis[emoji.category][shortName] = [shortName];

      if (item.skins) {
        for (const skin of item.skins) {
          const skinShortName = toShort(skin.unicode);
          if (emojiList[skinShortName]) {
            emojis[emoji.category][shortName].push(skinShortName);
          }
        }
      }
    }
  }
  return emojis;
}
