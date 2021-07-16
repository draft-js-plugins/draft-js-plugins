/* eslint-disable react/no-array-index-key */
import React, { ReactElement, FC, ComponentType } from 'react';
import PropTypes from 'prop-types';
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
  sideToolbarButtonComponent: ComponentType<SideToolbarButtonProps>;
}

interface ToolbarState {
  referenceElement: HTMLElement | null;
}

export default class Toolbar extends React.Component<ToolbarProps> {
  static defaultProps = {
    children: (externalProps: SideToolbarChildrenProps): ReactElement => (
      // may be use React.Fragment instead of div to improve perfomance after React 16
      <div>
        <HeadlineOneButton {...externalProps} />
        <HeadlineTwoButton {...externalProps} />
        <BlockquoteButton {...externalProps} />
        <CodeBlockButton {...externalProps} />
        <UnorderedListButton {...externalProps} />
        <OrderedListButton {...externalProps} />
      </div>
    ),
  };

  static propTypes = {
    children: PropTypes.func,
  };

  state: ToolbarState = {
    referenceElement: null,
  };

  componentDidMount(): void {
    this.props.store.subscribeToItem('editorState', this.onEditorStateChange);
  }

  componentWillUnmount(): void {
    this.props.store.unsubscribeFromItem(
      'editorState',
      this.onEditorStateChange
    );
  }

  onEditorStateChange = (editorState?: EditorState): void => {
    const selection = editorState!.getSelection();
    if (!selection.getHasFocus()) {
      this.setState({
        referenceElement: null,
      });
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

      this.setState({
        referenceElement: node,
      });
    }, 0);
  };

  render(): ReactElement | null {
    const {
      theme,
      store,
      popperOptions,
      position,
      children,
      sideToolbarButtonComponent,
    } = this.props;

    if (this.state.referenceElement === null) {
      //do not show popover if reference element is not there
      return null;
    }

    return (
      <Popover
        className={theme.toolbarStyles?.wrapper}
        referenceElement={this.state.referenceElement}
        position={position}
        popperOptions={popperOptions}
      >
        <BlockTypeSelect
          getEditorState={store.getItem('getEditorState')!}
          setEditorState={store.getItem('setEditorState')!}
          theme={theme}
          childNodes={children!}
          sideToolbarButtonComponent={sideToolbarButtonComponent}
        />
      </Popover>
    );
  }
}
