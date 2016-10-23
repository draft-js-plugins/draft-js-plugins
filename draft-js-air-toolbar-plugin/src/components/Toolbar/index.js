import React from 'react';
import { getVisibleSelectionRect } from 'draft-js';
import styles from './styles.css';

// TODO make toolbarHeight to be determined or a parameter
const toolbarHeight = 44;

export default class Toolbar extends React.Component {

  state = {
    isVisisble: false,
  }

  componentWillMount() {
    this.props.store.subscribeToItem('isVisible', this.onVisibilityChanged);
  }

  onVisibilityChanged = (isVisible) => {
    const selectionRect = isVisible ? getVisibleSelectionRect(window) : undefined;
    const position = selectionRect ? {
      top: (selectionRect.top + window.scrollY) - toolbarHeight,
      left: selectionRect.left + window.scrollX + (selectionRect.width / 2),
    } : {};
    this.setState({
      isVisible,
      position
    });
  }

  render() {
    if (!this.state.isVisible) {
      return null;
    }

    return (
      <div
        className={styles.toolbar}
        style={this.state.position}
      >
        {this.props.structure.map((Component, index) => (
          <Component
            key={index}
            getEditorState={this.props.store.getItem('getEditorState')}
            setEditorState={this.props.store.getItem('setEditorState')}
          />
        ))}
      </div>
    );
  }
}
