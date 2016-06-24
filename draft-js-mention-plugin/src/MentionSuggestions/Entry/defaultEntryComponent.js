import React from 'react';
import Avatar from './Avatar';

const defaultEntryComponent = (props) => {
  const { mention, theme, ...parentProps } = props;

  return (
    <div {...parentProps}>
      <Avatar mention={mention} theme={theme} />
      <span className={theme.mentionSuggestionsEntryText}>{mention.get('name')}</span>
    </div>
  );
};

export default defaultEntryComponent;
