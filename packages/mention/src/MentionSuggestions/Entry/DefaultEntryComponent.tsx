import React, { ReactElement } from 'react';
import Avatar from './Avatar/Avatar';
import { EntryComponentProps } from './Entry';

export default function DefaultEntryComponent(
  props: EntryComponentProps
): ReactElement {
  const {
    mention,
    theme,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
    selectMention, // eslint-disable-line @typescript-eslint/no-unused-vars
    ...parentProps
  } = props;

  return (
    <div {...parentProps}>
      <Avatar mention={mention} theme={theme} />
      <span className={theme?.mentionSuggestionsEntryText}>{mention.name}</span>
    </div>
  );
}
