/**
 * Creates a composite decorator with some plugins
 */

import { List } from 'immutable';
import CompositeDecorator from './CompositeDecorator';

export default (plugins, editorContext) => {
  const decorators = List(plugins)
    .filter((plugin) => plugin.decorators !== undefined)
    .flatMap((plugin) => plugin.decorators)
    .toJS();
  return new CompositeDecorator(decorators, editorContext);
};
