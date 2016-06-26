import React from 'react';
import escapeMap from '../utils/escapeMap';
import unionClassNames from 'union-class-names';
import mappedUnicode from '../utils/mappedUnicode';

const Emoji = ({ theme = {}, cacheBustParam, imagePath, className, decoratedText, ...props }) => {
  const unicode = escapeMap[decoratedText];
  const backgroundImage = `url(${imagePath}${unicode}.svg${cacheBustParam})`;
  const combinedClassName = unionClassNames(theme.emoji, className);
  const characterClassName = unionClassNames(theme.emojiCharacter);
  return (
    <span
      className={combinedClassName}
      title={mappedUnicode[unicode]}
      style={{ backgroundImage }}
    >
      <span className={characterClassName}>{props.children}</span>
    </span>
  );
};

export default Emoji;
