import { expect } from 'chai';
import sinon from 'sinon';
import mentionSuggestionsStrategy from '../mentionSuggestionsStrategy';

let callback;
const mockContentBlock = (str) => ({ getText: () => str });

describe('mentionSuggestionsStrategy', () => {
  beforeEach(() => {
    callback = sinon.spy();
  });

  context('no matter the value of maxWordsSearch', () => {
    it('should match an empty text search', () => {
      const expected = [5, 7];
      const strategy = mentionSuggestionsStrategy('@', 1);
      strategy(mockContentBlock('hello @'), callback);
      expect(callback.callCount).to.equal(1);
      expect(callback.lastCall.args).to.deep.equal(expected);
    });

    it('should not match a text search that starts with a white space', () => {
      const expected = [5, 7];
      const strategy = mentionSuggestionsStrategy('@', 1);
      strategy(mockContentBlock('hello @ john doe'), callback);
      expect(callback.callCount).to.equal(1);
      expect(callback.lastCall.args).to.deep.equal(expected);
    });
  });

  context('with maxWordsSearch disabled', () => {
    it('should not match white spaces', () => {
      const expected = [5, 11];
      const strategy = mentionSuggestionsStrategy('@', 1);
      strategy(mockContentBlock('hello @john doe'), callback);
      expect(callback.callCount).to.equal(1);
      expect(callback.lastCall.args).to.deep.equal(expected);
    });
  });

  context('with maxWordsSearch enabled', () => {
    it('should match at most `maxWordsSearch` words', () => {
      const expected = [5, 20];
      const strategy = mentionSuggestionsStrategy('@', 3);
      strategy(mockContentBlock('hello @john doe and jane and all your friends'), callback);
      expect(callback.callCount).to.equal(1);
      expect(callback.lastCall.args).to.deep.equal(expected);
    });

    it('should match an infinite number of white spaces', () => {
      const expected = [5, 45];
      const strategy = mentionSuggestionsStrategy('@', '');
      strategy(mockContentBlock('hello @john doe and jane and all your friends'), callback);
      expect(callback.callCount).to.equal(1);
      expect(callback.lastCall.args).to.deep.equal(expected);
    });

    it('should not match multiple spaces between words', () => {
      const expected = [5, 12];
      const strategy = mentionSuggestionsStrategy('@', '');
      strategy(mockContentBlock('hello @john  doe'), callback);
      expect(callback.callCount).to.equal(1);
      expect(callback.lastCall.args).to.deep.equal(expected);
    });
  });
});
