import getSearchTextAt from '../getSearchTextAt';

const trigger = ['@'];

describe('getSearchTextAt', () => {
  it('finds the matching string following trigger', () => {
    const expected = {
      matchingString: 'The Walking Dead',
      begin: 3,
      end: 20,
    };
    expect(getSearchTextAt('hi @The Walking Dead', 20, trigger)).toEqual(
      expected
    );
  });

  it('finds the matching string following trigger upto the position only', () => {
    const expected = {
      matchingString: 'The Walking',
      begin: 3,
      end: 15,
    };
    expect(getSearchTextAt('hi @The Walking Dead', 15, trigger)).toEqual(
      expected
    );
  });

  it('finds the matching string following empty trigger', () => {
    const expected = {
      matchingString: 'Max',
      begin: 0,
      end: 3,
    };
    expect(getSearchTextAt('Max', 3, [''])).toEqual(expected);
  });

  it('finds the matching string even if it contains the trigger', () => {
    const expected = {
      matchingString: 'one@example.c',
      begin: 0,
      end: 14,
    };
    expect(getSearchTextAt('@one@example.c', 14, trigger)).toEqual(expected);
  });

  it('finds the matching string, including trigger, following a trigger', () => {
    const expected = {
      matchingString: 'one@example.c',
      begin: 5,
      end: 19,
    };
    expect(getSearchTextAt('@Max @one@example.c', 19, trigger)).toEqual(
      expected
    );
  });
});
