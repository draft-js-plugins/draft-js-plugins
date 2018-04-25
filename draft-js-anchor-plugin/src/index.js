import decorateComponentWithProps from 'decorate-component-with-props';
import EditorUtils from 'draft-js-plugins-utils';

import DefaultLink from './components/Link';
import LinkButton from './components/LinkButton';
import linkStrategy, { matchesEntityType } from './linkStrategy';
import linkStyles from './linkStyles.css';

export default (config = {}) => {
  const defaultTheme = linkStyles;

  const { theme = defaultTheme, placeholder, Link, linkTarget } = config;

  const store = {
    getEditorState: undefined,
    setEditorState: undefined
  };

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    decorators: [
      {
        strategy: linkStrategy,
        matchesEntityType,
        component: Link || decorateComponentWithProps(DefaultLink, {
          className: theme.link,
          target: linkTarget
        })
      }
    ],

    LinkButton: decorateComponentWithProps(LinkButton, {
      ownTheme: theme,
      store,
      placeholder,
      onRemoveLinkAtSelection: () => store.setEditorState(
        EditorUtils.removeLinkAtSelection(store.getEditorState())
      )
    })
  };
};
