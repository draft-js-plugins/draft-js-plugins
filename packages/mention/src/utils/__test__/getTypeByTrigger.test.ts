import getTypeByTrigger from '../getTypeByTrigger';

describe('getTypeByTrigger', () => {
  it('returns "mention" for trigger "@"', () => {
    expect(getTypeByTrigger('@')).toBe('mention');
  });

  it('returns ":mention" for trigger ":"', () => {
    expect(getTypeByTrigger(':')).toBe(':mention');
  });

  it('returns "-mention" for trigger "-"', () => {
    expect(getTypeByTrigger('-')).toBe('-mention');
  });

  it('returns "mention" for trigger "<>"', () => {
    expect(getTypeByTrigger('<>')).toBe('<>mention');
  });
});
