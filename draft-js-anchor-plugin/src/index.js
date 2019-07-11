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

  const DecoratedDefaultLink = props => {
    return <DefaultLink {...props} className={theme.link} target={linkTarget} />
  }

  const DecoratedLinkButton = props => {
    return (
      <LinkButton
        ownTheme={theme}
        store={store}
        placeholder={placeholder}
        onRemoveLinkAtSelection={() => store.setEditorState(
          EditorUtils.removeLinkAtSelection(store.getEditorState())
        )}
      />
    )
  }

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    decorators: [
      {
        strategy: linkStrategy,
        matchesEntityType,
        component: Link || DecoratedDefaultLink
      }
    ],

    LinkButton: DecoratedLinkButton
  };
};
