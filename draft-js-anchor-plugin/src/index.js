import React from 'react';
import EditorUtils from 'draft-js-plugins-utils';
import DefaultLink from './components/Link';
import LinkButton from './components/LinkButton';
import linkStrategy, { matchesEntityType } from './linkStrategy';
import { defaultTheme } from './theme.js';

export default (config = {}) => {
  const { theme = defaultTheme, placeholder, Link, linkTarget } = config;

  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
  };

  const DecoratedDefaultLink = props => (
    <DefaultLink {...props} className={theme.link} target={linkTarget} />
  );

  const DecoratedLinkButton = props => (
    <LinkButton
      {...props}
      ownTheme={theme}
      store={store}
      placeholder={placeholder}
      onRemoveLinkAtSelection={() =>
        store.setEditorState(
          EditorUtils.removeLinkAtSelection(store.getEditorState())
        )
      }
    />
  );

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    decorators: [
      {
        strategy: linkStrategy,
        matchesEntityType,
        component: Link || DecoratedDefaultLink,
      },
    ],

    LinkButton: DecoratedLinkButton,
  };
};
