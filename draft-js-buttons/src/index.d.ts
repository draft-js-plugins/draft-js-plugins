import { EditorState } from "draft-js";
import { ComponentType, ReactNode } from "react";

export interface DraftJsButtonTheme {
  // CSS classes to apply
  active: string;
  button: string;
  buttonWrapper: string;
}

export interface DraftJsButtonProps {
  theme?: DraftJsButtonTheme;
}

export interface DraftJsBlockAlignmentButtonProps extends DraftJsButtonProps {
  alignment: string;

  setAlignment(alignment: string): void;
}

type DraftJsBlockAlignmentButtonType = ComponentType<
  DraftJsBlockAlignmentButtonProps
>;

export const AlignBlockCenterButton: DraftJsBlockAlignmentButtonType;
export const AlignBlockDefaultButton: DraftJsBlockAlignmentButtonType;
export const AlignBlockLeftButton: DraftJsBlockAlignmentButtonType;
export const AlignBlockRightButton: DraftJsBlockAlignmentButtonType;

export interface DraftJsStyleButtonProps extends DraftJsButtonProps {
  setEditorState(editorState: EditorState): void;

  getEditorState(): EditorState;
}

type DraftJsStyleButtonType = ComponentType<DraftJsStyleButtonProps>;

export const createBlockStyleButton: (
  alignment: string,
  children: ReactNode
) => DraftJsStyleButtonType;
export const createInlineStyleButton: (
  alignment: string,
  children: ReactNode
) => DraftJsStyleButtonType;

export const BlockquoteButton: DraftJsStyleButtonType;
export const BoldButton: DraftJsStyleButtonType;
export const CodeBlockButton: DraftJsStyleButtonType;
export const CodeButton: DraftJsStyleButtonType;
export const HeadlineOneButton: DraftJsStyleButtonType;
export const HeadlineThreeButton: DraftJsStyleButtonType;
export const HeadlineTwoButton: DraftJsStyleButtonType;
export const ItalicButton: DraftJsStyleButtonType;
export const OrderedListButton: DraftJsStyleButtonType;
export const SubButton: DraftJsStyleButtonType;
export const SupButton: DraftJsStyleButtonType;
export const UnderlineButton: DraftJsStyleButtonType;
export const UnorderedListButton: DraftJsStyleButtonType;
