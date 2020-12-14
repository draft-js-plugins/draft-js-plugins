/* eslint-disable react/no-array-index-key */
import React, { ComponentType, FC, ReactElement } from 'react';
import { EditorState } from 'draft-js';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  DraftJsButtonTheme,
} from '@draft-js-plugins/buttons';
import PropTypes from 'prop-types';
import { StaticToolBarPluginStore, StaticToolbarPluginTheme } from '../../';

export interface ToolbarChildrenProps {
  theme: DraftJsButtonTheme;
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
  onOverrideContent: (
    content: ComponentType<ToolbarChildrenProps> | undefined
  ) => void;
}

export interface ToolbarPubProps {
  children?: FC<ToolbarChildrenProps>;
}

interface ToolbarProps extends ToolbarPubProps {
  store: StaticToolBarPluginStore;
  theme: StaticToolbarPluginTheme;
  overrideContent?: ComponentType<ToolbarChildrenProps>;
}

export default class Toolbar extends React.Component<ToolbarProps> {
  static propTypes = {
    children: PropTypes.func,
  };

  state = {
    /**
     * If this is set, the toolbar will render this instead of the regular
     * structure and will also be shown when the editor loses focus.
     * @type {Component}
     */
    overrideContent: undefined,
  } as ToolbarProps;

  /**
   * This can be called by a child in order to render custom content instead
   * of the regular structure. It's the responsibility of the callee to call
   * this function again with `undefined` in order to reset `overrideContent`.
   * @param {Component} overrideContent
   */
  onOverrideContent = (
    overrideContent: ComponentType<ToolbarChildrenProps> | undefined
  ): void => this.setState({ overrideContent });

  renderDefaultButtons = (
    externalProps: ToolbarChildrenProps
  ): ReactElement => (
    <div>
      <ItalicButton {...externalProps} />
      <BoldButton {...externalProps} />
      <UnderlineButton {...externalProps} />
      <CodeButton {...externalProps} />
    </div>
  );

  render(): ReactElement {
    const { theme, store } = this.props;
    const { overrideContent: OverrideContent } = this.state;
    const childrenProps: ToolbarChildrenProps = {
      theme: theme.buttonStyles,
      getEditorState: store.getItem('getEditorState')!,
      setEditorState: store.getItem('setEditorState')!,
      onOverrideContent: this.onOverrideContent,
    };

    return (
      <div className={theme.toolbarStyles.toolbar}>
        {OverrideContent ? (
          <OverrideContent {...childrenProps} />
        ) : (
          (this.props.children || this.renderDefaultButtons)(childrenProps)
        )}
      </div>
    );
  }
}
