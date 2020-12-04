import { toImage } from 'emoji-toolkit';
import React, { ReactElement } from 'react';
import { EmojiPluginTheme } from '../../theme';

export interface JoyPixelEmojiImageProps {
  emoji: string;
  theme: EmojiPluginTheme;
}

export default function JoyPixelEmojiImage({
  emoji,
  theme,
}: JoyPixelEmojiImageProps): ReactElement {
  const imgTag = toImage(emoji);
  const path = /src="(.*)"/.exec(imgTag)?.[1];
  return (
    <img
      src={path}
      className={theme.emojiSelectPopoverEntryIcon}
      draggable={false}
      role="presentation"
    />
  );
}
