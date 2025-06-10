/* eslint-disable no-nested-ternary */
import React, { ComponentType, CSSProperties, Component } from 'react';
import { EditorState, getVisibleSelectionRect } from 'draft-js';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  DraftJsButtonTheme,
} from '@draft-js-plugins/buttons';
import { InlineToolbarPluginStore } from '../..';
import { InlineToolbarPluginTheme } from '../../theme';

export interface ToolbarChildrenProps {
  theme: DraftJsButtonTheme;
  getEditorState: () => EditorState;
  setEditorState: (editorState: EditorState) => void;
  onOverrideContent: (
    content: ComponentType<ToolbarChildrenProps> | undefined
  ) => void;
}

interface ToolbarProps {
  store: InlineToolbarPluginStore;
  children?:
    | ((externalProps: ToolbarChildrenProps) => React.ReactElement)
    | React.FC<ToolbarChildrenProps>;
  theme: InlineToolbarPluginTheme;
}

interface ToolbarState {
  isVisible: boolean;
  position?: { top: number; left: number };
  overrideContent?: ComponentType<ToolbarChildrenProps>;
}

export class Toolbar extends Component<ToolbarProps, ToolbarState> {
  toolbar: HTMLDivElement | null = null;

  state: ToolbarState = {
    isVisible: false,
    position: undefined,
    overrideContent: undefined,
  };
  static defaultProps: {
    children: (externalProps: ToolbarChildrenProps) => React.ReactElement;
  } = {
    children: (externalProps: ToolbarChildrenProps) => (
      <div>
        <ItalicButton {...externalProps} />
        <BoldButton {...externalProps} />
        <UnderlineButton {...externalProps} />
        <CodeButton {...externalProps} />
      </div>
    ),
  };

  UNSAFE_componentWillMount(): void {
    this.props.store.subscribeToItem('selection', this.onSelectionChanged);
  }

  componentWillUnmount(): void {
    this.props.store.unsubscribeFromItem('selection', this.onSelectionChanged);
  }

  onOverrideContent = (
    overrideContent: ComponentType<ToolbarChildrenProps> | undefined
  ): void => {
    this.setState({ overrideContent });
  };

  onSelectionChanged = (): void => {
    // wait a tick for accurate window.getSelection()
    setTimeout(() => {
      if (!this.toolbar) return;

      const editorRef = this.props.store.getItem('getEditorRef')!();
      if (!editorRef) return;

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

      // Vertical offsets
      const toolbarHeight = this.toolbar.offsetHeight;
      const editorHeight = editorRootRect.height;
      const extraTopOffset = -5; // when placing above
      const extraBottomOffset = 5; // when placing below

      // Compute positions
      const rawAbove =
        selectionRect.top - editorRootRect.top - toolbarHeight + extraTopOffset;
      const rawBelow =
        selectionRect.bottom - editorRootRect.top + extraBottomOffset;
      // Choose below if above overflows
      const rawTopRelative = rawAbove < 0 ? rawBelow : rawAbove;

      // Clamp within editor vertical bounds
      const clampedTopRelative = Math.min(
        Math.max(rawTopRelative, 0),
        editorHeight - toolbarHeight
      );
      const top = editorRoot.offsetTop + clampedTopRelative;

      // Horizontal position: center tooltip and clamp within editor width
      const toolbarWidth = this.toolbar.offsetWidth;
      const editorWidth = editorRootRect.width;
      const rawLeftRelative =
        selectionRect.left - editorRootRect.left + selectionRect.width / 2;
      const halfToolbar = toolbarWidth / 2;
      const clampedLeftRelative = Math.min(
        Math.max(rawLeftRelative, halfToolbar),
        editorWidth - halfToolbar
      );
      const left = editorRoot.offsetLeft + clampedLeftRelative;

      const position = { top, left };
      this.setState({ position });
    });
  };
  getStyle(): CSSProperties {
    const { store } = this.props;
    const { overrideContent, position } = this.state;
    const selection = store.getItem('getEditorState')!().getSelection();
    const isVisible =
      (!selection.isCollapsed() && selection.getHasFocus()) ||
      !!overrideContent;

    const style: CSSProperties = { ...position };
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
  render(): React.ReactNode {
    const { theme, store, children } = this.props;
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
        ) : // Handle both FC and function that returns ReactElement
        typeof children === 'function' ? (
          children(childrenProps)
        ) : (
          children && React.createElement(children, childrenProps)
        )}
      </div>
    );
  }
}

export default Toolbar;
