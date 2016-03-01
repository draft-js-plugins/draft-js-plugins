import { EditorState, CompositeDecorator } from 'draft-js';

export default (plugins) => {
  const decorators = plugins
    .filter((plugin) => plugin.compositeDecorator !== undefined)
    .map((plugin) => plugin.compositeDecorator);
  const compositeDecorator = new CompositeDecorator(decorators.toJS());
  return EditorState.createEmpty(compositeDecorator);
};
