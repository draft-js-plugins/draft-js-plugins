import React from 'react';
import escapeMap from '../utils/escapeMap';
import unionClassNames from 'union-class-names';
import mappedUnicode from '../utils/mappedUnicode';

const imagePathSVG = '//cdn.jsdelivr.net/emojione/assets/svg/';
const cacheBustParam = '?v=2.1.2';

const Emoji = ({ theme = {}, className, decoratedText, ...props }) => {
  const unicode = escapeMap[decoratedText];
  const imagePath = `url(${imagePathSVG}${unicode}.svg${cacheBustParam})`;
  const combinedClassName = unionClassNames(theme.emoji, className);
  return (
    <span
      className={ combinedClassName }
      title={ mappedUnicode[unicode] }
      style={{ backgroundImage: imagePath }}
    >
      { props.children }
    </span>
  );
};

export default Emoji;
