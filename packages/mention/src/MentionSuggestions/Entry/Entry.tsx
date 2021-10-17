import React, {
  ComponentType,
  useEffect,
  useRef,
  MouseEvent,
  ReactElement,
} from 'react';
import PropTypes from 'prop-types';
import { MentionData } from '../../';
import { MentionPluginTheme } from '../../theme';

export interface EntryComponentProps {
  className?: string;
  onMouseDown(event: MouseEvent): void;
  onMouseUp(event: MouseEvent): void;
  onMouseEnter(event: MouseEvent): void;
  role: string;
  id: string;
  'aria-selected'?: boolean | 'false' | 'true';
  theme?: MentionPluginTheme;
  mention: MentionData;
  isFocused: boolean;
  searchValue?: string;
  selectMention(mention: MentionData | null): void;
}

interface EntryProps {
  mention: MentionData;
  entryComponent: ComponentType<EntryComponentProps>;
  onMentionSelect(mention: MentionData | null): void;
  theme: MentionPluginTheme;
  id: string;
  index: number;
  onMentionFocus(index: number): void;
  isFocused: boolean;
  searchValue?: string;
}

const Entry = ({
  onMentionSelect,
  mention,
  theme,
  index,
  onMentionFocus,
  isFocused,
  id,
  searchValue,
  entryComponent: EntryComponent,
}: EntryProps): ReactElement => {
  const mouseDown = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFocused) {
      //delay the scrolling as the popup needs some time for positioning
      requestAnimationFrame(() =>
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      );
    }
  }, [isFocused]);

  useEffect(() => {
    mouseDown.current = false;
  });

  const onMouseUp = (): void => {
    if (mouseDown.current) {
      onMentionSelect(mention);
      mouseDown.current = false;
    }
  };

  const onMouseDown = (event: MouseEvent): void => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    mouseDown.current = true;
  };

  const onMouseEnter = (): void => {
    onMentionFocus(index);
  };

  const className = isFocused
    ? theme.mentionSuggestionsEntryFocused
    : theme.mentionSuggestionsEntry;

  return (
    <div ref={ref}>
      <EntryComponent
        className={className}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseEnter={onMouseEnter}
        role="option"
        id={id}
        aria-selected={isFocused ? 'true' : undefined}
        theme={theme}
        mention={mention}
        isFocused={isFocused}
        searchValue={searchValue}
        selectMention={onMentionSelect}
      />
    </div>
  );
};

Entry.propTypes = {
  entryComponent: PropTypes.any.isRequired,
  searchValue: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  onMentionSelect: PropTypes.func,
};

export default Entry;
