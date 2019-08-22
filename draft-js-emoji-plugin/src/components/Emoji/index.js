import React from 'react';
import clsx from 'clsx';
import { Emoji, getEmojiDataFromNative } from '@tunoltd/emoji-mart';
import data from '@tunoltd/emoji-mart/data/all.json';

const EmojiComponent = ({
  theme = {},
  className,
  decoratedText,
  emojiSet,
  useNativeArt,
  ...props
}) => {
  const emojiData = getEmojiDataFromNative(decoratedText, emojiSet, data);

  let emojiDisplay = null;
  if (useNativeArt === true || !emojiData) {
    emojiDisplay = (
      <span title={emojiData ? emojiData.name : decoratedText}>
        {props.children}
      </span>
    );
  } else {
    const combinedClassName = clsx(theme.emoji, className);

    emojiDisplay = (
      <Emoji
        className={combinedClassName}
        set={emojiSet}
        skin={emojiData.skin || 1}
        emoji={emojiData}
        size={15}
        tooltip
      >
        {props.children}
      </Emoji>
    );
  }

  return emojiDisplay;
};

export default EmojiComponent;
