import { ContentBlock, ContentState } from 'draft-js';
import React, { Component, MouseEvent, ReactElement } from 'react';
import { ImmutableDataStickerPluginItem } from '..';
import { StickerPluginTheme } from '../theme';

export interface StickerPubProps {
  block: ContentBlock;
  contentState: ContentState;
  blockProps: { onRemove(blockKey: string): void };
}

interface StickerProps extends StickerPubProps {
  stickers: ImmutableDataStickerPluginItem;
  attachRemoveButton?: boolean;
  theme?: StickerPluginTheme;
}

export default class Sticker extends Component<StickerProps> {
  remove = (event: MouseEvent): void => {
    // Note: important to avoid a content edit change
    event.preventDefault();
    event.stopPropagation();

    this.props.blockProps.onRemove(this.props.block.getKey());
  };

  render(): ReactElement {
    const { block, stickers, theme = {}, contentState } = this.props;
    const removeButton = (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <span
        className={theme.stickerRemoveButton}
        onClick={this.remove}
        role="button"
      >
        ✕
      </span>
    );

    const data = contentState.getEntity(block.getEntityAt(0)).getData();
    return (
      <figure
        contentEditable={false}
        data-offset-key={`${block.get('key')}-0-0`}
        className={theme.sticker}
      >
        <img
          className={theme.stickerImage}
          src={stickers.getIn(['data', data.id, 'url'])}
          role="presentation"
        />
        {this.props.attachRemoveButton ? removeButton : null}
      </figure>
    );
  }
}
