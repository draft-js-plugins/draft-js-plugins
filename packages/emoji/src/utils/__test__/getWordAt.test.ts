import getWordAt from '../getWordAt';

describe('getWordAt', () => {
  it('finds a word in between sentence', () => {
    const expected = {
      word: 'is',
      begin: 5,
      end: 7,
    };
    expect(getWordAt('this is a test', 5)).toEqual(expected);
  });

  it('finds the first word', () => {
    const expected = {
      word: 'this',
      begin: 0,
      end: 4,
    };
    expect(getWordAt('this is a test', 0)).toEqual(expected);
  });

  it('finds the last word', () => {
    const expected = {
      word: 'test',
      begin: 10,
      end: 14,
    };
    expect(getWordAt('this is a test', 15)).toEqual(expected);
  });
});
