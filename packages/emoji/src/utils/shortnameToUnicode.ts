import { toShort } from 'emoji-toolkit';
import data from 'emojibase-data/en/compact.json';

const mapShortnameToUnicode: Record<string, string> = Object.fromEntries(
  data.map((item) => [toShort(item.unicode), item.unicode])
);

export default function shortnameToUnicode(str: string): string {
  return mapShortnameToUnicode[str];
}
