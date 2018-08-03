import { expect } from 'chai';
import getSearchTextAt from '../getSearchTextAt';

const trigger = '@';

describe('getSearchTextAt', () => {
  it('finds the matching string following trigger', () => {
    const expected = {
      matchingString: 'The Walking Dead',
      begin: 3,
      end: 20,
    };
    expect(getSearchTextAt('hi @The Walking Dead', 20, trigger)).to.deep.equal(expected);
  });

  it('finds the matching string following trigger upto the position only', () => {
    const expected = {
      matchingString: 'The Walking',
      begin: 3,
      end: 15,
    };
    expect(getSearchTextAt('hi @The Walking Dead', 15, trigger)).to.deep.equal(expected);
  });
});