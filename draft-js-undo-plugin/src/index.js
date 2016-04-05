import UndoButton from './UndoButton';
import RedoButton from './RedoButton';
import History from './History';
import { Map } from 'immutable';
import styles from './styles.css';
import decorateComponentWithProps from 'decorate-component-with-props';

const defaultTheme = Map({
  redo: styles.button,
  undo: styles.button,
  historyItem: styles.historyItem,
  historyItemActive: styles.historyItemActive,
});

const historyPlugin = (config = {}) => {
  const undoContent = config.undoContent ? config.undoContent : '↺';
  const redoContent = config.redoContent ? config.redoContent : '↻';

  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    UndoButton: decorateComponentWithProps(UndoButton, { theme, children: undoContent }),
    RedoButton: decorateComponentWithProps(RedoButton, { theme, children: redoContent }),
    History: decorateComponentWithProps(History, { theme }),
  };
};

export default historyPlugin;
