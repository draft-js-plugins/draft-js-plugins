// Original can be found here: https://github.com/Ranks/emojione
export default function convertShortNameToUnicode(unicode: string): string {
  if (unicode.indexOf('-') > -1) {
    const parts: string[] = [];
    const s = unicode.split('-');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < s.length; i++) {
      const part = parseInt(s[i], 16);
      let charCodes: string;
      if (part >= 0x10000 && part <= 0x10ffff) {
        const hi = Math.floor((part - 0x10000) / 0x400) + 0xd800;
        const lo = ((part - 0x10000) % 0x400) + 0xdc00;
        charCodes = String.fromCharCode(hi) + String.fromCharCode(lo);
      } else {
        charCodes = String.fromCharCode(part);
      }

      parts.push(charCodes);
    }

    return parts.join('');
  }
  const s = parseInt(unicode, 16);
  if (s >= 0x10000 && s <= 0x10ffff) {
    const hi = Math.floor((s - 0x10000) / 0x400) + 0xd800;
    const lo = ((s - 0x10000) % 0x400) + 0xdc00;
    return String.fromCharCode(hi) + String.fromCharCode(lo);
  }
  return String.fromCharCode(s);
}
