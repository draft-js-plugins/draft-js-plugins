import React from 'react';
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
        visibility: 'hidden',
      },
      selectedBlockElement: null,
    };
  }

  componentDidMount = () => {
    document.body.addEventListener('click', this.closeOnClick);
  };

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps.container) return;
    const editorState = nextProps.editorState;
    const selection = editorState.getSelection();
    if (!selection.getHasFocus()) {
      return;
    }
    const startKey = selection.getStartKey();
    const contentState = editorState.getCurrentContent();
    const block = contentState.getBlockForKey(startKey);
    if (!block) {
      return;
    }
    if (this.props.emptyLineOnly && block.getText().length > 0) {
      this.setState({
        showMenu: false,
        display: {
          left: '-1000px',
          visibility: 'hidden',
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
          display: {
            left: '-1000px',
            visibility: 'hidden',
          },
          selectedBlockElement: null,
        });
        return;
      }

      for (let i = 0; i < elts.length; i += 1) {
        if (elts[i].getAttribute('data-block') === 'true') {
          if (this.state.selectedBlockElement === elts[i]) {
            return;
          }
          if (this.openButton) {
            const openButtonRect= this.openButton.getBoundingClientRect();
            const blockBoundRect = elts[i].getBoundingClientRect();
            const containerRect = this.props.container.getBoundingClientRect();
            const align = (openButtonRect.height/2) - (blockBoundRect.height/2);
            const top = blockBoundRect.top - containerRect.top - align;
            this.setState({
              showMenu: false,
              display: {
                top: `${top}px`,
                left: `-${openButtonRect.width + 5}px`,
                display: 'flex',
              },
              selectedBlockElement: elts[i],
            });
          }
          return;
        }
      }
    });
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('click', this.closeOnClick);
  };

  toggleSidebar = (event) => {
    event.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  getMenuWidth= () => {
    if (!this.state.showMenu) {
      return { width: '0px' };
    }
    const listElt = this.sidebarMenu.getElementsByTagName('ul')[0];
    const style = getComputedStyle(listElt);

    const width = listElt.offsetWidth + parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    return { width };
  };

  closeSidebar = () => {
    this.setState({
      showMenu: false,
    });
  };

  closeOnClick = (event) => {
    if (
      this.sidebarMenu && !this.sidebarMenu.contains(event.target)
      && !this.props.getPluginMethods().getEditorRef().refs.editorContainer.contains(event.target)
    ) {
      this.closeSidebar();
    }
  };

  render = () => (
    <div
      className={styles.wrapper}
      style={this.state.display}
      ref={(sm) => { this.sidebarMenu = sm; }}
    >
      <div
        onClick={this.toggleSidebar}
        className={
          this.state.showMenu
            ? unionClassNames(styles.plusButtonOpen, styles.plusButton)
            : styles.plusButton
        }
        ref={(b) => { this.openButton = b; }}
      >
        <img src={this.props.icon} alt="+" />
      </div>
      <div
        className={styles.menu}
        style={this.getMenuWidth()}
      >
        <ul className={styles.menuList}>
          {this.props.actions.map((action) => (
            <li key={action.name}>
              {createActionButton({
                onClick: this.closeSidebar,
                getPluginMethods: this.props.getPluginMethods,
                ...action,
              })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  editorState: React.PropTypes.object.isRequired,
  getPluginMethods: React.PropTypes.func.isRequired,
  emptyLineOnly: React.PropTypes.bool.isRequired,
  icon: React.PropTypes.string.isRequired,
};

export default Sidebar;
