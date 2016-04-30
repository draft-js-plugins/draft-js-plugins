import Portal from './utils/portal';
import Toolbar from './components/toolbar';

const airToolbar = {
  blockMode: 'hover',
  textMode: 'select',
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
