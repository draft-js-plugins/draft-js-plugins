import { EditorState, CompositeDecorator } from 'draft-js';

export default (plugins) => {
  const decorators = plugins
    .filter((plugin) => plugin.compositeDecorators !== undefined)
    .flatMap((plugin) => plugin.compositeDecorators);
  const compositeDecorator = new CompositeDecorator(decorators.toJS());
  return EditorState.createEmpty(compositeDecorator);
};
