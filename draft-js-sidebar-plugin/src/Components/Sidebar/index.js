import React from 'react';
import { AtomicBlockUtils, convertToRaw, CharacterMetadata, Entity } from 'draft-js';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';
import styles from './styles.css';
import createActionButton from '../../Actions';
import test from '../../assets/addCircleMD.svg';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      display: {
        display: 'none',
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
    if (!selection.getHasFocus()) {
      return;
    }
    const startKey = selection.getStartKey();
    const contentState = editorState.getCurrentContent();
    const block = contentState.getBlockForKey(startKey);
    if (this.props.emptyLineOnly && block.getText().length > 0) {
      this.setState({
        display: {
          display: 'none',
        },
        selectedBlockElement: null,
      });
      return;
    }

    const offsetKey = DraftOffsetKey.encode(startKey, 0, 0);
    setImmediate(() => {
      const elts = document.querySelectorAll(`[data-offset-key="${offsetKey}"]`);
      if (elts.length === 0) {
        this.setState({
          selectedBlockElement: null,
        })
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
        }
      }
    });
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
        img={this.props.openSidebarButton.img}
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

Sidebar.propTypes = {
  editorState: React.PropTypes.object.isRequired,
  getPluginMethods: React.PropTypes.func.isRequired,
  emptyLineOnly: React.PropTypes.bool.isRequired,
  openSidebarButton: React.PropTypes.object.isRequired,
};

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


export default Sidebar;