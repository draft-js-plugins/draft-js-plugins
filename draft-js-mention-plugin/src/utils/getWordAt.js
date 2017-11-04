const lastWhiteSpaceExp = /\s$/;
const lastNotWhiteSpaceExp = /\S+$/;
const whiteSpaceOrEndExp = /(\s|$)/;

const getWordAt = (string, position) => {
  let begin, end, word, left, right;
  // Perform type conversions.
  const str = String(string);
  // eslint-disable-next-line no-bitwise
  const pos = Number(position) >>> 0;

  // часть текста до каретки
  const leftSlice = str.slice(0, pos);
  // часть текста после каретки
  const rightSlice = str.slice(pos);

  // Если нет левой части или на конце у неё пробел
  if (leftSlice === "" || lastWhiteSpaceExp.test(leftSlice)) {
    begin = pos;
    // конец слова - или первый пробел или конец строки
    end = rightSlice.search(whiteSpaceOrEndExp);
    word = rightSlice.slice(0, end);
    end += pos;
  // Если нет правой части
  } else if (rightSlice === "") {
    begin = leftSlice.search(lastNotWhiteSpaceExp);
    end = str.length;
    word = str.slice(begin);
  } else {
    left = leftSlice.search(lastNotWhiteSpaceExp);
    // конец слова - или первый пробел или конец строки
    right = rightSlice.search(whiteSpaceOrEndExp);
    word = str.slice(left, right + pos);
    begin = left;
    end = right + pos;
  }

  return {
    word: word,
    begin: begin,
    end: end,
  }
};

export default getWordAt;
