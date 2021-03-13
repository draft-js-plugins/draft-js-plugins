import React, { ReactElement } from 'react';
import { EmojiImageProps } from '../..';

export default function NativeEmojiImage({
  unicode,
  emoji,
}: EmojiImageProps): ReactElement {
  return <span title={emoji}>{unicode}</span>;
}
