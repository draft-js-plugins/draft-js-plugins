/* @flow */

/**
 * Return tail end of the string matching trigger upto the position.
 */
export default (blockText: string, position: number, trigger: string) => {
  const str = blockText.substr(0, position);
  const begin = trigger.length === 0 ? 0 : str.lastIndexOf(trigger);
  const matchingString = trigger.length === 0 ? str : str.slice(begin + trigger.length);
  const end = str.length;

  return {
    begin,
    end,
    matchingString
  };
};
