import { EditorState } from 'draft-js';
import { ButtonHTMLAttributes, ComponentType } from 'react';
import AlignBlockCenterButton from './components/AlignBlockCenterButton';
import AlignBlockDefaultButton from './components/AlignBlockDefaultButton';
import AlignBlockLeftButton from './components/AlignBlockLeftButton';
import AlignBlockRightButton from './components/AlignBlockRightButton';
import AlignTextCenterButton from './components/AlignTextCenterButton';
import AlignTextLeftButton from './components/AlignTextLeftButton';
import AlignTextRightButton from './components/AlignTextRightButton';
import BlockquoteButton from './components/BlockquoteButton';
import BoldButton from './components/BoldButton';
import CodeBlockButton from './components/CodeBlockButton';
import CodeButton from './components/CodeButton';
import HeadlineOneButton from './components/HeadlineOneButton';
import HeadlineThreeButton from './components/HeadlineThreeButton';
import HeadlineTwoButton from './components/HeadlineTwoButton';
import ItalicButton from './components/ItalicButton';
import OrderedListButton from './components/OrderedListButton';
import SubButton from './components/SubButton';
import SupButton from './components/SupButton';
import UnderlineButton from './components/UnderlineButton';
import UnorderedListButton from './components/UnorderedListButton';
import createBlockAlignmentButton from './utils/createBlockAlignmentButton';
import createBlockStyleButton from './utils/createBlockStyleButton';
import createInlineStyleButton from './utils/createInlineStyleButton';
import createTextAlignmentButton from './utils/createTextAlignmentButton';

export interface DraftJsButtonTheme {
  // CSS classes to apply
  active?: string;
  button?: string;
  buttonWrapper?: string;
}

export interface DraftJsButtonProps {
  theme: DraftJsButtonTheme;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
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
