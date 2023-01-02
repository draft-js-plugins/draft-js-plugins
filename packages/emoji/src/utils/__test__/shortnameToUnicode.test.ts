import shortnameToUnicode from '../shortnameToUnicode';

describe('shortnameToUnicode', () => {
  test('empty shortname -> default', () => {
    expect(shortnameToUnicode('')).toBe('');
  });
  test('valid shortname -> emoji', () => {
    expect(shortnameToUnicode(':grinning:')).toBe('😀');
    expect(shortnameToUnicode(':thumbsup:')).toBe('👍️');
  });

  test('NOT valid shortname -> emoji', () => {
    expect(shortnameToUnicode(':not_an_emoji:')).toBeUndefined();
  });
});
