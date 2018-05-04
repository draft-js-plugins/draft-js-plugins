// @flow

import { type DraftDecoratorType } from 'draft-js/lib/DraftDecoratorType';
import { type DraftDecorator } from 'draft-js/lib/DraftDecorator';
import { EditorState } from 'draft-js';
import { List } from 'immutable';

import createCompositeDecorator from './createCompositeDecorator';
import MultiDecorator from './MultiDecorator';
import { type EditorProps } from '../';

// Return true if decorator implements the DraftDecoratorType interface
// @see https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js
// $FlowFixMe
const decoratorIsCustom = (decorator: DraftDecorator|DraftDecoratorType): boolean => (
  decorator.getDecorations != null &&
  decorator.getComponentForKey != null &&
  decorator.getPropsForKey != null);

const getDecoratorsFromProps = ({ decorators, plugins }): List<DraftDecorator|DraftDecoratorType> => List(
  [{ decorators }].concat(plugins != null ? plugins : [])
).flatMap((plugin) => (plugin.decorators != null ? plugin.decorators : []));

const resolveDecorators = (
  props: EditorProps,
  getEditorState: () => EditorState,
  setEditorState: (EditorState) => void
): MultiDecorator => {
  const decorators = getDecoratorsFromProps(props);

  // $FlowFixMe - filter isn't refining types :/
  const normalDecorators: List<DraftDecorator> = decorators
    .filter((decorator) => !decoratorIsCustom(decorator));

  // DraftDecoratorType and CompositeDecorator does overlap but has
  // but has some writable instead of readOnly properties :/
  // $FlowFixMe
  const compositeDecorator: DraftDecoratorType = createCompositeDecorator(
    normalDecorators,
    getEditorState,
    setEditorState);

  // $FlowFixMe - Again - filter isn't refining types :/
  const customDecorators: List<DraftDecoratorType> = decorators
    .filter((decorator) => decoratorIsCustom(decorator));

  return new MultiDecorator(customDecorators.push(compositeDecorator));
};

export default resolveDecorators;
