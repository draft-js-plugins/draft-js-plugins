import React, { ReactElement, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';
import { MentionPluginStore, PopperOptions } from '..';

interface PopoverProps {
  store: MentionPluginStore;
  children: ReactNode;
  className?: string;
  popperOptions?: PopperOptions;
}

export default function Popover({
  store,
  children,
  className,
  popperOptions = { placement: 'bottom-start' },
}: PopoverProps): ReactElement {
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(
    store.getReferenceElement(),
    popperElement,
    popperOptions
  );
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
