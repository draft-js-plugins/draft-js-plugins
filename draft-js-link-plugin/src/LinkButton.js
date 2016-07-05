import React, { PropTypes } from 'react';
import { Entity, RichUtils } from 'draft-js';

class LinkButton extends React.Component {
  constructor(props) {
    super(props);

    this.confirmLink = this._confirmLink.bind(this);
  }

  _confirmLink() {
    // TODO: this needs to happen onChange() - 2016-06-28

    const { store } = this.props;

    const editorState = this.props.getEditorState();

    const selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      return;
    }

    if (store.active) {
      store.setEditorState(RichUtils.toggleLink(editorState, selection, null));
    } else {
      // TODO: use a DOM element instead - 2016-06-28
      const href = window.prompt('Enter a URL'); // eslint-disable-line no-alert
      const entityKey = Entity.create('LINK', 'MUTABLE', { href });
      store.setEditorState(RichUtils.toggleLink(editorState, selection, entityKey));
    }
  }

  render() {
    const { theme, store } = this.props;

    const classNames = [theme.button];
    if (store.active) {
      classNames.push(theme['button-active']);
    }

    return (
      <button className={classNames.join(' ')} onClick={this.confirmLink}>
        Link
      </button>
    );
  }
}
LinkButton.propTypes = {
  store: PropTypes.object.isRequired,
  theme: PropTypes.object,
};

export default LinkButton;
