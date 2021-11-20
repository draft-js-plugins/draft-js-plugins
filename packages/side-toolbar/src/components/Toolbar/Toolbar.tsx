import React, {
  ReactElement,
  FC,
  ComponentType,
  useState,
  useCallback,
  useEffect,
} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import DraftOffsetKey from 'draft-js/lib/DraftOffsetKey';
import { EditorState } from 'draft-js';
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
  UnorderedListButton,
  OrderedListButton,
} from '@draft-js-plugins/buttons';
import BlockTypeSelect, {
  BlockTypeSelectChildProps,
  CreateBlockTypeSelectPopperOptionsFn,
} from '../BlockTypeSelect/BlockTypeSelect';
import { SideToolbarPluginTheme } from '../../theme';
import {
  PopperOptions,
  SideToolbarPluginStore,
  SideToolbarPosition,
} from '../..';
import Popover from './Popover';
import { SideToolbarButtonProps } from '../BlockTypeSelect/SideToolbarButton';

export type SideToolbarChildrenProps = BlockTypeSelectChildProps;

interface ToolbarProps {
  children?: FC<SideToolbarChildrenProps>;
  store: SideToolbarPluginStore;
  position: SideToolbarPosition;
  theme: SideToolbarPluginTheme;
  popperOptions?: PopperOptions;
  createBlockTypeSelectPopperOptions?: CreateBlockTypeSelectPopperOptionsFn;
  sideToolbarButtonComponent: ComponentType<SideToolbarButtonProps>;
}

function DefaultChildren(
  externalProps: SideToolbarChildrenProps
): ReactElement {
  // may be use React.Fragment instead of div to improve perfomance after React 16
  return (
    <div>
      <HeadlineOneButton {...externalProps} />
      <HeadlineTwoButton {...externalProps} />
      <BlockquoteButton {...externalProps} />
      <CodeBlockButton {...externalProps} />
      <UnorderedListButton {...externalProps} />
      <OrderedListButton {...externalProps} />
    </div>
  );
}

export default function Toolbar({
  theme,
  position,
  popperOptions,
  store,
  createBlockTypeSelectPopperOptions,
  children = DefaultChildren,
  sideToolbarButtonComponent: SideToolbarButton,
}: ToolbarProps): ReactElement | null {
  const [show, setShow] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  );
  const [buttonReferenceElement, setButtonReferenceElement] =
    useState<HTMLElement | null>(null);

  const onEditorStateChange = useCallback((editorState?: EditorState) => {
    const selection = editorState!.getSelection();
    if (!selection.getHasFocus()) {
      setReferenceElement(null);
      setShow(false);
      return;
    }

    const currentContent = editorState!.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(selection.getStartKey());
    // TODO verify that always a key-0-0 exists
    const offsetKey = DraftOffsetKey.encode(currentBlock.getKey(), 0, 0);
    // Note: need to wait on tick to make sure the DOM node has been create by Draft.js
    setTimeout(() => {
      const node = document.querySelectorAll<HTMLDivElement>(
        `[data-offset-key="${offsetKey}"]`
      )[0];
      setReferenceElement(node);
    }, 0);
  }, []);

  useEffect(() => {
    store.subscribeToItem('editorState', onEditorStateChange);
    return () => {
      store.unsubscribeFromItem('editorState', onEditorStateChange);
    };
  }, [store]);

  if (referenceElement === null) {
    //do not show popover if reference element is not there
    return null;
  }

  return (
    <>
      <Popover
        className={theme.toolbarStyles?.wrapper}
        referenceElement={referenceElement}
        position={position}
        popperOptions={popperOptions}
      >
        <div
          ref={setButtonReferenceElement}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <SideToolbarButton
            className={theme.blockTypeSelectStyles?.blockType}
          />
        </div>
      </Popover>
      <BlockTypeSelect
        getEditorState={store.getItem('getEditorState')!}
        setEditorState={store.getItem('setEditorState')!}
        theme={theme}
        childNodes={children}
        referenceElement={buttonReferenceElement}
        show={show}
        rootReferenceElement={referenceElement}
        createBlockTypeSelectPopperOptions={createBlockTypeSelectPopperOptions}
      />
    </>
  );
}
