/* eslint-disable react/no-array-index-key */
import {
  AlignTextCenterButton,
  AlignTextLeftButton,
  AlignTextRightButton,
  DraftJsButtonTheme,
} from '@draft-js-plugins/buttons';
import { EditorState } from 'draft-js';
import React, { ReactElement } from 'react';

export interface AlignmentPluginsPubParams {
  theme: DraftJsButtonTheme;
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
}

export default function Alignment(
  props: AlignmentPluginsPubParams
): ReactElement {
  return (
    <>
      <AlignTextLeftButton {...props} />
      <AlignTextCenterButton {...props} />
      <AlignTextRightButton {...props} />
    </>
  );
}
