import Portal from './utils/portal';
import Toolbar from './components/toolbar';

const airToolbar = {
  add: props => {
    Portal.renderPortal({
      Element: Toolbar,
      ...props,
    });
  },
  remove: props => {
    Portal.removePortal({
      Element: Toolbar,
      ...props,
    });
  },
};

export default airToolbar;
