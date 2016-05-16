import React, { Component } from 'react';

export default class CompletionSuggestionsPortal extends Component {

  componentWillMount() {
    this.props.store.register(this.props.offsetKey);
    this.updatePortalClientRect(this.props);

    // trigger a re-render so the MentionSuggestions becomes active
    this.props.setEditorState(this.props.getEditorState());
  }

  componentWillReceiveProps(nextProps) {
    this.updatePortalClientRect(nextProps);
  }

  componentWillUnmount() {
    this.props.store.unregister(this.props.offsetKey);
  }

  updatePortalClientRect(props) {
    this.props.store.updatePortalClientRect(
      props.offsetKey,
      () => (
        this.refs.searchPortal.getBoundingClientRect()
      ),
    );
  }

  render() {
    return (
      <span className={this.key} ref="searchPortal">
        { this.props.children }
      </span>
    );
  }
}
