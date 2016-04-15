import React, { Component } from 'react';

export default class SearchSuggestionsPortal extends Component {

  componentWillMount() {
    this.props.store.getEditorState = this.props.getEditorState;
    this.props.store.setEditorState = this.props.setEditorState;
    this.props.store.register(this.props.offsetKey);

    // trigger a re-render so the SearchSuggestions becomes active
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

export default SearchSuggestionsPortal;
