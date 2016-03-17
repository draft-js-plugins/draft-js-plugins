import Hashtag from './Hashtag';
import hashtagStrategy from './hashtagStrategy';
import { fromJS } from 'immutable';
import styles from './styles.css';
import decorateComponentWithProps from '../utils/decorateComponentWithProps';

const defaultTheme = fromJS({
  hashtag: styles.hashtag,
});

const hashtagPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const DecoratedHashtag = decorateComponentWithProps(Hashtag, { theme });
  return {
    pluginProps: {
      decorators: [
        {
          strategy: hashtagStrategy,
          component: DecoratedHashtag,
        },
      ],
    },
    Hashtag: DecoratedHashtag, // TODO not sure if there is a value in exporting this here
  };
};

export default hashtagPlugin;
