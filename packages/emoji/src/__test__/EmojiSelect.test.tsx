import { EditorState } from 'draft-js';
import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { EmojiPluginStore } from '../index';
import EmojiSelect from '../components/EmojiSelect/index';
import NativeEmojiImage from '../components/Emoji/NativeEmojiImage';

class TestState {
  private state: EditorState;
  constructor(initialState = EditorState.createEmpty()) {
    this.state = initialState;
  }

  getEditorState = (): EditorState => this.state;

  setEditorState = (newState: EditorState): void => {
    this.state = newState;
  };
}

describe('EmojiSelect', (): void => {
  const renderComponent = (
    propOverrides = {}
  ): { screen: RenderResult; store: EmojiPluginStore; state: TestState } => {
    const state = new TestState();
    const store: EmojiPluginStore = {
      getEditorState: state.getEditorState,
      setEditorState: jest.fn().mockImplementation(state.setEditorState),
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

    return { screen, store, state };
  };

  it('Renders a button', async () => {
    const { screen } = renderComponent();
    expect(await screen.getByRole('button')).toBeInTheDocument();
  });

  it('should open the EmojiSelect menu with a click event', async () => {
    const { screen } = renderComponent();
    const button = await screen.getByRole('button');
    fireEvent.click(button);

    const grinEmoji = await screen.getByRole('button', { name: ':grinning:' });
    expect(grinEmoji).toBeInTheDocument();
  });

  it('should allow the keyboard Enter to select an emoji', async () => {
    const { screen, store, state } = renderComponent();
    const button = await screen.getByRole('button');
    fireEvent.click(button);
    const grinEmoji = await screen.getByRole('button', { name: ':grinning:' });
    fireEvent.keyDown(grinEmoji, { key: 'Enter' });

    expect(store.setEditorState).toHaveBeenCalled();
    const currentContent = state.getEditorState().getCurrentContent();
    expect(
      currentContent.getEntity(currentContent.getLastCreatedEntityKey())
    ).toEqual(
      expect.objectContaining({
        type: 'emoji',
        mutability: 'IMMUTABLE',
        data: {
          emojiUnicode: '😀',
        },
      })
    );
  });

  it('should allow the keyboard space to select an emoji', async () => {
    const { screen, store, state } = renderComponent();
    const button = await screen.getByRole('button');
    fireEvent.click(button);
    const grinEmoji = await screen.getByRole('button', { name: ':grinning:' });
    fireEvent.keyDown(grinEmoji, { key: ' ' });

    expect(store.setEditorState).toHaveBeenCalled();
    const currentContent = state.getEditorState().getCurrentContent();
    expect(
      currentContent.getEntity(currentContent.getLastCreatedEntityKey())
    ).toEqual(
      expect.objectContaining({
        type: 'emoji',
        mutability: 'IMMUTABLE',
        data: {
          emojiUnicode: '😀',
        },
      })
    );
  });
});
