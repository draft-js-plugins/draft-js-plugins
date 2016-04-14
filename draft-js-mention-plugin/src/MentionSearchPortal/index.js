import React, { Component } from 'react';

export default class MentionSearchPortal extends Component {

  componentWillMount() {
    this.props.store.getEditorState = this.props.getEditorState;
    this.props.store.setEditorState = this.props.setEditorState;
    this.props.store.register(this.props.offsetKey);
  }

  componentWillUnmount() {
    this.props.store.unregister(this.key);
  }

  render() {
    return (
      <span className={this.key}>
        { this.props.children }
      </span>
    );
  }
}

export default MentionSearchPortal;
