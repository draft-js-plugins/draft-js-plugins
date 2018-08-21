const getWordAt = (string, position) => {
  // Perform type conversions.
  const str = String(string);
  // eslint-disable-next-line no-bitwise
  let pos = Number(position) >>> 0;

  // Pos goes to end of word already when mentiontrigger is empty(''),
  // so make sure adjusting pos ONLY when cursor pos is NOT at the end of word.
  if (str.charAt(pos) !== ' ') {
    pos += 1;
  }

  // Search for the word's beginning and end.
  const left = str.slice(0, pos).search(/\S+$/);
  const right = str.slice(pos).search(/\s/);

  // The last word in the string is a special case.
  if (right < 0) {
    return {
      word: str.slice(left),
      begin: left,
      end: str.length,
    };
  }

  // Return the word, using the located bounds to extract it from the string.
  return {
    word: str.slice(left, right + pos),
    begin: left,
    end: right + pos,
  };
};

export default getWordAt;
