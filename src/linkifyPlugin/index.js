import Link from './Link';
import linkStrategy from './linkStrategy';

const linkPlugin = () => ({
  compositeDecorator: {
    strategy: linkStrategy,
    component: Link,
  },
  Link,
});

export default linkPlugin;
