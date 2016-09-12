import React from 'react';
import unionClassNames from 'union-class-names';
import ns from 'emojione';
const Emoji = ({ theme = {}, cacheBustParam, imagePath, className, decoratedText, ...props }) => {
  const shortName = ns.toShort(decoratedText);
  // short name to image url code steal from emojione source code
  const shortNameForImage = ns.emojioneList[shortName].unicode[ns.emojioneList[shortName].unicode.length - 1];
  const backgroundImage = `url(${imagePath}${shortNameForImage}.svg${cacheBustParam})`;
  const combinedClassName = unionClassNames(theme.emoji, className);
  const characterClassName = unionClassNames(theme.emojiCharacter);
  return (
    <span
      className={combinedClassName}
      title={ns.toShort(decoratedText)}
      style={{ backgroundImage }}
    >
      <span className={characterClassName}>{props.children}</span>
    </span>
  );
};

export default Emoji;
