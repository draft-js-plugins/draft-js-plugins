import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import emojione from 'emojione';
import { EmojiPluginTheme } from '../../index';

export interface EmojiProps {
  children: ReactNode;
  theme: EmojiPluginTheme;
  cacheBustParam: string;
  imagePath: string;
  imageType: string;
  className: string;
  decoratedText: string;
  useNativeArt: boolean;
}

export default function Emoji({
  theme = {},
  cacheBustParam,
  imagePath,
  imageType,
  className,
  decoratedText,
  useNativeArt,
  children,
}: EmojiProps): ReactElement {
  const shortName = emojione.toShort(decoratedText);

  let emojiDisplay = null;
  if (useNativeArt === true) {
    emojiDisplay = (
      <span title={emojione.toShort(decoratedText)}>{children}</span>
    );
  } else {
    // short name to image url code steal from emojione source code
    const shortNameForImage =
      emojione.emojioneList[shortName].unicode[
        emojione.emojioneList[shortName].unicode.length - 1
      ];
    const backgroundImage = `url(${imagePath}${shortNameForImage}.${imageType}${cacheBustParam})`;
    const combinedClassName = clsx(theme.emoji, className);

    emojiDisplay = (
      <span
        className={combinedClassName}
        title={emojione.toShort(decoratedText)}
        style={{ backgroundImage }}
      >
        {children}
      </span>
    );
  }

  return emojiDisplay;
}
