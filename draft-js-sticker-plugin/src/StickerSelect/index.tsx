import React, { Component, ReactElement, ReactNode } from 'react';
import { EditorState } from 'draft-js';
import StickerOption from './StickerOption';
import addSticker from '../modifiers/addSticker';
import { StickerPluginTheme } from '../theme';
import { ImmutableDataStickerPluginItem, ImmutableStickerPluginItem } from '..';

/**
 * Sets the CSS overflow value to newValue
 * Use like this: setOverflow('auto', document.body);
 */
function setOverflow(newValue: string, element: HTMLElement): void {
  element.style.overflow = newValue; // eslint-disable-line no-param-reassign
}

export interface StickerSelectPubParams {
  editor: {
    onChange(state: EditorState): void;
    state: { editorState: EditorState };
  };
}

interface StickerSelectParams extends StickerSelectPubParams {
  theme?: StickerPluginTheme;
  stickers: ImmutableDataStickerPluginItem;
  selectButtonContent: ReactNode;
}

/**
 * Sticker Selector Component
 */
export default class StickerSelect extends Component<StickerSelectParams> {
  // Start the selector closed
  state = {
    open: false,
  };
  preventNextClose?: boolean;

  // When the selector is open and users click anywhere on the page,
  // the selector should close
  componentDidMount(): void {
    document.addEventListener('click', this.closePopover);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.closePopover);
  }

  // When users are scrolling the popover, the page shouldn't scroll when
  // they reach the end of it
  onMouseEnter = (): void => {
    setOverflow('hidden', document.body);
  };

  onMouseLeave = (): void => {
    setOverflow('auto', document.body);
  };

  // Open the popover
  openPopover = (): void => {
    if (!this.state.open) {
      this.preventNextClose = true;
      this.setState({
        open: true,
      });
    }
  };

  // Close the popover
  closePopover = (): void => {
    if (!this.preventNextClose && this.state.open) {
      this.setState({
        open: false,
      });
    }

    this.preventNextClose = false;
  };

  // Add a sticker to the editor
  add = (id: string): void => {
    // TODO - review this approach
    const { editor } = this.props;
    editor.onChange(addSticker(editor.state.editorState, id));
  };

  render(): ReactElement {
    // Create the sticker selection elements
    const data = this.props.stickers.get('data') as ImmutableStickerPluginItem;
    const stickerElements = data.map((sticker) => {
      const id = sticker!.get('id');
      const url = sticker!.get('url');
      return (
        <StickerOption
          theme={this.props.theme}
          key={id}
          onClick={this.add}
          id={id}
          url={url}
        />
      );
    });

    const { theme = {} } = this.props;
    const popoverClassName = this.state.open
      ? theme.selectPopover
      : theme.selectClosedPopover;
    const buttonClassName = this.state.open
      ? theme.selectPressedButton
      : theme.selectButton;

    return (
      <div className={theme.select}>
        <button
          className={buttonClassName}
          onMouseUp={this.openPopover}
          type="button"
        >
          {this.props.selectButtonContent}
        </button>
        <div
          className={popoverClassName}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <div className={theme.selectStickerList}>
            {stickerElements.toList().toJS()}
          </div>
          <div className={theme.selectBottomGradient} />
        </div>
      </div>
    );
  }
}
