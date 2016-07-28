import { shouldRenderToolbar, getToolbarPosition, getToolbarActions } from './utils/textToolbar';
import Decorator from './decorators/toolbar';
import linkStrategy from './linkStrategy';
import Link from './Link';
import styles from './styles.css';
import airToolbarHandler from './air-toolbar';

const toolbarPlugin = (config = {}) => {
  const theme = config.theme || styles;
  const toolbarHandler = config.toolbarHandler || { ...airToolbarHandler, ...config };
  return {
    // Re-Render the text-toolbar onChange (on selection change)
    onChange: (editorState, { setEditorState }) => {
      if (typeof window !== 'undefined') {
        const props = {
          uid: 'text-toolbar',
          actions: getToolbarActions(config, editorState, setEditorState),
          editorState,
          getTargetRectangle: getToolbarPosition,
          setEditorState,
          theme
        };
        if (toolbarHandler.textMode !== 'select' || shouldRenderToolbar(editorState)) {
          toolbarHandler.add(props);
        } else {
          toolbarHandler.remove(props);
        }
      }
      return editorState;
    },
    // Wrap all block-types in hover-toolbar decorator
    // TODO investigate if we can avoid this pattern
    blockRendererFn: (contentBlock, {}) => ({ // eslint-disable-line no-empty-pattern
      props: {
        toolbarHandler
      }
    }),
    decorators: [{
      strategy: linkStrategy,
      component: Link,
    }]
  };
};

export default toolbarPlugin;

export const ToolbarDecorator = (options = {}) => Decorator({ theme: options.theme || styles });
