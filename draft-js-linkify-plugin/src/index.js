import Link from './Link';
import linkStrategy from './linkStrategy';
import decorateComponentWithProps from 'decorate-component-with-props';

const linkPlugin = (config = {}) => {
  const component = config.component;
  const target = config.target ? config.target : '_self';

  if (!component) {
    throw new Error('draft-js-linkify-plugin: Component not specified in initialization.');
  }

  return {
    decorators: [
      {
        strategy: linkStrategy,
        component: decorateComponentWithProps(Link, { component, target }),
      },
    ],
  };
};

export default linkPlugin;
