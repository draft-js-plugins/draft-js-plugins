import { EditorState, ContentState } from 'draft-js';
import createCompositeDecorator from './createCompositeDecorator';

export default (text, plugins) => {
  const compositeDecorator = createCompositeDecorator(plugins);
  return EditorState.createWithContent(
    ContentState.createFromText(text),
    compositeDecorator,
  );
};
