import { PureComponent } from 'react';

export default class extends PureComponent {
  componentWillMount() {
    this.props.store.subscribeToItem('selection', this.onSelectionChanged);
  }

  componentWillUnmount() {
    this.props.store.unsubscribeFromItem('selection', this.onSelectionChanged);
  }

  onSelectionChanged = () => {
    this.forceUpdate();
  }

  getEditorState() {
    const { store } = this.props;
    if (!store) {
      return null;
    }
    const getEditorState = store.getItem('getEditorState');
    if (!getEditorState) {
      return null;
    }
    return getEditorState();
  }

  setEditorState(editorState) {
    const { store } = this.props;
    if (!store) {
      return;
    }
    store.getItem('setEditorState')(editorState);
  }
}
