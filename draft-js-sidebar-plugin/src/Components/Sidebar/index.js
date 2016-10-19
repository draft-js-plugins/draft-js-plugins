import React from 'react';
import { AtomicBlockUtils, convertToRaw, CharacterMetadata, Entity } from 'draft-js';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';
import insertBlock from '../../Modifiers/insertBlock';
import removeBlock from '../../Modifiers/removeBlock';
import styles from './styles.css';
import createActionButton from '../../Actions';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      display: {
        top: '-1000px',
        left: `-35px`,
        display: 'flex',
      },
      selectedBlockElement: null,
    }
  }

  componentDidMount = () => {
    document.body.addEventListener('click', this.closeOnClick);
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('click', this.closeOnClick);
  };

  componentWillReceiveProps = (nextProps) => {
    const editorState = nextProps.editorState;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      return;
    }
    const offsetKey = DraftOffsetKey.encode(selection.getEndKey(), 0, 0);
    setTimeout(() => {
      const elts = document.querySelectorAll(`[data-offset-key="${offsetKey}"]`);
      if (elts.length === 0) {
        return ;
      }
      for (let i = 0; i < elts.length; i++) {
        if (elts[i].getAttribute('data-block') === 'true') {
          if (this.state.selectedBlockElement === elts[i]) {
            return;
          }
          this.setState({
            display: {
              top: `${elts[i].offsetTop + 16}px`,
              left: `-35px`,
              display: 'flex',
            },
            selectedBlockElement: elts[i],
          });
          return;
          //pluginFunctions.setEditorState(editorState);
        }
      }
    },0);
  };

  closeSidebarMenu = () =>  {
    this.setState({
      showMenu: false,
    });
  };

  closeOnClick = (event) => {
    if (this.sidebarMenu && !this.sidebarMenu.contains(event.target)) {
      this.closeSidebarMenu();
    }
  };

  onButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  onActionClick = () => {
    this.closeSidebarMenu();
  };

  render = () => (
    <div className={styles.wrapper} style={this.state.display}>
      <SidebarButton
        img={this.props.mainButton.img}
        onClick={this.onButtonClick}
      />
      <div ref={(sm) => { this.sidebarMenu = sm; }}>
        <SidebarMenu
          show={this.state.showMenu}
          onClick={this.onActionClick}
          actions={this.props.actions}
          getPluginMethods={this.props.getPluginMethods}
        />
      </div>
    </div>
  );
}

const SidebarButton = ({display, img, onClick}) => (
  <div
    onClick={onClick}
    className={styles.plusButton}
  >
    <img src={img} alt="+" />
  </div>
);

const SidebarMenu = ({ show, onClick, actions, ...rest}) => (
  show &&
    <ul className={styles.menu}>
      {actions.map((action) => (
        <li key={action.name}>
          {createActionButton({ onClick, ...action, ...rest })}
        </li>
      ))}
    </ul>
);

Sidebar.defaultProps = {
  mainButton: {}
};

export default Sidebar;