import React from 'react';
import { EditorState, getVisibleSelectionRect, Entity, RichUtils } from 'draft-js';
import { getSelectionEntity } from 'draftjs-utils';
import styles from './styles.css';
import buttonStyles from '../../buttonStyles.css';

// TODO make toolbarHeight to be determined or a parameter
const toolbarHeight = 40;

export default class LinkInput extends React.Component {

  state = {
    isVisible: false,
    linkSelection: false,
    position: false,
    defaultValue: '',
    entityKey: false,
  }

  componentWillMount() {
    this.props.store.subscribeToItem('linkSelection', this.onLinkSelection);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.closeOnClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.closeOnClick);
  }

  onInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.setLink(event);
    } else if (event.key === 'Escape') {
      this.close(event);
    }
  }


  onLinkSelection = (linkSelection) => {
    if (linkSelection === false) {
      return;
    }

    this.props.store.getItem('setEditorState')(
      EditorState.forceSelection(
        this.props.store.getItem('getEditorState')(),
        linkSelection
      )
    );

    // wait for the EditorState to be updated
    setTimeout(() => {
      const editorState = this.props.store.getItem('getEditorState')();
      const entityKey = getSelectionEntity(editorState);

      if (entityKey) {
        const entity = Entity.get(entityKey);
        if (entity.type === 'LINK') {
          this.setState({
            entityKey,
            defaultValue: entity.getData().url,
          });
        }
      }

      this.setState({
        linkSelection,
      });

      this.show();
    }, 0);
  }

  setLink = (event) => {
    const link = this.input.value;
    if (this.state.entityKey) {
      Entity.replaceData(this.state.entityKey, { url: link });
      this.props.store.getItem('setEditorState')(this.props.store.getItem('getEditorState')());
      this.close(event);
      return;
    }

    const entityKey = Entity.create('LINK', 'MUTABLE', { url: link });
    const newState = RichUtils.toggleLink(
      this.props.store.getItem('getEditorState')(),
      this.state.linkSelection,
      entityKey,
    );
    this.props.store.getItem('setEditorState')(newState);
    this.close(event);
  }

  show = () => {
    this.props.store.getItem('setReadOnly')(true);
    const selectionRect = getVisibleSelectionRect(window);
    const position = selectionRect ? {
      top: (selectionRect.top + window.scrollY) - toolbarHeight,
      left: selectionRect.left + window.scrollX,
    } : {};
    this.setState({
      position,
      isVisible: true,
    });
  }

  close = (event) => {
    if (this.state.isVisible === true) {
      event.preventDefault();
      this.setState({
        linkSelection: false,
        defaultValue: '',
        entityKey: false,
        isVisible: false,
        position: false,
      });
      this.props.store.updateItem('linkSelection', false);
      this.props.store.getItem('setReadOnly')(false);
    }
  }

  closeOnClick = (event) => {
    if (this.node && !this.node.contains(event.target)) {
      this.close(event);
    }
  }

  render() {
    if (!this.state.isVisible) {
      return null;
    }

    return (
      <div
        className={styles.toolbar}
        style={this.state.position}
        ref={(d) => { this.node = d; }}
      >
        <span>
          <input
            ref={(i) => { this.input = i; }}
            className={styles.input}
            type="text"
            onKeyDown={this.onInputKeyDown}
            autoFocus
            defaultValue={this.state.defaultValue}
          />
          <button children="OK" className={buttonStyles.button} onClick={this.setLink} />
        </span>
      </div>
    );
  }
}
