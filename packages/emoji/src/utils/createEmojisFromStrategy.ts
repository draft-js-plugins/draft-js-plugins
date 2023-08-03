import { emojiList, toShort } from 'emoji-toolkit';
import data from 'emojibase-data/en/compact.json';
import { EmojiShape } from 'packages/emoji/src/constants/type';

export interface EmojiStrategy {
  [x: string]: {
    [x: string]: EmojiShape[];
  };
}

// Filtering out all non printable characters.
// All the printable characters of ASCII are conveniently in one continuous range
function escapeNonASCIICharacters(str: string): string {
  return str.replace(/[^ -~]+/g, '');
}

export default function createEmojisFromStrategy(): EmojiStrategy {
  const emojis: EmojiStrategy = {};

  for (const item of data) {
    const shortName = toShort(item.unicode);
    const emoji = emojiList[escapeNonASCIICharacters(shortName)];
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
