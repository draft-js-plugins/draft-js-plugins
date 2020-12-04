import { toShort } from 'emoji-toolkit';
import React, { ReactElement, ReactNode } from 'react';
import { EmojiPluginTheme } from '../../theme';

export interface NativeEmojiInlineTextProps {
  theme: EmojiPluginTheme;
  decoratedText: string;
  children: ReactNode;
  className?: string;
}

export default function NativeEmojiInlineText({
  decoratedText,
  children,
}: NativeEmojiInlineTextProps): ReactElement {
  return <span title={toShort(decoratedText)}>{children}</span>;
}
