import Emoji from './Emoji';
import emojiStrategy from './emojiStrategy';
import decorateComponentWithProps from 'decorate-component-with-props';
import { Map } from 'immutable';
import emojiStyles from './emojiStyles.css';

const defaultTheme = Map({
  emoji: emojiStyles.emoji,
});

const emojiPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    pluginProps: {
      decorators: [
        {
          strategy: emojiStrategy,
          component: decorateComponentWithProps(Emoji, { theme }),
        },
      ],
    },
  };
};

export default emojiPlugin;
