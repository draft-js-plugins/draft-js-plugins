import React from 'react';
import { AtomicBlockUtils, convertToRaw, CharacterMetadata, Entity } from 'draft-js';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';
import unionClassNames from 'union-class-names';
import styles from './styles.css';
import createActionButton from '../../Actions';

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
              left: `-25px`,
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
    if (
      this.sidebarMenu && !this.sidebarMenu.contains(event.target)
      && !this.props.getPluginMethods().getEditorRef().refs.editorContainer.contains(event.target)
    ) {
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

  getMenuWidth= () => {
    if (!this.state.showMenu) {
      return { width: '0px'};
    }
    const listElt = this.sidebarMenu.getElementsByTagName('ul')[0];
    const style = getComputedStyle(listElt);

    const width = listElt.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight);
    return { width };
  }

  render = () => (
    <div
      className={styles.wrapper}
      style={this.state.display}
      ref={(sm) => { this.sidebarMenu = sm; }}
    >
      <div
        onClick={this.onButtonClick}
        className={
          this.state.showMenu
            ? unionClassNames(styles.plusButtonOpen, styles.plusButton)
            : styles.plusButton
        }
      >
        <img src={this.props.icon} alt="+" />
      </div>
      <div
        className={styles.menu}
        style={this.getMenuWidth()}
      >
        <SidebarMenu
          ref={(m) => { this.menu = m; }}
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
  icon: React.PropTypes.string.isRequired,
};

const SidebarMenu = ({ onClick, actions, ...rest}) => (
  <ul className={styles.menuList}>
    {actions.map((action) => (
      <li key={action.name}>
        {createActionButton({ onClick, ...action, ...rest })}
      </li>
    ))}
  </ul>
);


export default Sidebar;