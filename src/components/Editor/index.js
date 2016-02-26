/* @flow */

import React, { Component } from 'react';
import {
  BlockMapBuilder,
  ContentBlock,
  Editor,
  EditorState,
  Entity,
  CompositeDecorator,
  Modifier,
  genKey,
  CharacterMetadata,
} from 'draft-js';
import {
  List,
  Repeat
} from 'immutable';
import hashtagStrategy from './hashtagStrategy';
import Hashtag from './Hashtag';
import Sticker from './Sticker';
import styles from './styles';

const compositeDecorator = new CompositeDecorator([
  {
    strategy: hashtagStrategy,
    component: Hashtag,
  },
]);

type UnicornEditorState = {
  editorState: any,
}

const myBlockRenderer = (contentBlock) => {
  const type = contentBlock.getType();
  if (type === 'sticker') {
    return {
      component: Sticker,
    };
  }

  return undefined;
};

export default class UnicornEditor extends Component {

  state: UnicornEditorState = {
    editorState: EditorState.createEmpty(compositeDecorator),
  };

  onChange: Function = (editorState: Object): void => {
    this.setState({
      editorState,
    });
  };

  focus: Function = (): void => {
    this.refs.editor.focus();
  };

  logState: Function = (): void => {
    console.log(this.state.editorState.toJS()); // eslint-disable-line no-console
  };

  addSticker: Function = (): void => {
    const { editorState } = this.state;
    const currentContentState = editorState.getCurrentContent();
    const currentSelectionState = editorState.getSelection();

    // TODO why do we need this?
    const afterRemoval = Modifier.removeRange(
      currentContentState,
      currentSelectionState,
      'backward'
    );

    // deciding on the postion to split the text
    const targetSelection = afterRemoval.getSelectionAfter();

    // the only way to insert a new seems to be by splitting an existing in to two
    const afterSplit = Modifier.splitBlock(afterRemoval, targetSelection);

    // the position to insert our blocks
    const insertionTarget = afterSplit.getSelectionAfter();

    // TODO not sure why we need it …
    const newContentStateAfterSplit = Modifier.setBlockType(afterSplit, insertionTarget, 'sticker');

    // creating a new ContentBlock including the entity with data
    const entityKey = Entity.create('sticker', 'IMMUTABLE', { id: 'white-unicorn' });
    const charDataOfSticker = CharacterMetadata.create({ entity: entityKey });
    const stickerContentBlock = new ContentBlock({
      key: genKey(),
      type: 'sticker',
      text: '',
      characterList: List(Repeat(charDataOfSticker, 1)), // eslint-disable-line new-cap
    });

    // new contentblock so we can continue wrting right away after inserting the sticker
    const emptyTextBlock = new ContentBlock({
      key: genKey(),
      type: 'unstyled',
      text: '',
      characterList: List(), // eslint-disable-line new-cap
    });

    // create fragment containing the two content blocks
    const fragment = BlockMapBuilder.createFromArray([stickerContentBlock, emptyTextBlock]);

    // replace the contentblock we reserved for our insert
    const contentStateWithSticker = Modifier.replaceWithFragment(
      newContentStateAfterSplit,
      insertionTarget,
      fragment
    );

    // update editor state with our new state including the sticker
    const newEditorState = EditorState.push(
      editorState,
      contentStateWithSticker,
      'add-sticker'
    );

    this.setState({
      editorState: newEditorState,
    });
  };

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            blockRendererFn={myBlockRenderer}
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="I'm a Unicorn Input!"
            ref="editor"
            spellCheck
          />
        </div>
        <button
          onClick={this.addSticker}
          type="button"
        >
          Add a Unicorn
        </button>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}
