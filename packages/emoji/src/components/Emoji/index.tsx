import React, { ReactElement, ReactNode } from 'react';
import { EmojiPluginTheme } from '../../index';
import NativeEmojiInlineText from './NativEmojiInlineText';
import JoyPixelEmojiInlineText from './JoyPixelEmojiInlineText';

export interface EmojiProps {
  children: ReactNode;
  theme: EmojiPluginTheme;
  className: string;
  decoratedText: string;
  useNativeArt: boolean;
}

export default function Emoji({
  theme = {},
  className,
  decoratedText,
  useNativeArt,
  children,
}: EmojiProps): ReactElement {
  if (useNativeArt === true) {
    return (
      <NativeEmojiInlineText
        className={className}
        decoratedText={decoratedText}
        theme={theme}
      >
        {children}
      </NativeEmojiInlineText>
    );
  }
  return (
    <JoyPixelEmojiInlineText
      className={className}
      decoratedText={decoratedText}
      theme={theme}
    >
      {children}
    </JoyPixelEmojiInlineText>
  );
}
