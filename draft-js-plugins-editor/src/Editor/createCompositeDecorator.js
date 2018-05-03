// @flow

/**
 * Creates a composite decorator based on the provided plugins
 */

import { List } from 'immutable';
import { CompositeDecorator, EditorState } from 'draft-js';
import { type DraftDecorator } from 'draft-js/lib/DraftDecorator';
import decorateComponentWithProps from 'decorate-component-with-props';

export default (
  decorators: List<DraftDecorator>,
  getEditorState: () => EditorState,
  setEditorState: (editorState: EditorState) => void) => {
  const convertedDecorators = decorators
    .map((decorator) => ({
      ...decorator,
      component: decorateComponentWithProps(decorator.component, { getEditorState, setEditorState }),
    })).toArray();

  return new CompositeDecorator(convertedDecorators);
};
