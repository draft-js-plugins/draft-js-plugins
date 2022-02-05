/* eslint-disable react/no-array-index-key */
import React, { ReactElement } from 'react';
import { EditorState } from 'draft-js';
import {
  AlignTextLeftButton,
  AlignTextCenterButton,
  AlignTextRightButton,
} from '@draft-js-plugins/buttons';
import { AlignmentPluginStore } from '.';
import type { TextAlignmentPluginTheme } from './theme';

export interface AlignmentPluginsPubParams {
  theme: TextAlignmentPluginTheme;
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
}

interface ToolbarProps {
  store: AlignmentPluginStore;
  theme: TextAlignmentPluginTheme;
}

export default class Alignment extends React.Component<ToolbarProps> {
  renderAlignmentButtons = (
    externalProps: AlignmentPluginsPubParams
  ): ReactElement => (
    <>
      <AlignTextLeftButton {...externalProps} />
      <AlignTextCenterButton {...externalProps} />
      <AlignTextRightButton {...externalProps} />
    </>
  );

  render(): ReactElement {
    const { store, theme } = this.props;
    const childrenProps: AlignmentPluginsPubParams = {
      theme,
      getEditorState: store.getItem('getEditorState')!,
      setEditorState: store.getItem('setEditorState')!,
    };

    return this.renderAlignmentButtons(childrenProps);
  }
}
