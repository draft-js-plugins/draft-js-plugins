import React, { ComponentType, ReactElement } from 'react';
import { EditorPlugin } from '@draft-js-plugins/editor';
import DefaultDivider, {
  DefaultDividerProps,
} from './components/DefaultDivider';
import DefaultButton, {
  DividerButtonProps,
  DividerButtonPubProps,
} from './components/DividerButton';
import addDivider from './modifiers/addDivider';
import { defaultTheme, DividerPluginTheme } from './theme';

interface DividerPluginConfig {
  theme?: DividerPluginTheme;
  entityType?: string;
  dividerComponent?: ComponentType<DefaultDividerProps>;
  buttonComponent?: ComponentType<DividerButtonProps>;
  decorator?: unknown;
}

const createDividerPlugin = ({
  entityType = 'divider',
  dividerComponent = DefaultDivider,
  buttonComponent = DefaultButton as ComponentType<DividerButtonProps>,
  theme = defaultTheme,
  decorator,
}: DividerPluginConfig = {}): EditorPlugin & {
  DividerButton: ComponentType<DividerButtonPubProps>;
  addDivider: ReturnType<typeof addDivider>;
} => {
  let Divider = dividerComponent;

  if (typeof decorator === 'function') {
    Divider = decorator(Divider);
  }

  const ThemedDivider = (props: DefaultDividerProps): ReactElement => (
    <Divider {...props} theme={theme} />
  );
  const Button = buttonComponent;
  const DividerButton = (props: DividerButtonPubProps): ReactElement => (
    <Button {...props} addDivider={addDivider(entityType)} />
  );

  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent();
        const entity = block.getEntityAt(0);
        if (!entity) return null;
        const type = contentState.getEntity(entity).getType();
        if (type === entityType) {
          return {
            component: ThemedDivider,
            editable: false,
          };
        }
      }

      return null;
    },
    DividerButton,
    addDivider: addDivider(entityType),
  };
};

export default createDividerPlugin;
