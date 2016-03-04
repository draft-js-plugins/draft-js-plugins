/**
 * Creates a composite decorator with some plugins
 */

import CompositeDecorator from './CompositeDecorator';

export default (plugins, editorContext) => {
  const decorators = plugins
    .filter((plugin) => plugin.compositeDecorator !== undefined)
    .map((plugin) => plugin.compositeDecorator);
  return new CompositeDecorator(decorators, editorContext);
};
