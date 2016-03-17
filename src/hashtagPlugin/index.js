import Hashtag from './Hashtag';
import hashtagStrategy from './hashtagStrategy';
import { fromJS } from 'immutable';
import styles from './Hashtag/styles.css';

const defaultHashTagTheme = fromJS({
  hashtag: styles.root,
});

const hashtagPlugin = (config = {}) => ({
  pluginProps: {
    decorators: [
      {
        strategy: hashtagStrategy,
        component: Hashtag,
        theme: defaultHashTagTheme.merge(config.theme),
      },
    ],
  },
  Hashtag,
});

export default hashtagPlugin;
