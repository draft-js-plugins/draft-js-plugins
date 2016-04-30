import { shouldRenderToolbar, getToolbarPosition, getToolbarActions } from './utils/textToolbar';
import DecoratorHover from './decorators/hover-toolbar';
import DecoratorFocused from './decorators/focused-toolbar';
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

  if (config.animations === false) {
    airToolbarHandler.animations = false;
  }

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
      if (toolbarHandler.textMode !== 'select' || shouldRenderToolbar(editorState)) {
        toolbarHandler.add(props);
      } else {
        toolbarHandler.remove(props);
      }
      return editorState;
    },
    // Wrap all block-types in hover-toolbar decorator
    blockRendererFn: (contentBlock, { }) => ({
      decorators: [(toolbarHandler.blockMode === 'hover' ? DecoratorHover : DecoratorFocused)(
        theme,
        toolbarHandler
      )],
    }),
    // Add linkStrategy decorator to draft ediotr
    decorators: [{
      strategy: linkStrategy,
      component: Link,
    }]
  };
};

export default toolbarPlugin;
