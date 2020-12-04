import React, { ComponentType, ReactElement, ReactNode } from 'react';
import { EmojiInlineTextProps, EmojiPluginTheme } from '../../index';

export interface EmojiProps {
  children: ReactNode;
  theme: EmojiPluginTheme;
  className: string;
  decoratedText: string;
  emojiInlineText: ComponentType<EmojiInlineTextProps>;
}

export default function Emoji({
  theme = {},
  className,
  decoratedText,
  emojiInlineText: EmojiInlineText,
  children,
}: EmojiProps): ReactElement {
  return (
    <EmojiInlineText
      className={className}
      decoratedText={decoratedText}
      theme={theme}
    >
      {children}
    </EmojiInlineText>
  );
}
