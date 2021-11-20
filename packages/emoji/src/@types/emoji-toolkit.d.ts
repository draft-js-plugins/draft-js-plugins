declare module 'emoji-toolkit' {
  interface EmojiItem {
    category: string;
    shortnames: string[];
    uc_base: string;
    uc_full: string;
  }

  interface EmojiList {
    [x: string]: EmojiItem;
  }

  interface AsciiList {
    [x: string]: string;
  }

  const emojiList: EmojiList;
  const asciiList: AsciiList;
  const asciiRegexp: string;
  const emojiVersion: string;
  const emojiSize: string;
  const blacklistChars: string;
  const imagePathPNG: string;
  const defaultPathPNG: string;
  const fileExtension: string;
  const imageTitleTag: boolean;
  const sprites: boolean;
  const unicodeAlt: boolean;
  const ascii: boolean;
  const riskyMatchAscii: boolean;
  const regAscii: RegExp;
  const regAsciiRisky: RegExp;

  const regUnicode: RegExp;

  function convert(unicode): string;

  const shortnameLookup: string[];
  const altShortNames: string[];
  const unicodeCharRegexCached = null;
  const shortnames: string;
  const regShortNames: RegExp;

  function init(): void;
  function toImage(str): string;
  function unicodeToImage(str): string;
  function unifyUnicode(str: string): string;
  function shortnameToAscii(str: string): string;
  function shortnameToUnicode(str: string): string;
  function shortnameToImage(str: string): string;
  function toShort(str: string): string;
  function escapeHTML(string: string): string;
  function unescapeHTML(string: string): string;
  function shortnameConversionMap(): string;

  function unicodeCharRegex(): string;
  function mapEmojiList(addToMapStorage: () => void): void;
  function mapUnicodeToShort(): Record<string, string>;
  function memorizeReplacement(): void;
  function mapUnicodeCharactersToShort(): string;
  function objectFlip(obj: Record<string, string>): Record<string, string>;
  function escapeRegExp(string: string): string;
  function replaceAll(string: string, find: string): string;
}
