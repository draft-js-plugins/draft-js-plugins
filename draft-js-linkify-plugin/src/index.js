import Link from './Link';
import linkStrategy from './linkStrategy';
import { Map } from 'immutable';
import styles from './styles.css';
import decorateComponentWithProps from 'decorate-component-with-props';

const defaultTheme = Map({
  link: styles.link,
});

const linkPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const prefix = config.prefix ? config.prefix : null;
  const target = config.target ? config.target : null;
  return {
    decorators: [
      {
        strategy: linkStrategy,
        component: decorateComponentWithProps(Link, { theme, prefix, target }),
      },
    ],
  };
};

export default linkPlugin;
