import React, { ReactElement } from 'react';
import { shortnameToUnicode } from 'emoji-toolkit';
import { EmojiImageProps } from '../..';

export default function NativeEmojiImage({
  emoji,
}: EmojiImageProps): ReactElement {
  return <span title={emoji}>{shortnameToUnicode(emoji)}</span>;
}
