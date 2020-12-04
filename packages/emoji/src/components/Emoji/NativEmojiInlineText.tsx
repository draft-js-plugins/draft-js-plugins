import { toShort } from 'emoji-toolkit';
import React, { ReactElement } from 'react';
import { EmojiInlineTextProps } from '../..';

export default function NativeEmojiInlineText({
  decoratedText,
  children,
}: EmojiInlineTextProps): ReactElement {
  return <span title={toShort(decoratedText)}>{children}</span>;
}
