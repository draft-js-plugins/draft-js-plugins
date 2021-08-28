import { ContentBlock } from 'draft-js';
import React, { ComponentType, DragEvent, ReactElement } from 'react';
import { DndPluginStore } from '.';
import { DRAFTJS_BLOCK_KEY } from './constants';

interface DecoratorParams extends React.HTMLAttributes<HTMLElement> {
  block: ContentBlock;
  ref: React.ForwardedRef<unknown>;
}

type WrappedComponentType = ComponentType<DecoratorParams> & {
  WrappedComponent?: ComponentType<DecoratorParams>;
};

// Get a component's display name
const getDisplayName = (WrappedComponent: WrappedComponentType): string => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ store }: { store: DndPluginStore }) =>
  (WrappedComponent: WrappedComponentType): WrappedComponentType => {
    const BlockDraggableDecorator: WrappedComponentType = React.forwardRef(
      (props: Omit<DecoratorParams, 'ref'>, ref): ReactElement => {
        // Handle start-drag and set dataTransfer data with blockKey
        const startDrag = (event: DragEvent<HTMLElement>): void => {
          event.dataTransfer.dropEffect = 'move'; // eslint-disable-line no-param-reassign
          // declare data and give info that its an existing key and a block needs to be moved
          event.dataTransfer.setData(
            'text',
            `${DRAFTJS_BLOCK_KEY}:${props.block.getKey()}`
          );
        };

        // If this is rendered before the store is initialized default to read only
        // NOTE(@mxstbr): Reference issue: draft-js-plugins/draft-js-plugins#926
        const readOnly = store.getReadOnly ? store.getReadOnly() : true;

        return (
          <WrappedComponent
            ref={ref}
            {...props}
            onDragStart={!readOnly ? startDrag : undefined}
          />
        );
      }
    );

    BlockDraggableDecorator.displayName = `BlockDraggable(${getDisplayName(
      WrappedComponent
    )})`;
    // eslint-disable-next-line no-redeclare
    BlockDraggableDecorator.WrappedComponent =
      WrappedComponent.WrappedComponent || WrappedComponent;

    return BlockDraggableDecorator;
  };
