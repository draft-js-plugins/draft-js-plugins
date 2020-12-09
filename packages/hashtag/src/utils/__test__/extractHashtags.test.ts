import { extractHashtagsWithIndices } from '../extractHashtags';

test.each([
  ['test empty string', '', []],
  [
    'text without link',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor, elit eu auctor dapibus, nisi massa ultricies turpis, vitae egestas',
    [],
  ],
  [
    'text with link',
    'Lorem ipsum dolor sit amet, #test consectetur adipiscing elit. Vivamus tempor, elit eu auctor dapibus, nisi massa ultricies turpis, vitae egestas',
    [{ indices: [28, 33], hashtag: 'test' }],
  ],
])('%s', (_description, text, result) => {
  expect(extractHashtagsWithIndices(text)).toEqual(result);
});
