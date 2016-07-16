import React from 'react';
import { Entity } from 'draft-js';
import { fromJS } from 'immutable';

const MentionLink = ({ mention, theme, mentionPrefix, children }) =>
  <a
    href={mention.get('link')}
    className={theme.mention}
    spellCheck={false}
  >
    {mentionPrefix}{children}
  </a>;

const MentionText = ({ theme, mentionPrefix, children }) =>
  <span
    className={theme.mention}
    spellCheck={false}
  >
    {mentionPrefix}{children}
  </span>;

const Mention = ({ entityKey, theme = {}, mentionComponent, mentionPrefix, children, decoratedText }) => {
  const mention = fromJS(Entity.get(entityKey).getData().mention);

  const Component = (
    mentionComponent || (mention.has('link') ? MentionLink : MentionText)
  );

  return (
    <Component
      entityKey={entityKey}
      mention={mention}
      theme={theme}
      mentionPrefix={mentionPrefix}
      decoratedText={decoratedText}
    >
      {children}
    </Component>
  );
};

export default Mention;
