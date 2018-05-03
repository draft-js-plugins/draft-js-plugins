// @flow

import { type DraftDecoratorType } from 'draft-js/lib/DraftDecoratorType';
import { EditorState } from 'draft-js';
import { List } from 'immutable';

import createCompositeDecorator from './createCompositeDecorator';
import MultiDecorator from './MultiDecorator';
import { type EditorProps } from '../';

// Return true if decorator implements the DraftDecoratorType interface
// @see https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js
const decoratorIsCustom = (decorator: Object): boolean => (typeof decorator.getDecorations === 'function' &&
  typeof decorator.getComponentForKey === 'function' &&
  typeof decorator.getPropsForKey === 'function');

const getDecoratorsFromProps = ({ decorators, plugins }): List<DraftDecoratorType> => List(
  [{ decorators }].concat(plugins != null ? plugins : [])
).flatMap((plugin) => (plugin.decorators != null ? plugin.decorators : []));

const resolveDecorators = (
  props: EditorProps,
  getEditorState: () => EditorState,
  setEditorState: (EditorState) => void
): MultiDecorator => {
  const decorators = getDecoratorsFromProps(props);

  const compositeDecorator = createCompositeDecorator(
    decorators.filter((decorator) => !decoratorIsCustom(decorator)),
    getEditorState,
    setEditorState);

  const customDecorators = decorators
    .filter((decorator) => decoratorIsCustom(decorator));

  return new MultiDecorator(customDecorators.push(compositeDecorator));
};

export default resolveDecorators;
