import Link from './Link';
import linkStrategy from './linkStrategy';

const linkPlugin = () => ({
  pluginProps: {
    decorators: [
      {
        strategy: linkStrategy,
        component: Link,
      },
    ],
  },
  Link,
});

export default linkPlugin;
