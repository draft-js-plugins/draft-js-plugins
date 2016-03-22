/**
 * Creates a composite decorator based on the provided plugins
 */

import { List } from 'immutable';
import { CompositeDecorator } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';

export default (plugins, getEditorState, updateEditorState) => {
  const decorators = List(plugins)
    .filter((plugin) => plugin.decorators !== undefined)
    .flatMap((plugin) => plugin.decorators)
    .map((decorator) => ({
      ...decorator,
      component: decorateComponentWithProps(decorator.component, { getEditorState, updateEditorState }),
    }))
    .toJS();

  return new CompositeDecorator(decorators);
};
