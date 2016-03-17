import UndoButton from './UndoButton';
import RedoButton from './RedoButton';
import { fromJS } from 'immutable';
import buttonStyles from './Button/styles.css';
import historyStyles from './History/styles.css';
import decorateComponentWithProps from '../utils/decorateComponentWithProps';

const defaultStyles = fromJS({
  button: buttonStyles.root,
  entry: historyStyles.entry,
  lastEntry: historyStyles.lastEntry,
});

// import History from './History';

const historyPlugin = (config = {}) => {
  const theme = defaultStyles.merge(config.theme);
  return {
    UndoButton: decorateComponentWithProps(UndoButton, { theme }),
    RedoButton: decorateComponentWithProps(RedoButton, { theme }),
  };
};

export default historyPlugin;
