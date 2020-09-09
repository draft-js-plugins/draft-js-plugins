import React, { useEffect } from 'react';
import clsx from 'clsx';

// Get a component's display name
const getDisplayName = WrappedComponent => {
  const component = WrappedComponent.WrappedComponent || WrappedComponent;
  return component.displayName || component.name || 'Component';
};

export default ({ theme, blockKeyStore }) => WrappedComponent => {
  const BlockFocusDecorator = props => {
    useEffect(() => {
      blockKeyStore.add(props.block.getKey());
      return () => {
        blockKeyStore.remove(props.block.getKey());
      };
    }, []);

    const onClick = evt => {
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
