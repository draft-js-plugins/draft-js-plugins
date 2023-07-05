import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { EmojiPluginStore } from 'packages/emoji/lib';
import EmojiSelect from '../components/EmojiSelect/index';
import NativeEmojiImage from '../components/Emoji/NativeEmojiImage';

describe('EmojiSelect', (): void => {
  const renderComponent = (
    propOverrides = {}
  ): { screen: RenderResult; store: EmojiPluginStore } => {
    const store: EmojiPluginStore = {
      setEditorState: jest.fn(),
      getPortalClientRect: jest.fn(),
      getAllSearches: jest.fn(),
      isEscaped: jest.fn(),
      escapeSearch: jest.fn(),
      resetEscapedSearch: jest.fn(),
      register: jest.fn(),
      updatePortalClientRect: jest.fn(),
      unregister: jest.fn(),
    };

    const props = {
      store,
      theme: {},
      emojiImage: NativeEmojiImage,
      ...propOverrides,
    };

    const screen = render(<EmojiSelect {...props} />);

    return { screen, store };
  };

  it('Renders a button', async () => {
    const { screen } = renderComponent();
    expect(await screen.getByRole('button')).toBeInTheDocument();
  });
});
