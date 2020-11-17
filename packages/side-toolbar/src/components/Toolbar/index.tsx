/* eslint-disable react/no-array-index-key */
import React, { CSSProperties, ReactElement, FC } from 'react';
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
import BlockTypeSelect, { BlockTypeSelectChildProps } from '../BlockTypeSelect';
import { SideToolbarPluginTheme } from '../../theme';
import { SideToolbarPluginStore, SideToolbarPosition } from '../..';

export type SideToolbarChildrenProps = BlockTypeSelectChildProps;

interface ToolbarProps {
  children?: FC<SideToolbarChildrenProps>;
  store: SideToolbarPluginStore;
  position: SideToolbarPosition;
  theme: SideToolbarPluginTheme;
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

  state = {
    position: {
      transform: 'scale(0)',
    },
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
        position: {
          transform: 'scale(0)',
        },
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

      // The editor root should be two levels above the node from
      // `getEditorRef`. In case this changes in the future, we
      // attempt to find the node dynamically by traversing upwards.
      const editorRef = this.props.store.getItem('getEditorRef')!();
      if (!editorRef) return;

      // this keeps backwards-compatibility with react 15
      let editorRoot =
        editorRef.refs && editorRef.refs.editor
          ? editorRef.refs.editor
          : editorRef.editor;
      while (editorRoot.className.indexOf('DraftEditor-root') === -1) {
        editorRoot = editorRoot.parentNode as HTMLElement;
      }

      const position: CSSProperties = {
        top: node.offsetTop + editorRoot.offsetTop,
        transform: 'scale(1)',
        transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)',
      };
      // TODO: remove the hard code(width for the hover element)
      if (this.props.position === 'right') {
        // eslint-disable-next-line no-mixed-operators
        position.left =
          editorRoot.offsetLeft + editorRoot.offsetWidth + 80 - 36;
      } else {
        position.left = editorRoot.offsetLeft - 80;
      }

      this.setState({
        position,
      });
    }, 0);
  };

  render(): ReactElement {
    const { theme, store } = this.props;
    return (
      <div className={theme.toolbarStyles?.wrapper} style={this.state.position}>
        <BlockTypeSelect
          getEditorState={store.getItem('getEditorState')!}
          setEditorState={store.getItem('setEditorState')!}
          theme={theme}
          childNodes={this.props.children!}
        />
      </div>
    );
  }
}
