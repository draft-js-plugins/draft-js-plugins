import TextToolbar from './components/text-toolbar';
import { Map } from 'immutable';
import linkStrategy from './linkStrategy';
import Link from './Link';
import styles from './styles.css';
import decorateComponentWithProps from 'decorate-component-with-props';

const defaultTheme = Map({
  ...styles,
});

const toolbarPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    decorators: [
      {
        strategy: linkStrategy,
        component: Link,
      },
    ],
    TextToolbar: decorateComponentWithProps(TextToolbar, { theme }),
    theme,

    // State
  };
};

export default toolbarPlugin;
