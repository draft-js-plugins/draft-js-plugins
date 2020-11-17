import emojiList from './emojiList';

interface MappedUnicodes {
  [x: string]: string;
}

export default function mapUnicode(): MappedUnicodes {
  const unicodes: MappedUnicodes = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const shortname in emojiList.list) {
    if (emojiList.list.hasOwnProperty(shortname)) {
      for (let i = 0, len = emojiList.list[shortname].length; i < len; i += 1) {
        unicodes[emojiList.list[shortname][i]] = shortname;
      }
    }
  }

  return unicodes;
}
