import { EditorState } from 'draft-js';
import createCompositeDecorator from './createCompositeDecorator';

export default (plugins) => {
  const compositeDecorator = createCompositeDecorator(plugins);
  return EditorState.createEmpty(compositeDecorator);
};
