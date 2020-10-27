import { EditorState } from 'draft-js';
import { EmojiPluginStore } from 'draft-js-emoji-plugin/src';
import React, { Component, ReactElement } from 'react';

export interface EmojiSuggestionsPortalParams {
  store: EmojiPluginStore;
  offsetKey: string;
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
}

export default class EmojiSuggestionsPortal extends Component<
  EmojiSuggestionsPortalParams
> {
  searchPortal?: HTMLElement | null;
  UNSAFE_componentWillMount(): void {
    this.props.store.register(this.props.offsetKey);
    this.updatePortalClientRect(this.props);

    // trigger a re-render so the EmojiSuggestions becomes active
    this.props.setEditorState(this.props.getEditorState());
  }

  UNSAFE_componentWillReceiveProps(
    nextProps: EmojiSuggestionsPortalParams
  ): void {
    this.updatePortalClientRect(nextProps);
  }

  componentWillUnmount(): void {
    this.props.store.unregister(this.props.offsetKey);
  }

  updatePortalClientRect(props: EmojiSuggestionsPortalParams): void {
    this.props.store.updatePortalClientRect(props.offsetKey, () =>
      this.searchPortal!.getBoundingClientRect()
    );
  }

  render(): ReactElement {
    return (
      <span ref={element => (this.searchPortal = element)}>
        {this.props.children}
      </span>
    );
  }
}
