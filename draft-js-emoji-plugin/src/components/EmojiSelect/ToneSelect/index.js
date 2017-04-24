import React from 'react';
import shortid from 'shortid';
import Entry from '../Entry';

const ToneSelect = ({
  theme = {},
  toneSet = [],
  cacheBustParam,
  imagePath,
  imageType,
  onEmojiSelect,
}) => (
  <ul className={theme.emojiSelectTone}>
    {toneSet.map((emoji) => (
      <li key={shortid.generate()} className={theme.emojiSelectToneItem}>
        <Entry
          emoji={emoji}
          theme={{
            entry: theme.emojiSelectToneEntry,
            entryIcon: theme.emojiSelectToneEntryIcon,
          }}
          imagePath={imagePath}
          imageType={imageType}
          cacheBustParam={cacheBustParam}
          onEmojiSelect={onEmojiSelect}
          forceMouseDown
        />
      </li>
    ))}
  </ul>
);

export default ToneSelect;
