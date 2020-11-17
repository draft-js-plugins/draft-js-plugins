import React, { ComponentType, ReactElement, ReactNode } from 'react';
import { EditorState } from 'draft-js';
import { EditorPlugin } from '@draft-js-plugins/editor';
import UndoButton from './UndoButton';
import RedoButton from './RedoButton';
import { defaultTheme, UndoPluginTheme } from './theme';

export interface UndoPuginConfig {
  undoContent?: ReactNode;
  redoContent?: ReactNode;
  theme?: UndoPluginTheme;
}
export interface UndoPuginStore {
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
}

export interface UndoRedoButtonProps {
  className?: string;
}

export default (
  config: UndoPuginConfig = {}
): EditorPlugin & {
  UndoButton: ComponentType<UndoRedoButtonProps>;
  RedoButton: ComponentType<UndoRedoButtonProps>;
} => {
  const undoContent = config.undoContent ? config.undoContent : '↺';
  const redoContent = config.redoContent ? config.redoContent : '↻';
  const store: UndoPuginStore = {
    getEditorState: undefined,
    setEditorState: undefined,
  };

  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const DecoratedUndoButton = (props: UndoRedoButtonProps): ReactElement => (
    <UndoButton {...props} theme={theme} store={store}>
      {undoContent}
    </UndoButton>
  );
  const DecoratedRedoButton = (props: UndoRedoButtonProps): ReactElement => (
    <RedoButton {...props} theme={theme} store={store}>
      {redoContent}
    </RedoButton>
  );
  return {
    UndoButton: DecoratedUndoButton,
    RedoButton: DecoratedRedoButton,
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
  };
};
