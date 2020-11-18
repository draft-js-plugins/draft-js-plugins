import React, {
  Component,
  ComponentType,
  CSSProperties,
  LegacyRef,
  ReactElement,
} from 'react';
import ReactDOM from 'react-dom';
import {
  ResizeablePluginConfig,
  ResizeablePluginStore,
  ScaleType,
  BlockProps,
} from '.';

interface DecoratorProps {
  config: ResizeablePluginConfig;
  store: ResizeablePluginStore;
}

export interface WrappedComponentProps {
  blockProps: BlockProps;
  hoverPosition: Record<string, boolean>;
  clicked: boolean;
  width: number;
  height: number;
  style?: CSSProperties;
  ref?: LegacyRef<HTMLElement>;
}

interface BlockResizeableDecoratorProps extends WrappedComponentProps {
  vertical: ScaleType | boolean;
  horizontal: ScaleType;
  isResizable: boolean;
  resizeSteps: number;
  initialWidth: number;
  initialHeight: number;
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

export default ({ config, store }: DecoratorProps) => (
  WrappedComponent: WrappedComponentType
): ComponentType<BlockResizeableDecoratorProps> =>
  class BlockResizeableDecorator extends Component<
    BlockResizeableDecoratorProps
  > {
    static displayName = `Resizable(${getDisplayName(WrappedComponent)})`;
    static WrappedComponent =
      WrappedComponent.WrappedComponent || WrappedComponent;
    static defaultProps = {
      horizontal: 'relative',
      vertical: false,
      resizeSteps: 1,
      isResizable: true,
      ...config,
    } as Partial<BlockResizeableDecoratorProps>;
    state = {
      hoverPosition: {},
      clicked: false,
    } as BlockResizeableDecoratorProps;

    wrapper?: HTMLElement | null;

    setEntityData = (data: { width: number; height: number }): void => {
      this.props.blockProps.setResizeData(data);
    };

    // used to save the hoverPosition so it can be leveraged to determine if a
    // drag should happen on mousedown
    mouseLeave = (): void => {
      if (!this.state.clicked) {
        this.setState({ hoverPosition: {} });
      }
    };

    // used to save the hoverPosition so it can be leveraged to determine if a
    // drag should happen on mousedown
    mouseMove = (evt: MouseEvent): void => {
      const { vertical, horizontal, isResizable } = this.props;

      const hoverPosition = this.state.hoverPosition;
      const tolerance = 6;
      // TODO figure out if and how to achieve this without fetching the DOM node
      // eslint-disable-next-line react/no-find-dom-node
      const pane = ReactDOM.findDOMNode(this) as HTMLElement;
      const b = pane.getBoundingClientRect();
      const x = evt.clientX - b.left;
      const y = evt.clientY - b.top;

      const isTop = vertical && vertical !== 'auto' ? y < tolerance : false;
      const isLeft = horizontal ? x < tolerance : false;
      const isRight = horizontal ? x >= b.width - tolerance : false;
      const isBottom =
        vertical && vertical !== 'auto'
          ? y >= b.height - tolerance && y < b.height
          : false;

      const canResize = (isTop || isLeft || isRight || isBottom) && isResizable;

      const newHoverPosition: Record<string, boolean> = {
        isTop,
        isLeft,
        isRight,
        isBottom,
        canResize,
      };
      const hasNewHoverPositions = Object.keys(newHoverPosition).filter(
        (key) => hoverPosition[key] !== newHoverPosition[key]
      );

      if (hasNewHoverPositions.length) {
        this.setState({ hoverPosition: newHoverPosition });
      }
    };

    // Handle mousedown for resizing
    mouseDown = (event: MouseEvent): void => {
      // No mouse-hover-position data? Nothing to resize!
      if (!this.state.hoverPosition.canResize) {
        return;
      }

      event.preventDefault();
      const { resizeSteps, vertical, horizontal } = this.props;
      const { hoverPosition } = this.state;
      const { isTop, isLeft, isRight, isBottom } = hoverPosition;

      // TODO figure out how to achieve this without fetching the DOM node
      // eslint-disable-next-line react/no-find-dom-node
      const pane = ReactDOM.findDOMNode(this) as HTMLElement;
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

      // Do the actual drag operation
      const doDrag = (dragEvent: MouseEvent): void => {
        let width =
          startWidth +
          (isLeft ? startX - dragEvent.clientX : dragEvent.clientX - startX);
        let height = startHeight + dragEvent.clientY - startY;

        const editorComp = store.getEditorRef!();
        // this keeps backwards-compatibility with react 15
        const editorNode =
          editorComp.refs && editorComp.refs.editor
            ? editorComp.refs.editor
            : editorComp.editor;

        width = Math.min(editorNode.clientWidth, width);
        height = Math.min(editorNode.clientHeight, height);

        const widthPerc = (100 / editorNode.clientWidth) * width;
        const heightPerc = (100 / editorNode.clientHeight) * height;

        const newState: Partial<BlockResizeableDecoratorProps> = {};
        if ((isLeft || isRight) && horizontal === 'relative') {
          newState.width = resizeSteps
            ? round(widthPerc, resizeSteps)
            : widthPerc;
        } else if ((isLeft || isRight) && horizontal === 'absolute') {
          newState.width = resizeSteps ? round(width, resizeSteps) : width;
        }

        if ((isTop || isBottom) && vertical === 'relative') {
          newState.height = resizeSteps
            ? round(heightPerc, resizeSteps)
            : heightPerc;
        } else if ((isTop || isBottom) && vertical === 'absolute') {
          newState.height = resizeSteps ? round(height, resizeSteps) : height;
        }

        dragEvent.preventDefault();

        this.setState(newState);
      };

      // Finished dragging
      const stopDrag = (): void => {
        // TODO clean up event listeners
        document.removeEventListener('mousemove', doDrag, false);
        document.removeEventListener('mouseup', stopDrag, false);

        const { width, height } = this.state;
        this.setState({ clicked: false });
        this.setEntityData({ width, height });
      };

      // TODO clean up event listeners
      document.addEventListener('mousemove', doDrag, false);
      document.addEventListener('mouseup', stopDrag, false);

      this.setState({ clicked: true });
    };

    render(): ReactElement {
      const {
        blockProps,
        vertical,
        horizontal,
        initialWidth,
        initialHeight,
        style,
        isResizable,
        // using destructuring to make sure unused props are not passed down to the block
        resizeSteps, // eslint-disable-line @typescript-eslint/no-unused-vars
        ...elementProps
      } = this.props;
      const { width, height, hoverPosition } = this.state;
      const { isTop, isLeft, isRight, isBottom } = hoverPosition;

      const styles: CSSProperties = { position: 'relative', ...style };

      if (horizontal === 'auto') {
        styles.width = 'auto';
      } else if (horizontal === 'relative') {
        const value = width || blockProps.resizeData.width;
        if (!value && initialWidth) {
          styles.width = initialWidth;
        } else {
          styles.width = `${value || 40}%`;
        }
      } else if (horizontal === 'absolute') {
        const value = width || blockProps.resizeData.width;
        if (!value && initialWidth) {
          styles.width = initialWidth;
        } else {
          styles.width = `${value || 40}px`;
        }
      }

      if (vertical === 'auto') {
        styles.height = 'auto';
      } else if (vertical === 'relative') {
        const value = height || blockProps.resizeData.height;
        if (!value && initialHeight) {
          styles.height = initialHeight;
        } else {
          styles.height = `${value || 40}%`;
        }
      } else if (vertical === 'absolute') {
        const value = height || blockProps.resizeData.height;
        if (!value && initialHeight) {
          styles.height = initialHeight;
        } else {
          styles.height = `${value || 40}%`;
        }
      }

      // Handle cursor
      if (!isResizable) {
        styles.cursor = 'default';
      } else if ((isRight && isBottom) || (isLeft && isTop)) {
        styles.cursor = 'nwse-resize';
      } else if ((isRight && isTop) || (isBottom && isLeft)) {
        styles.cursor = 'nesw-resize';
      } else if (isRight || isLeft) {
        styles.cursor = 'ew-resize';
      } else if (isBottom || isTop) {
        styles.cursor = 'ns-resize';
      } else {
        styles.cursor = 'default';
      }

      const interactionProps =
        !store.getReadOnly || store.getReadOnly()
          ? {}
          : {
              onMouseDown: this.mouseDown,
              onMouseMove: this.mouseMove,
              onMouseLeave: this.mouseLeave,
            };
      return (
        <WrappedComponent
          {...elementProps}
          {...interactionProps}
          blockProps={blockProps}
          ref={(element) => {
            this.wrapper = element;
          }}
          style={styles}
        />
      );
    }
  };
