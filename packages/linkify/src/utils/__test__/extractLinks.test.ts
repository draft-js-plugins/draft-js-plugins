import { extractLinks } from '../extractLinks';

test.each([
  ['test empty string', '', null],
  [
    'text without link',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor, elit eu auctor dapibus, nisi massa ultricies turpis, vitae egestas',
    null,
  ],
  [
    'text with link',
    'Lorem ipsum dolor sit amet, www.google.de consectetur adipiscing elit. Vivamus tempor, elit eu auctor dapibus, nisi massa ultricies turpis, vitae egestas',
    [{ index: 28, lastIndex: 41, raw: 'www.google.de' }],
  ],
])('%s', (_description, text, result) => {
  const match = extractLinks(text);
  expect(
    match
      ? match.map(({ index, lastIndex, raw }) => ({ index, lastIndex, raw }))
      : match
  ).toEqual(result);
});
