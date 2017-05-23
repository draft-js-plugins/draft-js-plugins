/* Idea from https://github.com/tommoor/emojione-picker */
export default function createEmojisFromStrategy(strategy) {
  const emojis = {};

  // categorise and nest emoji
  // sort ensures that modifiers appear unmodified keys
  const keys = Object.keys(strategy);
  keys.forEach((key) => {
    const value = strategy[key];

    // skip unknown categories
    if (value.category !== 'modifier') {
      if (!emojis[value.category]) emojis[value.category] = {};
      const match = key.match(/(.*?)_tone(.*?)$/);

      if (match) {
        // this check is to stop the plugin from failing in the case that the
        // emoji strategy miscategorizes tones - which was the case here:
        // https://github.com/Ranks/emojione/pull/330
        const unmodifiedEmojiExists = !!emojis[value.category][match[1]];
        if (unmodifiedEmojiExists) {
          emojis[value.category][match[1]][match[2]] = value.shortname;
        }
      } else {
        emojis[value.category][key] = [value.shortname];
      }
    }
  });

  return emojis;
}
