import React, { PropTypes } from 'react';
import { Entity } from 'draft-js';

class LinkButton extends React.Component {
  constructor(props) {
    super(props);

    this.confirmLink = this._confirmLink.bind(this);
  }

  _confirmLink() {
    // TODO: this needs to happen onChange() - 2016-06-28

    const { store } = this.props;

    console.log(store);
    const editorState = store.getEditorState();

    const selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      return;
    }

    if (store.active(block, editorState)) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
    } else {
      const href = window.prompt('Enter a URL'); // eslint-disable-line no-alert
      const entityKey = Entity.create('LINK', 'MUTABLE', { href });
      store.setEditorState(RichUtils.toggleLink(editorState, selection, entityKey));
    }
  }

  render() {
    const { theme, store } = this.props

    const classNames = [theme['toolbar-item']];
    if (store.active) {
      classNames.push(theme['toolbar-item-active']);
    }

    return (
      <div className={classNames.join(' ')}>
        <button onClick={this.confirmLink}>
          Link!!!
      </button>
    </div>
    );

  }
}
LinkButton.propTypes = {
  store: PropTypes.object.isRequired,
  theme: PropTypes.object,
}

export default LinkButton;
