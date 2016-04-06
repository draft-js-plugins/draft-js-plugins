import React, { Component } from 'react';

export default class MentionSearchPortal extends Component {

  componentWillMount() {
    this.props.store.getEditorState = this.props.getEditorState;
    this.props.store.setEditorState = this.props.setEditorState;
    this.props.store.searchActive = true;
  }

  componentWillUnmount() {
    this.props.store.getEditorState = undefined;
    this.props.store.setEditorState = undefined;
    this.props.store.searchActive = false;
  }

  render() {
    return (
      <span>
        { this.props.children }
      </span>
    );
  }
}

export default MentionSearchPortal;
