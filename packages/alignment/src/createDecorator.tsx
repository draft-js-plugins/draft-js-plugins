import { ContentBlock } from 'draft-js';
import React, {
  ComponentType,
  CSSProperties,
  MutableRefObject,
  ReactElement,
  Ref,
  useEffect,
  useRef,
} from 'react';
import { AlignmentPluginStore } from '.';

interface BlockAlignmentDecoratorParams {
  blockProps: {
    isFocused: boolean;
    isCollapsedSelection: boolean;
    alignment: string;
    setAlignment(val: { alignment: string }): void;
  };
  style?: CSSProperties;
  block: ContentBlock;
  ref?: Ref<HTMLElement>;
}

type WrappedComponentType = ComponentType<BlockAlignmentDecoratorParams> & {
  WrappedComponent?: ComponentType<BlockAlignmentDecoratorParams>;
};

const getDisplayName = (WrappedComponent: WrappedComponentType): string => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ store }: { store: AlignmentPluginStore }) =>
  (
    WrappedComponent: WrappedComponentType
  ): ComponentType<BlockAlignmentDecoratorParams> => {
    const BlockAlignmentDecorator = React.forwardRef<
      HTMLElement,
      BlockAlignmentDecoratorParams
    >(({ blockProps, block, style, ...elementProps }, ref): ReactElement => {
      const wrapper = useRef<HTMLElement | null>();
      useEffect(() => {
        if (blockProps.isFocused && blockProps.isCollapsedSelection) {
          const boundingRect = wrapper.current!.getBoundingClientRect();
          store.updateItem('setAlignment', blockProps.setAlignment);
          store.updateItem('alignment', blockProps.alignment);
          store.updateItem('boundingRect', boundingRect);
          store.updateItem('visibleBlock', block.getKey());
          // Only set visibleBlock to null in case it's the current one. This is important
          // in case the focus directly switches from one block to the other. Then the
          // Alignment tool should not be hidden, but just moved.
        } else if (store.getItem('visibleBlock') === block.getKey()) {
          store.updateItem('visibleBlock', null);
        }
        return () => {
          store.updateItem('visibleBlock', null);
        };
      }, [blockProps.isFocused, blockProps.isCollapsedSelection, store]);

      const alignment = blockProps.alignment;
      let newStyle = style;
      if (alignment === 'left') {
        newStyle = { ...style, float: 'left' };
      } else if (alignment === 'right') {
        newStyle = { ...style, float: 'right' };
      } else if (alignment === 'center') {
        newStyle = {
          ...style,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
        };
      }
      return (
        <WrappedComponent
          {...elementProps}
          block={block}
          blockProps={blockProps}
          style={newStyle}
          ref={(node) => {
            wrapper.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              // eslint-disable-next-line no-param-reassign
              (ref as MutableRefObject<HTMLElement | null>).current = node;
            }
          }}
        />
      );
    });

    BlockAlignmentDecorator.displayName = `Alignment(${getDisplayName(
      WrappedComponent
    )})`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (BlockAlignmentDecorator as any).WrappedComponent =
      WrappedComponent.WrappedComponent || WrappedComponent;

    return BlockAlignmentDecorator;
  };
