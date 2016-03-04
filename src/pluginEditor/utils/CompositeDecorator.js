/* @noflow */

import { List } from 'immutable';

const DELIMITER = '.';

/**
 * Determine whether we can occupy the specified slice of the decorations
 * array.
 */
function canOccupySlice(
  decorations: Array<?string>,
  start: number,
  end: number
): boolean {
  for (let ii = start; ii < end; ii++) {
    if (decorations[ii] != null) { // eslint-disable-line eqeqeq
      return false;
    }
  }

  return true;
}

/**
 * Splice the specified component into our decoration array at the desired
 * range.
 */
function occupySlice(
  targetArr: Array<?string>,
  start: number,
  end: number,
  componentKey: string
): void {
  for (let ii = start; ii < end; ii++) {
    targetArr[ii] = componentKey; // eslint-disable-line no-param-reassign
  }
}

export default class CompositeDraftDecorator {

  _decorators: Array<Object>;
  _editorContext: any;

  constructor(decorators: Array<any>, editorContext: any) {
    // Copy the decorator array, since we use this array order to determine
    // precedence of decoration matching. If the array is mutated externally,
    // we don't want to be affected here.
    this._decorators = decorators.slice();
    this._editorContext = editorContext;
  }

  getDecorations(block: Object): List<?string> {
    const decorations = Array(block.getText().length).fill(null);

    this._decorators.forEach(
      (/*object*/ decorator, /*number*/ ii) => { // eslint-disable-line spaced-comment
        let counter = 0;
        const strategy = decorator.strategy;
        strategy(
          block,
          (/*number*/ start, /*number*/ end) => { // eslint-disable-line spaced-comment
            // Find out if any of our matching range is already occupied
            // by another decorator. If so, discard the match. Otherwise, store
            // the component key for rendering.
            if (canOccupySlice(decorations, start, end)) {
              occupySlice(decorations, start, end, ii + DELIMITER + counter);
              counter++;
            }
          },

          this._editorContext,
        );
      }
    );

    return List(decorations);
  }

  getComponentForKey(key: string): Function {
    const componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return this._decorators[componentKey].component;
  }

  getPropsForKey(key: string): ?Object {
    const componentKey = parseInt(key.split(DELIMITER)[0], 10);
    return this._decorators[componentKey].props;
  }
}
