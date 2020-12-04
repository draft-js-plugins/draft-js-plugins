import React, { ReactElement } from 'react';
import { shortnameToImage, toShort } from 'emoji-toolkit';
import clsx from 'clsx';
import { EmojiInlineTextProps } from '../..';
import NativeEmojiInlineText from './NativEmojiInlineText';

export default function JoyPixelEmojiInlineText({
  decoratedText,
  theme,
  children,
  className,
}: EmojiInlineTextProps): ReactElement {
  const shortName = toShort(decoratedText);
  const imgTag = shortnameToImage(shortName);
  const path = /src="(.*)"/.exec(imgTag)?.[1];
  if (!path) {
    return (
      <NativeEmojiInlineText decoratedText={decoratedText} theme={theme}>
        {children}
      </NativeEmojiInlineText>
    );
  }

  const backgroundImage = `url(${path})`;
  const combinedClassName = clsx(theme.emoji, className);

  return (
    <span
      className={combinedClassName}
      title={shortName}
      style={{ backgroundImage }}
    >
      {children}
    </span>
  );
}
