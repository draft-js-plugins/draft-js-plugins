import React from 'react';
import escapeMap from '../utils/escapeMap';
import emojioneList from '../utils/emojioneList';
import unionClassNames from 'union-class-names';

const mapShortToUnicode = function() {
  var new_obj = {};
  for (var shortname in emojioneList) {
    if (!emojioneList.hasOwnProperty(shortname)) { continue; }
    for(var i = 0, len = emojioneList[shortname].length; i < len; i++){
        new_obj[emojioneList[shortname][i]] = shortname;
    }
  }
  return new_obj;
};

const mappedUnicode = mapShortToUnicode();
const imagePathSVG = '//cdn.jsdelivr.net/emojione/assets/svg/';
const cacheBustParam = '?v=2.1.2';

const Emoji = ({ theme = Map(), className, decoratedText, ...props }) => {
  const unicode = escapeMap[decoratedText];
  const imagePath = `url(${imagePathSVG}${unicode}.svg${cacheBustParam})`;
  const combinedClassName = unionClassNames(theme.get('emoji'), className);
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
