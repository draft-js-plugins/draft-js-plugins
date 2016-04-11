import TextToolbar from './components/text-toolbar';
import { Map } from 'immutable';
import linkStrategy from './linkStrategy';
import Link from './Link';
import styles from './styles.css';
import decorateComponentWithProps from 'decorate-component-with-props';
import hoverToolbar from './components/hover-toolbar';

const defaultTheme = Map({
  ...styles,
});

const toolbarPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    blockRendererFn: (contentBlock, { }) => ({
      props: {
        HoverToolbar: hoverToolbar,
      },
    }),
    decorators: [
      {
        strategy: linkStrategy,
        component: Link,
      },
    ],
    TextToolbar: decorateComponentWithProps(TextToolbar, { theme }),
    theme,
  };
};

export default toolbarPlugin;
export const HoverToolbar = hoverToolbar;
