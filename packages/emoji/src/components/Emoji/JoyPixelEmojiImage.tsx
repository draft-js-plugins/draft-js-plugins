import { toImage } from 'emoji-toolkit';
import React, { ReactElement } from 'react';
import { EmojiImageProps } from '../..';

export default function JoyPixelEmojiImage({
  emoji,
  theme,
}: EmojiImageProps): ReactElement {
  const imgTag = toImage(emoji);
  const path = /src="(.*)"/.exec(imgTag)?.[1];
  return (
    <img
      src={path}
      className={theme.emojiSelectPopoverEntryIcon}
      title={emoji}
      draggable={false}
      role="presentation"
    />
  );
}
