import clsx from 'clsx';
import { ContentState } from 'draft-js';
import React, { ComponentType, ReactElement, ReactNode } from 'react';
import { MentionData } from '.';
import { MentionPluginTheme } from './theme';

export interface SubMentionComponentProps {
  // eslint-disable-next-line react/no-unused-prop-types
  mention: MentionData;
  children: ReactNode;
  className: string;
  // eslint-disable-next-line react/no-unused-prop-types
  entityKey: string;
  // eslint-disable-next-line react/no-unused-prop-types
  theme: MentionPluginTheme;
  // eslint-disable-next-line react/no-unused-prop-types
  decoratedText: string;
}

export interface MentionProps {
  children: ReactNode;
  className: string;
  entityKey: string;
  theme?: MentionPluginTheme;
  mentionComponent?: ComponentType<SubMentionComponentProps>;
  decoratedText: string;
  contentState: ContentState;
}

function MentionLink({
  mention,
  children,
  className,
}: SubMentionComponentProps): ReactElement {
  return (
    <a
      href={mention.link}
      className={className}
      spellCheck={false}
      data-testid="mentionLink"
    >
      {children}
    </a>
  );
}

function MentionText({
  children,
  className,
}: SubMentionComponentProps): ReactElement {
  return (
    <span className={className} spellCheck={false} data-testid="mentionText">
      {children}
    </span>
  );
}

export default function Mention(props: MentionProps): ReactElement {
  const {
    entityKey,
    theme = {},
    mentionComponent,
    children,
    decoratedText,
    className,
    contentState,
  } = props;

  const combinedClassName = clsx(theme.mention, className);
  const mention = contentState.getEntity(entityKey).getData().mention;

  const Component =
    mentionComponent || (mention.link ? MentionLink : MentionText);

  return (
    <Component
      entityKey={entityKey}
      mention={mention}
      theme={theme}
      className={combinedClassName}
      decoratedText={decoratedText}
    >
      {children}
    </Component>
  );
}
