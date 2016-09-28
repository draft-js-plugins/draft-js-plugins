import React from 'react';
import { RichUtils, Entity } from 'draft-js';
import unionClassNames from 'union-class-names';
import styles from '../../buttonStyles.css';

class LinkButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
    };
  }


  setLink = (event) => {
    const link = this.input.value;
    const entityKey = Entity.create('LINK', 'MUTABLE', { url: link });
    const newState = RichUtils.toggleLink(
      this.props.getEditorState(),
      this.state.selection,
      entityKey,
    );
    this.close(event, newState);
  }

  click = (event) => {
    event.preventDefault();
    const editorState = this.props.getEditorState();
    this.props.setReadOnly(true);
    this.props.store.updateItem('linkSelection', editorState.getSelection());
  }


  preventBubblingUp = (event) => { event.preventDefault(); }

  render() {
    return (
      <div
        className={styles.root}
      >
        <span
          onMouseDown={this.preventBubblingUp}
        >
          <button
            className={unionClassNames(styles.button)}
            onClick={this.click}
            type="button"
            children="link"
          />
        </span>
      </div>
    );
  }
}

export default LinkButton;
