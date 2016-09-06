const getSearchTextAt = (blockText, position, trigger) => {
  const str = blockText.substr(0, position);
  const begin = str.lastIndexOf(trigger);
  const word = str.slice(begin + trigger.length);
  const end = str.length;

  return {
    word,
    begin,
    end
  };
};

export default getSearchTextAt;
