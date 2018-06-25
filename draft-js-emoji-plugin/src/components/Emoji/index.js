import React from 'react';
import unionClassNames from 'union-class-names';
import emojione from 'emojione';

const Emoji = ({ theme = {}, className, decoratedText, useNativeArt, ...props }) => {
  const shortName = emojione.toShort(decoratedText);

  let emojiDisplay = null;
  if (useNativeArt === true) {
    emojiDisplay = (
      <span
        title={emojione.toShort(decoratedText)}
      >
        {props.children}
      </span>
    );
  } else {
    // short name to image url code steal from emojione source code
    const shortNameForImage = emojione.emojioneList[shortName].unicode[emojione.emojioneList[shortName].unicode.length - 1];
    const combinedClassName = unionClassNames(theme.emoji, className);

    emojiDisplay = (
      <span
        className={`${combinedClassName} ${theme.emojiSpritePrefix} ${theme.emojiSpritePrefix}-${shortNameForImage}`}
        title={emojione.toShort(decoratedText)}
      >
        {props.children}
      </span>
    );
  }

  return emojiDisplay;
};

export default Emoji;
