import Hashtag from './Hashtag';
import hashtagStrategy from './hashtagStrategy';

const hashtagPlugin = () => ({
  compositeDecorator: {
    strategy: hashtagStrategy,
    component: Hashtag,
  },
  Hashtag,
});

export default hashtagPlugin;
