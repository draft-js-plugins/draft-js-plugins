import emojione from './emojioneList';

const emojioneList = emojione.emojioneList;
const mapUnicode = () => {
  const unicodes = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const shortname in emojioneList) {
    // eslint-disable-next-line no-continue, no-prototype-builtins
    if (!emojioneList.hasOwnProperty(shortname)) {
      continue;// eslint-disable-line no-continue
    }

    for (let i = 0, len = emojioneList[shortname].length; i < len; i += 1) {
      unicodes[emojioneList[shortname][i]] = shortname;
    }
  }

  return unicodes;
};

export default mapUnicode();
