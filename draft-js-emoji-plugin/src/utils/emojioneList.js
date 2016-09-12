/* eslint-disable */
import ns from 'emojione';

// emojione version 2.2.6
// Original can be found here: https://github.com/Ranks/emojione
let emojioneList = {};
for (let key in ns.emojioneList) {
    emojioneList[key] = ns.emojioneList[key].unicode;
}

export default emojioneList;
