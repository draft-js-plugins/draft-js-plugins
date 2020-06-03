import { expect } from 'chai';
import getSearchTextAt from '../getSearchTextAt';

describe('getSearchTextAt', () => {
  it('finds the matching string following trigger', () => {
    expect(getSearchTextAt('hi @The Walking Dead', 20, ['@'])).to.deep.equal({
      matchingString: 'The Walking Dead',
      begin: 3,
      end: 20,
    });
  });

  it('finds the matching string following trigger upto the position only', () => {
    expect(getSearchTextAt('hi @The Walking Dead', 15, ['@'])).to.deep.equal({
      matchingString: 'The Walking',
      begin: 3,
      end: 15,
    });
  });

  it('finds the matching string following empty trigger', () => {
    expect(getSearchTextAt('Max', 3, [''])).to.deep.equal({
      matchingString: 'Max',
      begin: 0,
      end: 3,
    });
  });

  it('finds the appropriate matching string despite multiple triggers', () => {
    expect(
      getSearchTextAt('one @two three #four five', 20, ['@', '#'])
    ).to.deep.equal({
      matchingString: 'four',
      begin: 15,
      end: 20,
    });
  });
});
