import React, { ReactElement, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';
import { PopperOptions, SideToolbarPosition } from '../..';

interface PopoverProps {
  referenceElement: HTMLElement | null;
  children: ReactNode;
  className?: string;
  popperOptions?: PopperOptions;
  position: SideToolbarPosition;
}

export default function Popover({
  referenceElement,
  children,
  className,
  position,
  popperOptions = {
    placement: position,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 33],
        },
      },
    ],
  },
}: PopoverProps): ReactElement {
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(
    referenceElement,
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
