import React, { Component, ReactElement } from 'react';
import { StickerPluginTheme } from '../../theme';

interface StickerOptionProps {
  id: string;
  url: string;
  theme?: StickerPluginTheme;
  onClick(id: string): void;
}

/**
 * Showcases a sticker one can then pick to add to the editor
 */
export default class StickerOption extends Component<StickerOptionProps> {
  onClick = (): void => {
    this.props.onClick(this.props.id);
  };

  render(): ReactElement {
    const { id, url, theme = {} } = this.props;
    return (
      <button
        onClick={this.onClick}
        key={id}
        type="button"
        className={theme.selectSticker}
      >
        <img
          className={theme.selectStickerImage}
          src={url}
          role="presentation"
        />
      </button>
    );
  }
}
