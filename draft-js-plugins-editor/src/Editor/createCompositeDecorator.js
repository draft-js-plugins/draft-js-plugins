/**
 * Creates a composite decorator based on the provided plugins
 */

import React from 'react';
import { List } from 'immutable';
import { CompositeDecorator } from 'draft-js';

export default (decorators, getEditorState, setEditorState) => {
  const convertedDecorators = List(decorators)
    .map(decorator => {
      const Component = decorator.component;
      const DecoratedComponent = props => (
        <Component
          {...props}
          getEditorState={getEditorState}
          setEditorState={setEditorState}
        />
      );
      return {
        ...decorator,
        component: DecoratedComponent,
      };
    })
    .toJS();

  return new CompositeDecorator(convertedDecorators);
};
