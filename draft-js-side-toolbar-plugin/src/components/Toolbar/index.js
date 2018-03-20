/* eslint-disable react/no-array-index-key */
import React from 'react';
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';

const getRelativeParent = (element) => {
  if (!element) {
    return null;
  }

  return window
    .getComputedStyle(element)
    .getPropertyValue('position') === 'relative' ? element : getRelativeParent(element.parentElement);
};

export default class Toolbar extends React.Component {

  state = {
    position: {
      transform: 'scale(0)',
    },
    relative: false
  };

  componentDidMount() {
    this.props.store.subscribeToItem('editorState', this.onEditorStateChange);
    this.setRelative(!!getRelativeParent(this.toolbar.parentElement));
  }

  componentWillUnmount() {
    this.props.store.unsubscribeFromItem('editorState', this.onEditorStateChange);
  }

  onEditorStateChange = (editorState) => {
    const selection = editorState.getSelection();
    const currentBlock = editorState.getCurrentContent().getBlockForKey(selection.getStartKey());
    const offsetKey = DraftOffsetKey.encode(currentBlock.getKey(), 0, 0); // TODO verify that always a key-0-0 exists

    if (!selection.getHasFocus()) {
      this.setPosition({ transform: 'scale(0)' });
      return;
    }

    // Note: need to wait on tick to make sure the DOM node has been create by Draft.js
    setTimeout(() => {
      const { relative } = this.state;
      const $node = document.querySelector(`[data-offset-key="${offsetKey}"]`);
      const scrollY = window.scrollY || window.pageYOffset;
      const nodeClientRect = $node.getBoundingClientRect();

      this.setPosition({
        top: relative ? ($node.offsetTop + 10) : (nodeClientRect.top + scrollY),
        left: (relative ? 0 : nodeClientRect.left) - 80,
        transform: 'scale(1)',
        transition: 'transform 0.15s cubic-bezier(.3, 1.2, .2,1)'
      });
    }, 0);
  };

  setPosition(position) {
    this.setState({ position });
  }

  setRelative(relative) {
    this.setState({ relative });
  }

  render() {
    const { theme, store } = this.props;
    return (
      <div
        className={theme.toolbarStyles.wrapper}
        style={this.state.position}
        ref={(element) => {
          this.toolbar = element;
        }}
      >
        {this.props.structure.map((Component, index) => (
          <Component
            key={index}
            getEditorState={store.getItem('getEditorState')}
            setEditorState={store.getItem('setEditorState')}
            theme={theme}
          />
        ))}
      </div>
    );
  }
}
