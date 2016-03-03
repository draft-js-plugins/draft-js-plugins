/**
 * Create an editor state with some text in it already
 */

import { EditorState, ContentState } from 'draft-js';
import createCompositeDecorator from './createCompositeDecorator';

export default (text, plugins) => {
  const compositeDecorator = createCompositeDecorator(plugins);
  return EditorState.createWithContent(
    ContentState.createFromText(text),
    compositeDecorator,
  );
};
