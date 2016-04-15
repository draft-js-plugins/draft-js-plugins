import React, { Component } from 'react';
import { genKey } from 'draft-js';

export default class MentionSearchPortal extends Component {

  componentWillMount() {
    this.props.store.getEditorState = this.props.getEditorState;
    this.props.store.setEditorState = this.props.setEditorState;
    this.key = genKey();
    this.props.store.register(this.props.offsetKey);

    // trigger a re-render so the MentionSearch becomes active
    this.props.setEditorState(this.props.getEditorState());
  }

  componentWillUnmount() {
    this.props.store.unregister(this.props.offsetKey);
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
