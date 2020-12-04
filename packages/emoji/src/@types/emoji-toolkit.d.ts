declare module 'emoji-toolkit' {
  interface EmojiJsonItem {
    ascii: string[];
    category: string;
    code_points: {
      base: string;
      fully_qualified: string;
      decimal: string;
      diversity_parent: null | string;
      gender_parent: null | string;
    };
    display: number;
    diversity: null | string[];
    diversity_base: number;
    diversity_children: string[];
    gender: string[];
    gender_children: string[];
    humanform: number;
    keywords: string[];
    name: string;
    order: number;
    shortname: string;
    shortname_alternates: string[];
    unicode_version: number;
  }

  interface EmojiJsonList {
    [x: string]: EmojiJsonItem;
  }

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
