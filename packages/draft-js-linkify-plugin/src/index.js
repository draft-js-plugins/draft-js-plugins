import Link from './Link';
import linkStrategy from './linkStrategy';
import styles from './styles.css';
import decorateComponentWithProps from 'decorate-component-with-props';

const defaultTheme = {
  link: styles.link,
};

const linkPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const target = config.target ? config.target : '_self';
  return {
    decorators: [
      {
        strategy: linkStrategy,
        component: decorateComponentWithProps(Link, { theme, target }),
      },
    ],
  };
};

export default linkPlugin;
