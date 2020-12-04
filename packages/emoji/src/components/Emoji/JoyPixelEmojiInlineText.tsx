import clsx from 'clsx';
import { toShort, shortnameToImage } from 'emoji-toolkit';
import React, { ReactElement } from 'react';
import { EmojiInlineTextProps } from '../..';

export default function JoyPixelEmojiInlineText({
  decoratedText,
  theme,
  children,
  className,
}: EmojiInlineTextProps): ReactElement {
  const shortName = toShort(decoratedText);
  const imgTag = shortnameToImage(shortName);
  const path = /src="(.*)"/.exec(imgTag)?.[1];
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
