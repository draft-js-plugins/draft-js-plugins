import decorateComponentWithProps from 'decorate-component-with-props';
import Link from './Link';
import LinkAdd from './LinkAdd';
import linkStrategy from './linkStrategy';
import linkifyStrategy from './linkifyStrategy';
import styles from './styles.css';

const defaultTheme = {
  link: styles.link,
};

const linkPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.

  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  const {
    component,
    theme = defaultTheme,
    target = '_self',
  } = config;

  return {
    decorators: [
      {
        strategy: linkifyStrategy,
        component: decorateComponentWithProps(Link, { theme, target, component }),
      },
      {
        strategy: linkStrategy,
        component: decorateComponentWithProps(Link, { theme, target, component }),
      },
    ],
    LinkAdd,
  };
};

export default linkPlugin;
