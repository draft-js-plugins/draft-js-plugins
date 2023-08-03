import { emojiList, toShort, shortnameLookup } from 'emoji-toolkit';
import data from 'emojibase-data/en/compact.json';
import { EmojiShape } from 'packages/emoji/src/constants/type';

export interface EmojiStrategy {
  [x: string]: {
    [x: string]: EmojiShape[];
  };
}

// `toShort` from the toolkit uses a long regular expression that can perform quite poorly.
// We leverage their (incorrectly typed) `shortnameLookup` object to short-circuit the lookup for common Emoji.
function fasterUnicodeToShortname(unicode: string): EmojiShape {
  return (
    (shortnameLookup as unknown as { [unicode: string]: string })[unicode] ||
    toShort(unicode)
  );
}

// Filtering out all non printable characters.
// All the printable characters of ASCII are conveniently in one continuous range
function escapeNonASCIICharacters(str: string): string {
  return str.replace(/[^ -~]+/g, '');
}

export default function createEmojisFromStrategy(): EmojiStrategy {
  const emojis: EmojiStrategy = {};

  for (const item of data) {
    const shortName = fasterUnicodeToShortname(item.unicode);
    const emoji = emojiList[escapeNonASCIICharacters(shortName)];
    if (emoji) {
      if (!emojis[emoji.category]) {
        emojis[emoji.category] = {};
      }
      emojis[emoji.category][shortName] = [shortName];

      if (item.skins) {
        for (const skin of item.skins) {
          const skinShortName = fasterUnicodeToShortname(skin.unicode);
          if (emojiList[skinShortName]) {
            emojis[emoji.category][shortName].push(skinShortName);
          }
        }
      }
    }
  }
  return emojis;
}
