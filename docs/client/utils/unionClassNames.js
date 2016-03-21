/**
 * Returns the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
 *
 * @param {...array} arrs - at least two iterable objects must be provide
 */
const union = (...arrs) => {
  if (arrs) {
    const result = [];
    arrs.forEach((arr) => {
      if (arr) {
        arr.forEach((obj) => {
          if (result.indexOf(obj) < 0) {
            result.push(obj);
          }
        });
      }
    });
    return result;
  }

  return undefined;
};

/**
 * Returns a string containing all classes without duplicates.
 *
 * @param existingClassNames {String} - one or multiple classes
 * @param additionalClassNames {String} - one or multiple classes
 *
 * @example
 * // returns 'style-id-23 button buy-button'
 * unionClassNames('style-id-23 button', 'button buy-button')
 *
 * Originally inspired by https://github.com/rackt/react-autocomplete/blob/master/lib/union-class-names.js
 */
export default function unionClassNames(existingClassNames, additionalClassNames) {
  if (!existingClassNames && !additionalClassNames) return '';
  if (!existingClassNames) return additionalClassNames;
  if (!additionalClassNames) return existingClassNames;
  return union(existingClassNames.split(' '), additionalClassNames.split(' ')).join(' ');
}
