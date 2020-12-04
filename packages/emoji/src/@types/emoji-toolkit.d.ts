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

  let sprites: boolean;
  let imagePathPNG: string;
  let imagePathSVG: string;
  let imagePathSVGSprites: string;
  let imageType: 'png' | 'svg';
  let unicodeAlt: boolean;
  let ascii: boolean;
  let regUnicode: string;
  let cacheBustParam: string;
  let emojiList: EmojiList;
  function toShort(str: string): string;
  function toImage(str: string): string;
  function shortnameToImage(str: string): string;
  function unicodeToImage(str: string): string;
  function shortnameToUnicode(str: string): string;
}
