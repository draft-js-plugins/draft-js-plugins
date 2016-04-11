import CharCounter from './CharCounter';
import WordCounter from './WordCounter';
import LineCounter from './LineCounter';
import { Map } from 'immutable';
import styles from './styles.css';
import decorateComponentWithProps from 'decorate-component-with-props';

const defaultTheme = Map({
  counter: styles.counter,
  overLimit: styles.overLimit,
});

const counterPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    CharCounter: decorateComponentWithProps(CharCounter, { theme }),
    WordCounter: decorateComponentWithProps(WordCounter, { theme }),
    LineCounter: decorateComponentWithProps(LineCounter, { theme }),
  };
};

export default counterPlugin;
