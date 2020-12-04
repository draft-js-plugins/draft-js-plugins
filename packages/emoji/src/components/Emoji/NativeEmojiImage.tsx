import React, { ReactElement } from 'react';
import { EmojiPluginTheme } from '../../theme';
import convertShortNameToUnicode from '../../utils/convertShortNameToUnicode';
import emojiList from '../../utils/emojiList';

export interface NativeEmojiImageProps {
  emoji: string;
  theme: EmojiPluginTheme;
}

export default function NativeEmojiImage({
  emoji,
}: NativeEmojiImageProps): ReactElement {
  const unicode = emojiList.list[emoji][0];
  const emojiDisplay = convertShortNameToUnicode(unicode);
  return <>{emojiDisplay}</>;
}
