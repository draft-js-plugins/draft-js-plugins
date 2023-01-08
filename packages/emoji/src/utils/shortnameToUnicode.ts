import { toShort } from 'emoji-toolkit';
import data from 'emojibase-data/en/compact.json';

const mapShortnameToUnicode: { key: string; value: string }[] = [];

for (const item of data) {
  mapShortnameToUnicode.push({
    key: toShort(item.unicode),
    value: item.unicode,
  });
  if (item.skins) {
    for (const skin of item.skins) {
      mapShortnameToUnicode.push({
        key: toShort(skin.unicode),
        value: skin.unicode,
      });
    }
  }
}

export default function shortnameToUnicode(str: string): string {
  return str.length
    ? // Somehow encoding is different, checking with indexOf instead of === works
      mapShortnameToUnicode.find((x) => x.key.indexOf(str) > -1)?.value || ''
    : '';
}
