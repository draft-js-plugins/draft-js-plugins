import Link from './Link';
import linkStrategy from './linkStrategy';

export default () => ({
  compositeDecorator: {
    strategy: linkStrategy,
    component: Link,
  },
  Link,
});
