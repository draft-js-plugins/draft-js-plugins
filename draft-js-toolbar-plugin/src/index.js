import TextToolbar, { renderTextToolbar } from './components/text-toolbar';
import React from 'react';
import Wrapper from './decorators/hover-toolbar';
import { Map } from 'immutable';
import linkStrategy from './linkStrategy';
import Link from './Link';
import styles from './styles.css';
import decorateComponentWithProps from 'decorate-component-with-props';

const defaultTheme = Map({
  ...styles,
});

const toolbarPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    onChange: (editorState, { setEditorState }) => {
      renderTextToolbar({ editorState, active: true, setEditorState, theme });
      return editorState;
    }, blockRendererFn: (contentBlock, { }) => ({
      decorators: [Wrapper(theme)]
    }), decorators: [
      {
        strategy: linkStrategy,
        component: Link,
      },
    ],
    TextToolbar: decorateComponentWithProps(TextToolbar, { theme }),
    theme,
  };
};

export default toolbarPlugin;
