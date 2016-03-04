/**
 * Creates a composite decorator with some plugins
 */

import { CompositeDecorator } from 'draft-js-cutting-edge';

export default (plugins) => {
  const decorators = plugins
    .filter((plugin) => plugin.compositeDecorator !== undefined)
    .map((plugin) => plugin.compositeDecorator);
  return new CompositeDecorator(decorators);
};
