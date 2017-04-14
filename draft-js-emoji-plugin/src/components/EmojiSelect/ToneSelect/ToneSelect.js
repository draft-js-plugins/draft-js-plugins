import React from 'react';
import Entry from '../Entry';

const ToneSelect = ({
  theme = {},
  emojiSet = [],
  cacheBustParam,
  imagePath,
  imageType,
  onEmojiSelect,
}) => (
  <ul className={theme.emojiSelectTone}>
    {emojiSet.map((emoji) => (
      <li className={theme.emojiSelectToneItem}>
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
        />
      </li>
    ))}
  </ul>
);

export default ToneSelect;
