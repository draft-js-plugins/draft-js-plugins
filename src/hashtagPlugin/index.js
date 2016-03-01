import Hashtag from './Hashtag';
import hashtagStrategy from './hashtagStrategy';

export default () => ({
  compositeDecorator: {
    strategy: hashtagStrategy,
    component: Hashtag,
  },
  Hashtag, // TODO do we really need to export this?
});
