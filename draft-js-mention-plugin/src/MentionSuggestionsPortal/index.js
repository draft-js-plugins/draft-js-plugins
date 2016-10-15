import React, { Component } from 'react';

export default class MentionSuggestionsPortal extends Component {

  // When inputting Japanese characters (or any complex alphabet which requires
  // hitting enter to commit the characters), that action was causing a race
  // condition when we used componentWillMount. By using componentDidMount
  // instead of componentWillMount, the component will unmount unregister and
  // then properly mount and register after. Prior to this change,
  // componentWillMount would not fire after componentWillUnmount even though it
  // was still in the DOM, so it wasn't re-registering the offsetkey.
  componentDidMount() {
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
        this.searchPortal.getBoundingClientRect()
      ),
    );
  }

  render() {
    return (
      <span
        className={this.key}
        ref={(element) => { this.searchPortal = element; }}
      >
        {this.props.children}
      </span>
    );
  }
}
