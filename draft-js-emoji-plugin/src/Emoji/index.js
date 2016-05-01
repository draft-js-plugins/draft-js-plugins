import React from 'react';
import escapeMap from '../utils/escapeMap';
import unionClassNames from 'union-class-names';
import mappedUnicode from '../utils/mappedUnicode';

const defaultImagePathSVG = '//cdn.jsdelivr.net/emojione/assets/svg/';
const cacheBustParam = '?v=2.1.2';

const Emoji = ({ theme = {}, imagePathSVG, className, decoratedText, ...props }) => {
  const unicode = escapeMap[decoratedText];
  const imagePath = `url(${imagePathSVG || defaultImagePathSVG}${unicode}.svg${cacheBustParam})`;
  const combinedClassName = unionClassNames(theme.emoji, className);
  const characterClassName = unionClassNames(theme.emojiCharacter);
  return (
    <span
      className={ combinedClassName }
      title={ mappedUnicode[unicode] }
      style={{ backgroundImage: imagePath }}
    >
      <span className={ characterClassName }>{ props.children }</span>
    </span>
  );
};

export default Emoji;
