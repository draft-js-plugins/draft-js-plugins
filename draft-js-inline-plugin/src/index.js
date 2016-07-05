import React from 'react';
import styles from './styles.css';
import { RichUtils, EditorState } from 'draft-js';

import InlineControls from './InlineControls';

const inlinePlugin = (config = {}) => {
  const theme = config.theme || styles;

  // TODO: Can we somehow avoid delayed global variables like these? this is pretty ugly - 2016-06-28
  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
  };

  const toggleInlineStyle = (inlineStyle) => {
    const nextState = RichUtils.toggleInlineStyle(
      store.getEditorState(),
      inlineStyle,
    );

    store.setEditorState(
      EditorState.forceSelection(
        nextState, nextState.getCurrentContent().getSelectionAfter()
      )
    );
  };

  const isActive = (getEditorState, inlineStyle) =>
    getEditorState().getCurrentInlineStyle().has(inlineStyle);

  const boldProps = { label: 'Bold', button: <b>B</b>, style: 'BOLD' };
  const italicProps = { label: 'Italic', button: <i>I</i>, style: 'ITALIC' };
  const underlineProps = { label: 'Underline', button: <u>U</u>, style: 'UNDERLINE' };
  const monospaceProps = { label: 'Monospace', button: 'Monospace', style: 'MONOSPACE' };

  const BoldButton = InlineControls(boldProps);
  const ItalicButton = InlineControls(italicProps);
  const UnderlineButton = InlineControls(underlineProps);
  const MonospaceButton = InlineControls(monospaceProps);

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    BoldButton: (props) => <BoldButton store={store} theme={theme} onToggle={toggleInlineStyle} isActive={isActive} {...props} />,
    ItalicButton: (props) => <ItalicButton store={store} theme={theme} onToggle={toggleInlineStyle} isActive={isActive} {...props} />,
    UnderlineButton: (props) => <UnderlineButton store={store} theme={theme} onToggle={toggleInlineStyle} isActive={isActive} {...props} />,
    MonospaceButton: (props) => <MonospaceButton store={store} theme={theme} onToggle={toggleInlineStyle} isActive={isActive} {...props} />,
  };
};

export default inlinePlugin;
