import React, { Component } from 'react';

export default class EmojiSuggestionsPortal extends Component {

  constructor(props) {
    super(props);
    this.searchPortalRef = (element) => { this.searchPortal = element; };
  }

  componentWillMount() {
    this.props.store.register(this.props.offsetKey);
    this.updatePortalClientRect(this.props);

    // trigger a re-render so the EmojiSuggestions becomes active
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
        this.searchPortal.getBoundingClientRect()
      ),
    );
  }

  render() {
    return (
      <span
        className={this.key}
        ref={this.searchPortalRef}
      >
        {this.props.children}
      </span>
    );
  }
}
