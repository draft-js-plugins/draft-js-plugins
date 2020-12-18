import {
  ContentBlock,
  convertFromRaw,
  genKey,
  RawDraftEntity,
  RawDraftEntityRange,
} from 'draft-js';
import emojiSuggestionsStrategy from '../emojiSuggestionsStrategy';

const getBlock = (
  text: string,
  entityRanges: RawDraftEntityRange[] = [],
  entityMap: { [key: string]: RawDraftEntity } = {}
): ContentBlock => {
  const contentState = convertFromRaw({
    blocks: [
      {
        key: genKey(),
        text,
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges,
      },
    ],
    entityMap,
  });
  return contentState.getFirstBlock();
};

describe('test strategy', () => {
  test.each([
    ['testing empty string', '', []],
    ['testing with : inside words', 'test:test', []],
    ['testing with : at start and no text', ':', [[0, 1]]],
    ['testing with : at start and text', ':test', [[0, 5]]],
    ['testing with :', 'Lorem ipsum dolor : sit amet', [[17, 19]]],
    ['testing with : and text', 'Lorem ipsum dolor :test sit amet', [[17, 23]]],
    [
      'testing with : on start and end',
      'Lorem ipsum dolor :test: sit amet',
      [[17, 24]],
    ],
    ['testing with : on end', 'Lorem ipsum dolor test: sit amet', []],
    [
      'testing with multiple : and text',
      'Lorem :test ipsum dolor :test sit : amet :test:',
      [
        [5, 11],
        [23, 29],
        [33, 35],
        [40, 47],
      ],
    ],
  ])('%s', (_description, text, result) => {
    const callback = jest.fn();
    emojiSuggestionsStrategy(getBlock(text), callback);
    expect(callback).toHaveBeenCalledTimes(result.length);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < result.length; ++i) {
      expect(callback).toHaveBeenNthCalledWith(i + 1, ...result[i]);
    }
  });
});
