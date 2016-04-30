import Portal from './utils/portal';
import Toolbar from './components/toolbar';

const airToolbar = {
  blockMode: 'hover',
  textMode: 'select',
  animations: true,
  add: props => {
    Portal.renderPortal({
      toolbarAnimations: airToolbar.animations,
      Element: Toolbar,
      ...props,
    });
  },
  remove: props => {
    Portal.removePortal({
      toolbarAnimations: airToolbar.animations,
      Element: Toolbar,
      ...props,
    });
  },
};

export default airToolbar;
