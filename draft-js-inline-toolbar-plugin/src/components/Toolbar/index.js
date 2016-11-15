import React from 'react';
import { getVisibleSelectionRect } from 'draft-js';
import styles from '../../toolbarStyles.css';

// TODO make toolbarHeight to be determined or a parameter
const toolbarHeight = 44;

export default class Toolbar extends React.Component {

  state = {
    isVisible: false,
  }

  componentWillMount() {
    this.props.store.subscribeToItem('isVisible', this.onVisibilityChanged);
  }

  onVisibilityChanged = (isVisible) => {
    // need to wait a tick for window.getSelection() to be accurate
    // when focusing editor with allready present selection
    setTimeout(() => {
      const selectionRect = isVisible ? getVisibleSelectionRect(window) : undefined;
      const position = selectionRect ? {
        top: (selectionRect.top + window.scrollY) - toolbarHeight,
        left: selectionRect.left + window.scrollX + (selectionRect.width / 2),
        transform: 'translate(-50%) scale(1)',
        transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
      } : {
        transform: 'translate(-50%) scale(0)',
      };
      this.setState({
        position,
      });
    }, 0);
  }

  render() {
    return (
      <div
        className={styles.toolbar}
        style={this.state.position}
      >
        {this.props.structure.map((Component, index) => (
          <Component
            key={index}
            theme={this.props.buttonTheme}
            getEditorState={this.props.store.getItem('getEditorState')}
            setEditorState={this.props.store.getItem('setEditorState')}
          />
        ))}
      </div>
    );
  }
}
