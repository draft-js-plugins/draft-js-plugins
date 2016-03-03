/**
 * Creates an editor state from a previous editor state and some plugins
 */

import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import createCompositeDecorator from './createCompositeDecorator';

export default (rawContent, plugins) => {
  const compositeDecorator = createCompositeDecorator(plugins);
  const blocks = convertFromRaw(rawContent);
  return EditorState.createWithContent(
    ContentState.createFromBlockArray(blocks),
    compositeDecorator,
  );
};
