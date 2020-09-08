import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Entry = props => {
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

  const onMouseDown = event => {
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
