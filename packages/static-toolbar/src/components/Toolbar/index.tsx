/* eslint-disable react/no-array-index-key */
import React, { ComponentType, FC, ReactElement } from 'react';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  DraftJsStyleButtonProps,
} from 'draft-js-buttons';
import PropTypes from 'prop-types';
import { StaticToolBarPluginStore, StaticToolbarPluginTheme } from '../../';

export interface ToolbarPubProps {
  children?: FC<DraftJsStyleButtonProps>;
}

interface ToolbarProps extends ToolbarPubProps {
  store: StaticToolBarPluginStore;
  theme: StaticToolbarPluginTheme;
  overrideContent?: ComponentType<DraftJsStyleButtonProps>;
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

  // UNSAFE_componentWillMount() {
  //   this.props.store.subscribeToItem('selection', () => this.forceUpdate());
  // }

  // componentWillUnmount() {
  //   this.props.store.unsubscribeFromItem('selection', () => this.forceUpdate());
  // }

  /**
   * This can be called by a child in order to render custom content instead
   * of the regular structure. It's the responsibility of the callee to call
   * this function again with `undefined` in order to reset `overrideContent`.
   * @param {Component} overrideContent
   */
  onOverrideContent = (
    overrideContent: ComponentType<DraftJsStyleButtonProps>
  ): void => this.setState({ overrideContent });

  renderDefaultButtons = (
    externalProps: DraftJsStyleButtonProps
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
    const childrenProps = {
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
