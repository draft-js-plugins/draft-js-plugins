import React from 'react';
import styles from './styles.css';
import { RichUtils, EditorState } from 'draft-js';

import BlockControls from './BlockControls';

const inlinePlugin = (config = {}) => {
  const theme = config.theme || styles;

  // TODO: Can we somehow avoid delayed global variables like these? this is pretty ugly - 2016-06-28
  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
  };

  const toggleBlockType = (type) => {
    const nextState = RichUtils.toggleBlockType(
      store.getEditorState(),
      type
    );

    store.setEditorState(
      EditorState.forceSelection(
        nextState, nextState.getCurrentContent().getSelectionAfter()
      )
    );
  };

  const isActive = (getEditorState, blockStyle) => {
    const editorState = getEditorState();
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();

    return blockStyle === blockType;
  };

  const h1Props = { label: 'H1', button: <span>h1</span>, style: 'header-one' };
  const h2Props = { label: 'H2', button: <span>h2</span>, style: 'header-two' };
  const h3Props = { label: 'H3', button: <span>h3</span>, style: 'header-three' };
  const h4Props = { label: 'H4', button: <span>h4</span>, style: 'header-four' };
  const h5Props = { label: 'H5', button: <span>h5</span>, style: 'header-five' };
  const h6Props = { label: 'H6', button: <span>h6</span>, style: 'header-six' };
  const blockquoteProps = { label: 'Blockquote', button: <i>"</i>, style: 'blockquote' };
  const ulProps = { label: 'Ul', button: <span>UL</span>, style: 'unordered-list-item' };
  const olProps = { label: 'Ol', button: <span>OL</span>, style: 'ordered-list-item' };
  const codeblockProps = { label: 'CodeBlock', button: <span>#</span>, style: 'code-block' };

  const H1Button = BlockControls(h1Props);
  const H2Button = BlockControls(h2Props);
  const H3Button = BlockControls(h3Props);
  const H4Button = BlockControls(h4Props);
  const H5Button = BlockControls(h5Props);
  const H6Button = BlockControls(h6Props);
  const BlockquoteButton = BlockControls(blockquoteProps);
  const UlButton = BlockControls(ulProps);
  const OlButton = BlockControls(olProps);
  const CodeblockButton = BlockControls(codeblockProps);

  const injectProps = (Component) =>
    (props) =>
      <Component store={store} theme={theme} onToggle={toggleBlockType} isActive={isActive} {...props} />;

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    H1Button: injectProps(H1Button),
    H2Button: injectProps(H2Button),
    H3Button: injectProps(H3Button),
    H4Button: injectProps(H4Button),
    H5Button: injectProps(H5Button),
    H6Button: injectProps(H6Button),
    BlockquoteButton: injectProps(BlockquoteButton),
    UlButton: injectProps(UlButton),
    OlButton: injectProps(OlButton),
    CodeblockButton: injectProps(CodeblockButton),
  };
};

export default inlinePlugin;
