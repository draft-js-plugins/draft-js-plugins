import clsx from 'clsx';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import { MentionPluginStore, PopperOptions } from '..';
import { MentionPluginTheme } from '../theme';

export interface PopoverProps {
  store: MentionPluginStore;
  children: ReactNode;
  popperOptions?: PopperOptions;
  theme: MentionPluginTheme;
}

export default function Popover({
  store,
  children,
  theme,
  popperOptions = { placement: 'bottom-start' },
}: PopoverProps): ReactElement {
  const [className, setClassName] = useState(() =>
    clsx(theme.mentionSuggestions, theme.mentionSuggestionsPopup)
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const { styles, attributes } = usePopper(
    store.getReferenceElement(),
    popperElement,
    popperOptions
  );

  useEffect(() => {
    requestAnimationFrame(() =>
      setClassName(
        clsx(
          theme.mentionSuggestions,
          theme.mentionSuggestionsPopup,
          theme.mentionSuggestionsPopupVisible
        )
      )
    );
  }, [theme]);
  return (
    <div
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      className={className}
    >
      {children}
    </div>
  );
}
