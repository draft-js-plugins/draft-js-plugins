import shortnameToUnicode from '../shortnameToUnicode';

describe('shortnameToUnicode', () => {
  test('empty shortname -> undefined', () => {
    expect(shortnameToUnicode('')).toBe('');
  });

  test('valid shortname -> emoji', () => {
    expect(shortnameToUnicode(':grinning:')).toBe('😀');
  });

  test('valid shortname -> emoji', () => {
    expect(shortnameToUnicode(':thumbsup:')).toBe('👍');
  });
});
