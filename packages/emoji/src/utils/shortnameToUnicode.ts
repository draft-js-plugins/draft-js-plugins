import { toShort } from 'emoji-toolkit';
import data from 'emojibase-data/en/compact.json';

const mapShortnameToUnicode: { key: string; value: string }[] = [];

data.forEach((item) => {
  mapShortnameToUnicode.push({
    key: toShort(item.unicode),
    value: item.unicode,
  });
  if (item.skins) {
    item.skins.forEach((skin) => {
      mapShortnameToUnicode.push({
        key: toShort(skin.unicode),
        value: skin.unicode,
      });
    });
  }
});

export default function shortnameToUnicode(str: string): string {
  return str.length
    ? // We need to use localeCompare because the unicode item may be a utf-16 string
      mapShortnameToUnicode.find((x) => str.localeCompare(x.key) === 0)
        ?.value || ''
    : '';
}
