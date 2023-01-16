import { toShort } from 'emoji-toolkit';
import data from 'emojibase-data/en/compact.json';
import shortnameToUnicode from '../shortnameToUnicode';

describe('shortnameToUnicode', () => {
  it('should return the correct Unicode value for a given shortname', () => {
    expect(shortnameToUnicode(':smile:')).toEqual('😄');
    expect(shortnameToUnicode(':heart:')).toEqual('❤️');
  });

  it('should return an empty string for an invalid shortname', () => {
    expect(shortnameToUnicode(':invalid:')).toEqual('');
    expect(shortnameToUnicode(':not-a-shortname:')).toEqual('');
  });

  it('should return an empty string for an empty input', () => {
    expect(shortnameToUnicode('')).toEqual('');
  });

  it('should return the correct Unicode value for all emojis', () => {
    data.forEach((item) => {
      const expectedUnicode = item.unicode;
      const shortname = toShort(expectedUnicode);
      expect(shortnameToUnicode(shortname)).toEqual(expectedUnicode);
    });
  });

  // This test case checks if the function can correctly handle the :thumbsup: shortname which contains a utf-16 character and if it can find the correct matching Unicode value for that shortname.
  it('should handle utf-16 strings correctly', () => {
    expect(shortnameToUnicode(':thumbsup:')).toEqual('👍️');
  });
});
