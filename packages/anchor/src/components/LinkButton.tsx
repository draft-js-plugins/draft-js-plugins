import React, { ComponentType, MouseEvent, ReactElement } from 'react';
import PropTypes from 'prop-types';
import EditorUtils from '@draft-js-plugins/utils';
import AddLinkForm, { OverrideContentProps } from './AddLinkForm';
import { AnchorPluginTheme } from '../theme';
import { AnchorPluginStore } from '..';
import { DefaultLinkButtonProps } from './DefaultLinkButton';

export interface LinkButtonTheme {
  button?: string;
  active?: string;
  buttonWrapper?: string;
}

export interface LinkButtonPubParams {
  theme?: LinkButtonTheme;
  onOverrideContent(
    component: ComponentType<OverrideContentProps> | undefined
  ): void;
}

interface LinkButtonParams extends LinkButtonPubParams {
  ownTheme: AnchorPluginTheme;
  store: AnchorPluginStore;
  placeholder?: string;
  onRemoveLinkAtSelection(): void;
  validateUrl?(url: string): boolean;
  linkButton: ComponentType<DefaultLinkButtonProps>;
}

const LinkButton = ({
  ownTheme,
  placeholder,
  onOverrideContent,
  validateUrl,
  theme,
  onRemoveLinkAtSelection,
  store,
  linkButton: InnerLinkButton,
}: LinkButtonParams): ReactElement => {
  const onAddLinkClick = (event: MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    const content = (contentProps: OverrideContentProps): ReactElement => (
      <AddLinkForm
        {...contentProps}
        placeholder={placeholder}
        theme={ownTheme}
        validateUrl={validateUrl}
      />
    );

    onOverrideContent(content);
  };

  const editorState = store.getEditorState?.();
  const hasLinkSelected = editorState
    ? EditorUtils.hasEntity(editorState, 'LINK')
    : false;

  return (
    <InnerLinkButton
      onRemoveLinkAtSelection={onRemoveLinkAtSelection}
      hasLinkSelected={hasLinkSelected}
      onAddLinkClick={onAddLinkClick}
      theme={theme}
    />
  );
};

LinkButton.propTypes = {
  placeholder: PropTypes.string,
  store: PropTypes.object.isRequired,
  ownTheme: PropTypes.object.isRequired,
  onRemoveLinkAtSelection: PropTypes.func.isRequired,
  validateUrl: PropTypes.func,
};

export default LinkButton;
