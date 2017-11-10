import { List } from 'immutable';
import createCompositeDecorator from './createCompositeDecorator';
import MultiDecorator from './MultiDecorator';

// Return true if decorator implements the DraftDecoratorType interface
// @see https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js
const decoratorIsCustom = (decorator) => typeof decorator.getDecorations === 'function' &&
  typeof decorator.getComponentForKey === 'function' &&
  typeof decorator.getPropsForKey === 'function';


const getDecoratorsFromProps = ({ decorators, plugins }) => List(
  [{ decorators }, ...plugins]
).filter((plugin) => plugin.decorators !== undefined)
.flatMap((plugin) => plugin.decorators);

const resolveDecorators = (props, getEditorState, onChange) => {
  const decorators = getDecoratorsFromProps(props);
  const compositeDecorator = createCompositeDecorator(
    decorators.filter((decorator) => !decoratorIsCustom(decorator)),
    getEditorState,
    onChange);

  const customDecorators = decorators
    .filter((decorator) => decoratorIsCustom(decorator));

  return new MultiDecorator(customDecorators.push(compositeDecorator));
};

export default resolveDecorators;
