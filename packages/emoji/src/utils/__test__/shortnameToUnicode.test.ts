import shortnameToUnicode from '../shortnameToUnicode';

describe('shortnameToUnicode', () => {
  it('empty shortname -> undefined', () => {
    expect(shortnameToUnicode('')).toBeUndefined();
  });

  it('invalid shortname -> undefined', () => {
    expect(shortnameToUnicode('obviously not an emoji name')).toBeUndefined();
  });

  it('valid shortname -> emoji', () => {
    expect(shortnameToUnicode(':grinning:')).toBe('😀');
  });
});
