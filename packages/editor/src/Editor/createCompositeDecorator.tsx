/**
 * Creates a composite decorator based on the provided plugins
 */

import React, { ReactElement } from 'react';
import { List } from 'immutable';
import { CompositeDecorator, DraftDecorator, EditorState } from 'draft-js';

export default function createCompositeDecorator(
  decorators: Immutable.List<DraftDecorator>,
  getEditorState: () => EditorState,
  setEditorState: (state: EditorState) => void
): CompositeDecorator {
  const convertedDecorators = List(decorators)
    .map((decorator) => {
      const Component = decorator!.component;
      const DecoratedComponent = (props: unknown): ReactElement => (
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
}
