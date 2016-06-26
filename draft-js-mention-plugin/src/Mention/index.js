import React from 'react';
import { Entity } from 'draft-js';
import { fromJS } from 'immutable';

const Mention = (props) => {
  const { entityKey, theme = {} } = props;
  const mention = fromJS(Entity.get(entityKey).getData().mention);

  if (mention.has('link')) {
    return (
      <a
        href={mention.get('link')}
        className={theme.mention}
        spellCheck={false}
      >
        {props.mentionPrefix}{props.children}
      </a>
    );
  }

  return (
    <span
      className={theme.mention}
      spellCheck={false}
    >
      {props.mentionPrefix}{props.children}
    </span>
  );
};

export default Mention;
