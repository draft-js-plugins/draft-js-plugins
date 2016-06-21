import { expect } from 'chai';
import getSearchTextAt from '../getSearchTextAt';

// Note: getSearchTextAt is not really aware of the matching strategy
//       it's matching everything that's after the trigger and until
//       the cursor (including white spaces, punctuation marks, ...)
//
//       not matching invalid characters is the responsibility of the mentionSuggestionsStrategy
//       so getSearchTextAt should not receive invalid strings
describe('getSearchTextAt', () => {
  it('finds the search text following the trigger', () => {
    const expected = {
      word: 'john',
      begin: 4,
      end: 9,
    };
    expect(getSearchTextAt('hey @john doe how you doing?', 9, '@')).to.deep.equal(expected);
  });

  it('finds the search text preceding the cursor', () => {
    const expected = {
      word: 'jo',
      begin: 4,
      end: 7,
    };
    expect(getSearchTextAt('hey @john doe how you doing?', 7, '@')).to.deep.equal(expected);
  });
});
