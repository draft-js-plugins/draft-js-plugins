import React from 'react';
import unionClassNames from 'union-class-names';
import emojione from 'emojione';
import emojiList from '../../utils/emojiList';
import convertShortNameToUnicode from '../../utils/convertShortNameToUnicode';

const Emoji = ({ theme = {}, cacheBustParam, imagePath, imageType, className, decoratedText, useNativeArt, ...props }) => {
  const shortName = emojione.toShort(decoratedText);

  let emojiDisplay = null;
  if (useNativeArt === true) {
    const unicode = emojiList.list[shortName][0];
    emojiDisplay = (
      <span
        title={emojione.toShort(decoratedText)}
      >
        {convertShortNameToUnicode(unicode)}
      </span>
    );
  } else {
    // short name to image url code steal from emojione source code
    const shortNameForImage = emojione.emojioneList[shortName].unicode[emojione.emojioneList[shortName].unicode.length - 1];
    const backgroundImage = `url(${imagePath}${shortNameForImage}.${imageType}${cacheBustParam})`;
    const combinedClassName = unionClassNames(theme.emoji, className);

    emojiDisplay = (
      <span
        className={combinedClassName}
        title={emojione.toShort(decoratedText)}
        style={{ backgroundImage }}
      >
        {props.children}
      </span>
    );
  }

  return emojiDisplay;
};

export default Emoji;
