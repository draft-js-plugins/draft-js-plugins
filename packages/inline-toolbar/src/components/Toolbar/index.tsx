import React, {
  Fragment,
  ComponentType,
  CSSProperties,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  children?: FC<ToolbarChildrenProps>;
  isVisible?: boolean;
  position?: { top: number; left: number };
  overrideContent?: ComponentType<ToolbarChildrenProps>;
  theme: InlineToolbarPluginTheme;
}

export const Toolbar: FC<ToolbarProps> = ({
  store: defaultStore,
  children,
  isVisible: defaultIsVisible,
  position: defaultPosition,
  overrideContent: defaultOverrideContent,
  theme: defaultTheme,
}: ToolbarProps) => {
  const [toolbarPropsState, setToolbarPropsState] = useState<ToolbarProps>({
    store: defaultStore,
    isVisible: defaultIsVisible,
    position: defaultPosition,
    theme: defaultTheme,
    overrideContent: defaultOverrideContent,
  });

  const toolbar = useRef<HTMLDivElement>(null);
  const onOverrideContent = (
    newOverrideContent: ComponentType<ToolbarChildrenProps> | undefined
  ): void => {
    setToolbarPropsState((prev) => ({
      ...prev,
      overrideContent: newOverrideContent,
    }));
  };

  const onSelectionChanged = (): void => {
    // need to wait a tick for window.getSelection() to be accurate
    // when focusing editor with already present selection
    setTimeout(() => {
      if (!toolbar) return;

      // The editor root should be two levels above the node from
      // `getEditorRef`. In case this changes in the future, we
      // attempt to find the node dynamically by traversing upwards.
      const editorRef = toolbarPropsState.store.getItem('getEditorRef')!();
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
      while (ancestorNode !== null && ancestorNode.nodeName !== 'HTML') {
        scrollOffset += ancestorNode.scrollTop ?? 0;
        ancestorNode = ancestorNode.parentNode as HTMLElement;
      }

      const newPosition = {
        top:
          editorRoot.offsetTop -
          scrollOffset -
          (toolbar.current?.offsetHeight || 0) +
          (selectionRect.top - editorRootRect.top) +
          extraTopOffset,
        left:
          editorRoot.offsetLeft +
          (selectionRect.left - editorRootRect.left) +
          selectionRect.width / 2,
      };
      setToolbarPropsState((prevState) => ({
        ...prevState,
        position: newPosition,
      }));
    });
  };

  const getStyle = (): CSSProperties => {
    const { overrideContent, position, store } = toolbarPropsState;
    const selection = store.getItem('getEditorState')!().getSelection();
    // overrideContent could for example contain a text input, hence we always show overrideContent
    // TODO: Test readonly mode and possibly set isVisible to false if the editor is readonly
    const visible =
      (!selection.isCollapsed() && selection.getHasFocus()) || overrideContent;
    const style: CSSProperties = { ...position! };

    if (visible) {
      style.visibility = 'visible';
      style.transform = 'translate(-50%) scale(1)';
      style.transition = 'transform 0.15s cubic-bezier(.3,1.2,.2,1)';
    } else {
      style.transform = 'translate(-50%) scale(0)';
      style.visibility = 'hidden';
    }

    return style;
  };

  const childrenProps: ToolbarChildrenProps = {
    theme: toolbarPropsState.theme.buttonStyles,
    getEditorState: toolbarPropsState.store.getItem('getEditorState')!,
    setEditorState: toolbarPropsState.store.getItem('setEditorState')!,
    onOverrideContent,
  };

  useEffect(() => {
    toolbarPropsState.store.subscribeToItem('selection', onSelectionChanged);
  }, []);

  useEffect(
    () => () => {
      toolbarPropsState.store.unsubscribeFromItem(
        'selection',
        onSelectionChanged
      );
    },
    []
  );
  const { overrideContent: OverrideContent } = toolbarPropsState;

  return (
    <div
      className={toolbarPropsState.theme.toolbarStyles.toolbar}
      style={getStyle()}
      ref={toolbar}
    >
      {OverrideContent ? (
        <OverrideContent {...childrenProps} />
      ) : (
        <>
          {children ? (
            children(childrenProps)
          ) : (
            <Fragment>
              <ItalicButton {...childrenProps} />
              <BoldButton {...childrenProps} />
              <UnderlineButton {...childrenProps} />
              <CodeButton {...childrenProps} />
            </Fragment>
          )}
        </>
      )}
    </div>
  );
};

export default Toolbar;
