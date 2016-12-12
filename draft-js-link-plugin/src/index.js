import decorateComponentWithProps from 'decorate-component-with-props';
import { Entity } from 'draft-js';
import Link from './components/Link';
import styles from './styles.css';

const defaultTheme = {
  link: styles.link,
};

export const defaultType = 'LINK';
export const defaultUrlKey = 'href';
export { Link };

const linkPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.

  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  const {
    component,
    theme = defaultTheme,
    type = defaultType,
    urlKey = defaultUrlKey,
    target = '_blank',
  } = config;

  return {
    decorators: [
      {
        strategy: (contentBlock, callback) => {
          contentBlock.findEntityRanges(
            (character) => {
              const entityKey = character.getEntity();
              return entityKey !== null && Entity.get(entityKey).getType() === type;
            }, callback
          );
        },
        component: decorateComponentWithProps(Link, { theme, target, component, urlKey }),
      },
    ],
  };
};

export default linkPlugin;
