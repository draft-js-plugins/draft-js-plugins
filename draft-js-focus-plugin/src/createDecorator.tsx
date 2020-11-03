import React, {
  ComponentType,
  MouseEvent,
  ReactElement,
  useEffect,
} from 'react';
import clsx from 'clsx';
import { ContentBlock } from 'draft-js';
import { FocusPluginTheme } from './theme';
import { BlockKeyStore } from './utils/createBlockKeyStore';

interface DecoratorProps {
  theme: FocusPluginTheme;
  blockKeyStore: BlockKeyStore;
}

interface BlockFocusDecoratorProps {
  blockProps: {
    isFocused: boolean;
    setFocusToBlock(): void;
  };
  className: string;
  block: ContentBlock;
  onClick(event: MouseEvent): void;
}

type WrappedComponentType = ComponentType<BlockFocusDecoratorProps> & {
  WrappedComponent?: ComponentType<BlockFocusDecoratorProps>;
};

// Get a component's display name
const getDisplayName = (WrappedComponent: WrappedComponentType): string => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ theme, blockKeyStore }: DecoratorProps) => (
  WrappedComponent: WrappedComponentType
): ComponentType<BlockFocusDecoratorProps> => {
  const BlockFocusDecorator = (
    props: BlockFocusDecoratorProps
  ): ReactElement => {
    useEffect(() => {
      blockKeyStore.add(props.block.getKey());
      return () => {
        blockKeyStore.remove(props.block.getKey());
      };
    }, []);

    const onClick = (evt: MouseEvent): void => {
      evt.preventDefault();
      if (!props.blockProps.isFocused) {
        props.blockProps.setFocusToBlock();
      }
    };

    const { blockProps, className } = props;
    const { isFocused } = blockProps;
    const combinedClassName = isFocused
      ? clsx(className, theme.focused)
      : clsx(className, theme.unfocused);
    return (
      <WrappedComponent
        {...props}
        onClick={onClick}
        className={combinedClassName}
      />
    );
  };

  BlockFocusDecorator.displayName = `BlockFocus(${getDisplayName(
    WrappedComponent
  )})`;
  BlockFocusDecorator.WrappedComponent =
    WrappedComponent.WrappedComponent || WrappedComponent;

  return BlockFocusDecorator;
};
