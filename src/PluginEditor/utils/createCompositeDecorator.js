/**
 * Creates a composite decorator with some plugins
 */

import { List } from 'immutable';
import { CompositeDecorator } from 'draft-js';

export default (plugins) => {
  const decorators = List(plugins)
    .filter((plugin) => plugin.compositeDecorators !== undefined)
    .flatMap((plugin) => plugin.compositeDecorators)
    .toJS();
  return new CompositeDecorator(decorators);
};
