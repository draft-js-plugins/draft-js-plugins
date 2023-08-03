import React, { ReactElement } from 'react';
import { EmojiImageProps } from '../..';

export default function NativeEmojiImage({
  emoji,
}: EmojiImageProps): ReactElement {
  return <span title={emoji.shortname}>{emoji.unicode}</span>;
}
