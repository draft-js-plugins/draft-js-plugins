/* eslint-disable react/no-array-index-key */
import React, { ComponentType, CSSProperties, FC, ReactElement } from 'react';
import { EditorState, getVisibleSelectionRect } from 'draft-js';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  DraftJsButtonTheme,
} from '@draft-js-plugins/buttons';
import { InlineToolbarPluginStore } from '../../';
import { InlineToolbarPluginTheme } from '../../theme';

interface OverrideContentProps {
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
  onOverrideContent: (content: ComponentType<unknown> | undefined) => void;
}

export interface ToolbarChildrenProps {
  theme: DraftJsButtonTheme;
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
  onOverrideContent: (
    content: ComponentType<OverrideContentProps> | undefined
  ) => void;
}

interface ToolbarProps {
  store: InlineToolbarPluginStore;
  children?: FC<ToolbarChildrenProps>;
  isVisible?: boolean;
  position?: { top: number; left: number };
  overrideContent?: ComponentType<ToolbarChildrenProps>;
  theme: InlineToolbarPluginTheme;
}

export default class Toolbar extends React.Component<ToolbarProps> {
  static defaultProps = {
    children: (externalProps: ToolbarChildrenProps): ReactElement => (
      // may be use React.Fragment instead of div to improve perfomance after React 16
      <div>
        <ItalicButton {...externalProps} />
        <BoldButton {...externalProps} />
        <UnderlineButton {...externalProps} />
        <CodeButton {...externalProps} />
      </div>
    ),
  };

  state: ToolbarProps = {
    isVisible: false,
    position: undefined,

    /**
     * If this is set, the toolbar will render this instead of the children
     * prop and will also be shown when the editor loses focus.
     * @type {Component}
     */
    overrideContent: undefined,
  } as ToolbarProps;
  toolbar: HTMLDivElement | null = null;

  UNSAFE_componentWillMount(): void {
    this.props.store.subscribeToItem('selection', this.onSelectionChanged);
  }

  componentWillUnmount(): void {
    this.props.store.unsubscribeFromItem('selection', this.onSelectionChanged);
  }

  /**
   * This can be called by a child in order to render custom content instead
   * of the children prop. It's the responsibility of the callee to call
   * this function again with `undefined` in order to reset `overrideContent`.
   * @param {Component} overrideContent
   */
  onOverrideContent = (
    overrideContent: ComponentType<OverrideContentProps> | undefined
  ): void => {
    this.setState({ overrideContent });
  };

  onSelectionChanged = (): void => {
    // need to wait a tick for window.getSelection() to be accurate
    // when focusing editor with already present selection
    setTimeout(() => {
      if (!this.toolbar) return;

      // The editor root should be two levels above the node from
      // `getEditorRef`. In case this changes in the future, we
      // attempt to find the node dynamically by traversing upwards.
      const editorRef = this.props.store.getItem('getEditorRef')!();
      if (!editorRef) return;

      // This keeps backwards compatibility with React 15
      let editorRoot =
        editorRef.refs && editorRef.refs.editor
          ? editorRef.refs.editor
          : editorRef.editor;
      while (editorRoot.className.indexOf('DraftEditor-root') === -1) {
        editorRoot = editorRoot.parentNode as HTMLElement;
      }
      const editorRootRect = editorRoot.getBoundingClientRect();

      const parentWindow =
        editorRoot.ownerDocument && editorRoot.ownerDocument.defaultView;
      const selectionRect = getVisibleSelectionRect(parentWindow || window);
      if (!selectionRect) return;

      // The toolbar shouldn't be positioned directly on top of the selected text,
      // but rather with a small offset so the caret doesn't overlap with the text.
      const extraTopOffset = -5;

      // Account for scrollTop of all ancestors
      let scrollOffset = 0;
      let ancestorNode = editorRoot.parentNode as HTMLElement;
      while (ancestorNode !== null) {
        scrollOffset += ancestorNode.scrollTop ?? 0;
        ancestorNode = ancestorNode.parentNode as HTMLElement;
      }

      const position = {
        top:
          editorRoot.offsetTop -
          scrollOffset -
          this.toolbar.offsetHeight +
          (selectionRect.top - editorRootRect.top) +
          extraTopOffset,
        left:
          editorRoot.offsetLeft +
          (selectionRect.left - editorRootRect.left) +
          selectionRect.width / 2,
      };
      this.setState({ position });
    });
  };

  getStyle(): CSSProperties {
    const { store } = this.props;
    const { overrideContent, position } = this.state;
    const selection = store.getItem('getEditorState')!().getSelection();
    // overrideContent could for example contain a text input, hence we always show overrideContent
    // TODO: Test readonly mode and possibly set isVisible to false if the editor is readonly
    const isVisible =
      (!selection.isCollapsed() && selection.getHasFocus()) || overrideContent;
    const style: CSSProperties = { ...position! };

    if (isVisible) {
      style.visibility = 'visible';
      style.transform = 'translate(-50%) scale(1)';
      style.transition = 'transform 0.15s cubic-bezier(.3,1.2,.2,1)';
    } else {
      style.transform = 'translate(-50%) scale(0)';
      style.visibility = 'hidden';
    }

    return style;
  }

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
      <div
        className={theme.toolbarStyles.toolbar}
        style={this.getStyle()}
        ref={(element) => {
          this.toolbar = element;
        }}
      >
        {OverrideContent ? (
          <OverrideContent {...childrenProps} />
        ) : (
          this.props.children!(childrenProps)
        )}
      </div>
    );
  }
}
