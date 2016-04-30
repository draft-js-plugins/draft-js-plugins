import { shouldRenderToolbar, getToolbarPosition, getToolbarActions } from './utils/textToolbar';
import Decorator from './decorators/hover-toolbar';
import linkStrategy from './linkStrategy';
import Link from './Link';
import styles from './styles.css';
import airToolbarHandler from './air-toolbar';

const defaultTheme = {
  ...styles,
};

const toolbarPlugin = config => {
  const theme = config.theme ? config.theme : defaultTheme;
  const toolbarHandler = config.toolbarHandler || airToolbarHandler;

  return {
    // Re-Render the text-toolbar onChange (on selection change)
    onChange: (editorState, { setEditorState }) => {
      const props = {
        uid: 'text-toolbar',
        actions: getToolbarActions(config, editorState, setEditorState),
        editorState,
        getTargetRectangle: getToolbarPosition,
        setEditorState,
        theme
      };
      if (shouldRenderToolbar(editorState)) {
        toolbarHandler.add(props);
      } else {
        toolbarHandler.remove(props);
      }
      return editorState;
    },
    // Wrap all block-types in hover-toolbar decorator
    blockRendererFn: (contentBlock, { }) => ({
      decorators: [Decorator(theme, toolbarHandler)]
    }),
    // Add linkStrategy decorator to draft ediotr
    decorators: [{
      strategy: linkStrategy,
      component: Link,
    }]
  };
};

export default toolbarPlugin;
