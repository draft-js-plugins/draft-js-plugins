import React, { FC, useEffect, useRef, MouseEvent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { MentionData } from 'draft-js-mention-plugin/src';
import { Theme } from '../../theme';

export interface EntryComponentProps {
  className?: string;
  onMouseDown(e: MouseEvent): void;
  onMouseUp(e: MouseEvent): void;
  onMouseEnter(e: MouseEvent): void;
  role: string;
  id: string;
  'aria-selected'?: string | null;
  theme?: Theme;
  mention: MentionData;
  isFocused: boolean;
  searchValue?: string;
}

interface EntryProps {
  mention: MentionData;
  entryComponent: FC<EntryComponentProps>;
  onMentionSelect(v: MentionData): void;
  theme: Theme;
  id: string;
  index: number;
  onMentionFocus(index: number): void;
  isFocused: boolean;
  searchValue?: string;
}

const Entry = (props: EntryProps): ReactElement => {
  const mouseDown = useRef(false);

  useEffect(() => {
    mouseDown.current = false;
  });

  const onMouseUp = () => {
    if (mouseDown.current) {
      props.onMentionSelect(props.mention);
      mouseDown.current = false;
    }
  };

  const onMouseDown = (event: MouseEvent) => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    mouseDown.current = true;
  };

  const onMouseEnter = () => {
    props.onMentionFocus(props.index);
  };

  const { theme = {}, mention, searchValue, isFocused, id } = props;
  const className = isFocused
    ? theme.mentionSuggestionsEntryFocused
    : theme.mentionSuggestionsEntry;

  const EntryComponent = props.entryComponent;

  return (
    <EntryComponent
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
      role="option"
      id={id}
      aria-selected={isFocused ? 'true' : null}
      theme={theme}
      mention={mention}
      isFocused={isFocused}
      searchValue={searchValue}
    />
  );
};

Entry.propTypes = {
  entryComponent: PropTypes.any.isRequired,
  searchValue: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  onMentionSelect: PropTypes.func,
};

export default Entry;
