import clsx from 'clsx';
import { toShort, shortnameToImage } from 'emoji-toolkit';
import React, { ReactElement, ReactNode } from 'react';
import { EmojiPluginTheme } from '../../theme';

export interface JoyPixelEmojiInlineTextProps {
  theme: EmojiPluginTheme;
  decoratedText: string;
  children: ReactNode;
  className?: string;
}

export default function JoyPixelEmojiInlineText({
  decoratedText,
  theme,
  children,
  className,
}: JoyPixelEmojiInlineTextProps): ReactElement {
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
