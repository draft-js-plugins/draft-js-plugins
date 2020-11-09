import {
  genKey,
  convertFromRaw,
  ContentBlock,
  RawDraftEntity,
  RawDraftEntityRange,
} from 'draft-js';
import mentionSuggestionsStrategy from '../../mentionSuggestionsStrategy';
import defaultRegExp from '../../defaultRegExp';

const trigger = '@';
const nonWhitespaceStrategy = mentionSuggestionsStrategy(
  trigger,
  false,
  defaultRegExp
);
const whitespaceStrategy = mentionSuggestionsStrategy(
  trigger,
  true,
  defaultRegExp
);
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

describe('when whitespace support is disabled', () => {
  it('should match a word', () => {
    const callback = jest.fn();
    nonWhitespaceStrategy(getBlock('@the'), callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenNthCalledWith(1, 0, 4);
  });

  it('should match a word with special characters', () => {
    const callback = jest.fn();
    nonWhitespaceStrategy(getBlock('@ęĻŌ'), callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenNthCalledWith(1, 0, 4);
  });

  it('should match not match spaces', () => {
    const callback = jest.fn();
    nonWhitespaceStrategy(getBlock('@the walking dead'), callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenNthCalledWith(1, 0, 4);
  });

  it('should match multiple mentions', () => {
    const callback = jest.fn();
    nonWhitespaceStrategy(getBlock('@the @walking @dead'), callback);
    expect(callback).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenNthCalledWith(1, 0, 4);
    expect(callback).toHaveBeenNthCalledWith(2, 4, 13);
    expect(callback).toHaveBeenNthCalledWith(3, 13, 19);
  });
});

describe('when whitespace support is enabled', () => {
  it('should match a word', () => {
    const callback = jest.fn();
    whitespaceStrategy(getBlock('@the'), callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenNthCalledWith(1, 0, 4);
  });

  it('should match a word trailing space', () => {
    const callback = jest.fn();
    whitespaceStrategy(getBlock('@the '), callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenNthCalledWith(1, 0, 5);
  });

  it('should match multiple mentions with spaces', () => {
    const callback = jest.fn();
    whitespaceStrategy(
      getBlock('@the walking dead tv @the white house'),
      callback
    );
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenNthCalledWith(1, 0, 21);
    expect(callback).toHaveBeenNthCalledWith(2, 21, 37);
  });

  it('should match multiple mentions with spaces and special characters', () => {
    const callback = jest.fn();
    whitespaceStrategy(getBlock('@Thomas Müller @Mario Götze'), callback);
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenNthCalledWith(1, 0, 15);
    expect(callback).toHaveBeenNthCalledWith(2, 15, 27);
  });

  it('should not match entities', () => {
    const callback = jest.fn();
    const key = genKey();
    whitespaceStrategy(
      getBlock(
        '@the walking dead tv the white house',
        [
          {
            key: (key as unknown) as number,
            offset: 20,
            length: 15,
          },
        ],
        {
          [key]: {
            type: 'mention',
            mutability: 'IMMUTABLE',
            data: {},
          },
        }
      ),
      callback
    );
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenLastCalledWith(0, 20);
  });
});
