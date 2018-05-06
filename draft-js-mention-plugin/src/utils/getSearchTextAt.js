/* @flow */

/**
 * Return tail end of the string matching mentionTrigger upto the position.
 */
export default (blockText: string, position: number, mentionTrigger: string) => {
  const str = blockText.substr(0, position);
  const begin = str.lastIndexOf(mentionTrigger);
  const matchingString = str.slice(begin + mentionTrigger.length);
  const end = str.length;

  const data = {
    begin,
    end,
    matchingString
  };

  return data;
};
