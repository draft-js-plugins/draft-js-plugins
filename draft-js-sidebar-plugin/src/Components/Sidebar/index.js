import React from 'react';
import { AtomicBlockUtils, convertToRaw, CharacterMetadata, Entity } from 'draft-js';
import styles from './styles.css';
import createActionButton from '../../Actions';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  componentDidMount = () => {
    document.body.addEventListener('click', this.closeOnClick);
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('click', this.closeOnClick);
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
    <div className={styles.wrapper} style={this.props.display}>
      <SidebarButton
        img={this.props.mainButton.img}
        onClick={this.onButtonClick}
      />
      <div ref={(sm) => { this.sidebarMenu = sm; }}>
        <SidebarMenu
          show={this.state.showMenu}
          onClick={this.onActionClick}
          actions={this.props.actions}
          setEditorState={this.props.setEditorState}
          getEditorState={this.props.getEditorState}
          setReadOnly={this.props.setReadOnly}
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