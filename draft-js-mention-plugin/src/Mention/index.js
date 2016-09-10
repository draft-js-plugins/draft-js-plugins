import React from 'react';
import { Entity } from 'draft-js';
import { fromJS } from 'immutable';
import unionClassNames from 'union-class-names';

const MentionLink = ({ mention, mentionPrefix, children, className }) =>
  <a
    href={mention.get('link')}
    className={className}
    spellCheck={false}
  >
    {mentionPrefix}{children}
  </a>;

const MentionText = ({ mentionPrefix, children, className }) =>
  <span
    className={className}
    spellCheck={false}
  >
    {mentionPrefix}{children}
  </span>;

const Mention = (props) => {
  const {
    entityKey,
    theme = {},
    mentionComponent,
    mentionPrefix,
    children,
    decoratedText,
    className,
  } = props;

  const combinedClassName = unionClassNames(theme.mention, className);
  const mention = fromJS(Entity.get(entityKey).getData().mention);

  const Component = (
    mentionComponent || (mention.has('link') ? MentionLink : MentionText)
  );

  return (
    <Component
      entityKey={entityKey}
      mention={mention}
      theme={theme}
      className={combinedClassName}
      mentionPrefix={mentionPrefix}
      decoratedText={decoratedText}
    >
      {children}
    </Component>
  );
};

export default Mention;
