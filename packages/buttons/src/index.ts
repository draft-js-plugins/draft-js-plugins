import { ComponentType } from 'react';
import { EditorState } from 'draft-js';
import createBlockStyleButton from './utils/createBlockStyleButton';
import createInlineStyleButton from './utils/createInlineStyleButton';
import createBlockAlignmentButton from './utils/createBlockAlignmentButton';
import createTextAlignmentButton from './utils/createTextAlignmentButton';
import ItalicButton from './components/ItalicButton';
import BoldButton from './components/BoldButton';
import CodeButton from './components/CodeButton';
import UnderlineButton from './components/UnderlineButton';
import HeadlineOneButton from './components/HeadlineOneButton';
import HeadlineTwoButton from './components/HeadlineTwoButton';
import HeadlineThreeButton from './components/HeadlineThreeButton';
import UnorderedListButton from './components/UnorderedListButton';
import OrderedListButton from './components/OrderedListButton';
import BlockquoteButton from './components/BlockquoteButton';
import CodeBlockButton from './components/CodeBlockButton';
import AlignBlockDefaultButton from './components/AlignBlockDefaultButton';
import AlignBlockCenterButton from './components/AlignBlockCenterButton';
import AlignBlockLeftButton from './components/AlignBlockLeftButton';
import AlignBlockRightButton from './components/AlignBlockRightButton';
import AlignTextLeftButton from './components/AlignTextLeftButton';
import AlignTextCenterButton from './components/AlignTextCenterButton';
import AlignTextRightButton from './components/AlignTextRightButton';
import SubButton from './components/SubButton';
import SupButton from './components/SupButton';

export interface DraftJsButtonTheme {
  // CSS classes to apply
  active?: string;
  button?: string;
  buttonWrapper?: string;
}

export interface DraftJsButtonProps {
  theme: DraftJsButtonTheme;
}

export interface DraftJsBlockAlignmentButtonProps extends DraftJsButtonProps {
  alignment: string | null;
  setAlignment(val: { alignment: string }): void;
}
export interface DraftJsStyleButtonProps extends DraftJsButtonProps {
  setEditorState(editorState: EditorState): void;
  getEditorState(): EditorState;
}

export type DraftJsBlockAlignmentButtonType =
  ComponentType<DraftJsBlockAlignmentButtonProps>;
export type DraftJsStyleButtonType = ComponentType<DraftJsStyleButtonProps>;

export {
  createBlockAlignmentButton,
  createBlockStyleButton,
  createInlineStyleButton,
  createTextAlignmentButton,
  ItalicButton,
  BoldButton,
  SupButton,
  SubButton,
  CodeButton,
  UnderlineButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
  AlignBlockDefaultButton,
  AlignBlockCenterButton,
  AlignBlockLeftButton,
  AlignBlockRightButton,
  AlignTextLeftButton,
  AlignTextCenterButton,
  AlignTextRightButton,
};
