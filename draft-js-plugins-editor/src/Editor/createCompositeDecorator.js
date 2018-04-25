// @flow

/**
 * Creates a composite decorator based on the provided plugins
 */

import { List } from 'immutable';
import { CompositeDecorator, EditorState } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';

export default (
  decorators,
  getEditorState: () => EditorState,
  setEditorState: (editorState: EditorState) => void) => {
  const convertedDecorators = List(decorators)
    .map((decorator) => ({
      ...decorator,
      component: decorateComponentWithProps(decorator.component, { getEditorState, setEditorState }),
    }))
    .toJS();

  return new CompositeDecorator(convertedDecorators);
};
