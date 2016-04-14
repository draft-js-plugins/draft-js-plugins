import React, { Component } from 'react';
import { genKey } from 'draft-js';

export default class MentionSearchPortal extends Component {

  componentWillMount() {
    this.props.store.getEditorState = this.props.getEditorState;
    this.props.store.setEditorState = this.props.setEditorState;
    this.key = genKey();
    this.props.store.register(this.key, this.props.offsetKey);
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
