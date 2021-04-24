import React, { ReactElement, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';
import { MentionPluginStore } from '..';

interface PopoverProps {
  store: MentionPluginStore;
  children: ReactNode;
  className?: string;
}

export default function Popover({
  store,
  children,
  className,
}: PopoverProps): ReactElement {
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(
    store.getReferenceElement(),
    popperElement,
    { placement: 'bottom-start' }
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
