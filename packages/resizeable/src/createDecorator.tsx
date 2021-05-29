import React, {
  ComponentType,
  CSSProperties,
  useCallback,
  useRef,
  useState,
  MutableRefObject,
  useMemo,
  Ref,
} from 'react';
import { ResizeablePluginConfig, ResizeablePluginStore, BlockProps } from '.';

interface DecoratorProps {
  config: ResizeablePluginConfig;
  store: ResizeablePluginStore;
}

export interface WrappedComponentProps {
  blockProps: BlockProps;
  clicked: boolean;
  width: number;
  height: number;
  style?: CSSProperties;
  ref?: Ref<HTMLElement>;
}

interface BlockResizeableDecoratorProps extends WrappedComponentProps {
  isResizable?: boolean;
  resizeSteps?: number;
}

type WrappedComponentType = ComponentType<WrappedComponentProps> & {
  WrappedComponent?: ComponentType<WrappedComponentProps>;
};

const getDisplayName = (WrappedComponent: WrappedComponentType): string => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

const round = (x: number, steps: number): number =>
  Math.ceil(x / steps) * steps;

export default ({ config, store }: DecoratorProps) =>
  (
    WrappedComponent: WrappedComponentType
  ): ComponentType<WrappedComponentProps> => {
    const BlockResizeableDecorator = React.forwardRef<
      HTMLElement,
      BlockResizeableDecoratorProps
    >(
      (
        {
          blockProps,
          isResizable = true,
          resizeSteps = 1,
          ...elementProps
        }: BlockResizeableDecoratorProps,
        ref
      ) => {
        const {
          vertical = false,
          horizontal = 'relative',
          initialWidth,
          initialHeight,
        } = config;
        const [clicked, setClicked] = useState(false);
        const [width, setWidth] = useState<number>(0);
        const [height, setHeight] = useState<number>(0);
        const [hoverPosition, setHoverPosition] = useState<
          Record<string, boolean>
        >({});
        const wrapper = useRef<HTMLElement | null>();

        const mouseLeave = useCallback(() => {
          if (!clicked) {
            setHoverPosition({});
          }
        }, [clicked]);

        const mouseMove = useCallback(
          (evt: MouseEvent) => {
            const tolerance = 6;
            const b = wrapper.current!.getBoundingClientRect();
            const x = evt.clientX - b.left;
            const y = evt.clientY - b.top;

            const isTop =
              vertical && vertical !== 'auto' ? y < tolerance : false;
            const isLeft = horizontal ? x < tolerance : false;
            const isRight = horizontal ? x >= b.width - tolerance : false;
            const isBottom =
              vertical && vertical !== 'auto'
                ? y >= b.height - tolerance && y < b.height
                : false;

            const canResize =
              (isTop || isLeft || isRight || isBottom) && isResizable;

            const newHoverPosition: Record<string, boolean> = {
              isTop,
              isLeft,
              isRight,
              isBottom,
              canResize,
            };
            setHoverPosition((oldHoverPosition) => {
              const hasNewHoverPositions = Object.keys(newHoverPosition).filter(
                (key) => oldHoverPosition[key] !== newHoverPosition[key]
              );
              if (hasNewHoverPositions.length) {
                return newHoverPosition;
              }
              return oldHoverPosition;
            });
          },
          [vertical, horizontal, isResizable]
        );

        const mouseDown = useCallback(
          (event: MouseEvent) => {
            // No mouse-hover-position data? Nothing to resize!
            if (!hoverPosition.canResize) {
              return;
            }

            event.preventDefault();
            const { isTop, isLeft, isRight, isBottom } = hoverPosition;

            const pane = wrapper.current!;
            const startX = event.clientX;
            const startY = event.clientY;
            const startWidth = parseInt(
              document.defaultView!.getComputedStyle(pane).width,
              10
            );
            const startHeight = parseInt(
              document.defaultView!.getComputedStyle(pane).height,
              10
            );

            let newWidth = width;
            let newHeight = height;

            // Do the actual drag operation
            const doDrag = (dragEvent: MouseEvent): void => {
              let _width =
                startWidth +
                (isLeft
                  ? startX - dragEvent.clientX
                  : dragEvent.clientX - startX);
              let _height = startHeight + dragEvent.clientY - startY;

              const editorComp = store.getEditorRef!();
              // this keeps backwards-compatibility with react 15
              const editorNode =
                editorComp.refs && editorComp.refs.editor
                  ? editorComp.refs.editor
                  : editorComp.editor;

              _width = Math.min(editorNode.clientWidth, _width);
              _height = Math.min(editorNode.clientHeight, _height);

              const widthPerc = (100 / editorNode.clientWidth) * _width;
              const heightPerc = (100 / editorNode.clientHeight) * _height;

              if ((isLeft || isRight) && horizontal === 'relative') {
                newWidth = resizeSteps
                  ? round(widthPerc, resizeSteps)
                  : widthPerc;
                setWidth(newWidth);
              } else if ((isLeft || isRight) && horizontal === 'absolute') {
                newWidth = resizeSteps ? round(_width, resizeSteps) : _width;
                setWidth(newWidth);
              }

              if ((isTop || isBottom) && vertical === 'relative') {
                newHeight = resizeSteps
                  ? round(heightPerc, resizeSteps)
                  : heightPerc;
                setHeight(newHeight);
              } else if ((isTop || isBottom) && vertical === 'absolute') {
                newHeight = resizeSteps ? round(_height, resizeSteps) : _height;
                setHeight(newHeight);
              }

              dragEvent.preventDefault();
            };

            // Finished dragging
            const stopDrag = (): void => {
              // TODO clean up event listeners
              document.removeEventListener('mousemove', doDrag, false);
              document.removeEventListener('mouseup', stopDrag, false);

              setClicked(false);
              blockProps.setResizeData({ width: newWidth, height: newHeight });
            };

            // TODO clean up event listeners
            document.addEventListener('mousemove', doDrag, false);
            document.addEventListener('mouseup', stopDrag, false);

            setClicked(true);
          },
          [hoverPosition, width, height, blockProps]
        );

        const styles: CSSProperties = useMemo(() => {
          const _styles: CSSProperties = { position: 'relative' };
          const { isTop, isLeft, isRight, isBottom } = hoverPosition;
          if (horizontal === 'auto') {
            _styles.width = 'auto';
          } else if (horizontal === 'relative') {
            const value = width || blockProps.resizeData.width;
            if (!value && initialWidth) {
              _styles.width = initialWidth;
            } else {
              _styles.width = `${value || 40}%`;
            }
          } else if (horizontal === 'absolute') {
            const value = width || blockProps.resizeData.width;
            if (!value && initialWidth) {
              _styles.width = initialWidth;
            } else {
              _styles.width = `${value || 40}px`;
            }
          }

          if (vertical === 'auto') {
            _styles.height = 'auto';
          } else if (vertical === 'relative') {
            const value = height || blockProps.resizeData.height;
            if (!value && initialHeight) {
              _styles.height = initialHeight;
            } else {
              _styles.height = `${value || 40}%`;
            }
          } else if (vertical === 'absolute') {
            const value = height || blockProps.resizeData.height;
            if (!value && initialHeight) {
              _styles.height = initialHeight;
            } else {
              _styles.height = `${value || 40}%`;
            }
          }

          // Handle cursor
          if (!isResizable) {
            _styles.cursor = 'default';
          } else if ((isRight && isBottom) || (isLeft && isTop)) {
            _styles.cursor = 'nwse-resize';
          } else if ((isRight && isTop) || (isBottom && isLeft)) {
            _styles.cursor = 'nesw-resize';
          } else if (isRight || isLeft) {
            _styles.cursor = 'ew-resize';
          } else if (isBottom || isTop) {
            _styles.cursor = 'ns-resize';
          } else {
            _styles.cursor = 'default';
          }
          return _styles;
        }, [hoverPosition, height, width]);

        const interactionProps =
          !store.getReadOnly || store.getReadOnly()
            ? {}
            : {
                onMouseDown: mouseDown,
                onMouseMove: mouseMove,
                onMouseLeave: mouseLeave,
              };
        return (
          <WrappedComponent
            {...elementProps}
            {...interactionProps}
            blockProps={blockProps}
            ref={(node) => {
              wrapper.current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                // eslint-disable-next-line no-param-reassign
                (ref as MutableRefObject<HTMLElement | null>).current = node;
              }
            }}
            style={styles}
          />
        );
      }
    );

    BlockResizeableDecorator.displayName = `BlockResizeable(${getDisplayName(
      WrappedComponent
    )})`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (BlockResizeableDecorator as any).WrappedComponent =
      WrappedComponent.WrappedComponent || WrappedComponent;

    return BlockResizeableDecorator;
  };
