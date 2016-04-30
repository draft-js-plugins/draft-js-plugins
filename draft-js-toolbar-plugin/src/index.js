import { renderTextToolbar } from './components/text-toolbar';
import Decorator from './decorators/hover-toolbar';
import linkStrategy from './linkStrategy';
import Link from './Link';
import styles from './styles.css';

const defaultTheme = {
  ...styles,
};

const toolbarPlugin = config => {
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    // Re-Render the text-toolbar onChange (on selection change)
    onChange: (editorState, { setEditorState }) => {
      renderTextToolbar({ editorState, active: true, setEditorState, theme });
      return editorState;
    },
    // Wrap all block-types in hover-toolbar decorator
    blockRendererFn: (contentBlock, { }) => ({
      decorators: [Decorator(theme)]
    }),
    // Add linkStrategy decorator to draft ediotr
    decorators: [{
      strategy: linkStrategy,
      component: Link,
    }]
  };
};

export default toolbarPlugin;
