export interface SearchTextAtResult {
  begin: number;
  end: number;
  matchingString: string;
}
/**
 * Return tail end of the string matching trigger upto the position.
 */
export default function getSearchTextAt(
  blockText: string,
  position: number,
  triggers: string[]
): SearchTextAtResult {
  const str = blockText.substr(0, position);
  const { begin, index } = triggers
    .map((trigger, triggerIndex) => ({
      begin: trigger.length === 0 ? 0 : str.lastIndexOf(trigger),
      index: triggerIndex,
    }))
    .reduce((left, right) => (left.begin >= right.begin ? left : right));
  const matchingString =
    triggers[index].length === 0
      ? str
      : str.slice(begin + triggers[index].length);
  const end = str.length;

  return {
    begin,
    end,
    matchingString,
  };
}
