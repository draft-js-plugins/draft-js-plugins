import React, { ReactElement } from 'react';
import { EmojiImageProps } from '../..';
import convertShortNameToUnicode from '../../utils/convertShortNameToUnicode';
import emojiList from '../../utils/emojiList';

export default function NativeEmojiImage({
  emoji,
}: EmojiImageProps): ReactElement {
  const unicode = emojiList.list[emoji][0];
  const emojiDisplay = convertShortNameToUnicode(unicode);
  return <>{emojiDisplay}</>;
}
