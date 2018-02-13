const emojiToDelete = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'hash',
  'asterisk',
  'keycap_asterisk',
  'keycap_ten',
];

export default emojiToDelete;

export const emojiToDeleteWithColons = emojiToDelete.map((name) => `:${name}:`);
