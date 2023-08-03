import clsx from 'clsx';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { usePopper } from 'react-popper';
import { EmojiPluginStore, EmojiPluginTheme, PopperOptions } from '../../index';

export interface PopoverProps {
  store: EmojiPluginStore;
  children: ReactNode;
  popperOptions?: PopperOptions;
  theme: EmojiPluginTheme;
}

export default function Popover({
  store,
  children,
  theme,
  popperOptions = { placement: 'bottom-start' },
}: PopoverProps): ReactElement {
  const [className, setClassName] = useState(() =>
    clsx(theme.emojiSuggestions)
  );
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(
    store.getReferenceElement(),
    popperElement,
    popperOptions
  );
  useEffect(() => {
    requestAnimationFrame(() => setClassName(clsx(theme.emojiSuggestions)));
  }, [theme]);
  return (
    <div
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}
      className={className}
      role="listbox"
    >
      {children}
    </div>
  );
}
