export interface SearchTextAtResult {
    begin: number;
    end: number;
    matchingString: string;
}
/**
 * Return tail end of the string matching trigger upto the position.
 */
export default function getSearchTextAt(blockText: string, position: number, triggers: string[]): SearchTextAtResult;
