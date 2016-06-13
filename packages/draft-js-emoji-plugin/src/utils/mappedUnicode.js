import emojioneList from './emojioneList';

const mapUnicode = () => {
  const unicodes = {};
  for (const shortname in emojioneList) {
    if (!emojioneList.hasOwnProperty(shortname)) { continue; }

    for (let i = 0, len = emojioneList[shortname].length; i < len; i++) {
      unicodes[emojioneList[shortname][i]] = shortname;
    }
  }

  return unicodes;
};

export default mapUnicode();
