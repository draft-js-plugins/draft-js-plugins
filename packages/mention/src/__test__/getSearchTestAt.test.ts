import getSearchTextAt from '../utils/getSearchTextAt';

describe('getSearchTextAt with triggers within matches', () => {
  test.each([
    ['trigger only', '@', 0, ['@'], { begin: 0, end: 0, matchingString: '' }],
    [
      'second trigger',
      '@one before @',
      13,
      ['@'],
      { begin: 12, end: 13, matchingString: '' },
    ],
    [
      'at first trigger',
      '@one before @',
      4,
      ['@'],
      { begin: 0, end: 4, matchingString: 'one' },
    ],
    [
      'email address trigger',
      '@one@example.c',
      14,
      ['@'],
      { begin: 0, end: 14, matchingString: 'one@example.c' },
    ],
    [
      'email address trigger mid-mention',
      'inviting @one@example.c',
      23,
      ['@'],
      { begin: 9, end: 23, matchingString: 'one@example.c' },
    ],
  ])('%s', (_description, text, position, triggers, result) => {
    expect(getSearchTextAt(text, position, triggers)).toEqual(result);
  });
});
