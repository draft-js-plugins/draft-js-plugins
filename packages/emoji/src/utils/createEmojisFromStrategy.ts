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
  const shortname =
    (shortnameLookup as unknown as { [unicode: string]: string })[unicode] ||
    toShort(unicode);
  return { shortname, unicode };
}

// Filtering out all non printable characters.
// All the printable characters of ASCII are conveniently in one continuous range
function escapeNonASCIICharacters(str: string): string {
  return str.replace(/[^ -~]+/g, '');
}

export default function createEmojisFromStrategy(): EmojiStrategy {
  const emojis: EmojiStrategy = {};

  for (const item of data) {
    const emojiShape = fasterUnicodeToShortname(item.unicode);
    const emoji = emojiList[escapeNonASCIICharacters(emojiShape.shortname)];
    if (emoji) {
      if (!emojis[emoji.category]) {
        emojis[emoji.category] = {};
      }
      emojis[emoji.category][emojiShape.shortname] = [emojiShape];

      if (item.skins) {
        for (const skin of item.skins) {
          const skinEmoji = fasterUnicodeToShortname(skin.unicode);
          if (emojiList[skinEmoji.shortname]) {
            emojis[emoji.category][emojiShape.shortname].push(skinEmoji);
          }
        }
      }
    }
  }
  return emojis;
}
