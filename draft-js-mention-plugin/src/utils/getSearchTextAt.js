/* @flow */

/**
 * Return tail end of the string matching trigger upto the position.
 */
export default (blockText: string, position: number, trigger: string) => {
  const str = blockText.substr(0, position);
  const begin = str.lastIndexOf(trigger);
  const matchingString = str.slice(begin + trigger.length);
  const end = str.length;

  return {
    begin,
    end,
    matchingString
  };
};
