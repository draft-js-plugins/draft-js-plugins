import { EditorState } from 'draft-js';
import React, {
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { EmojiPluginStore } from '../../index';

export interface EmojiSuggestionsPortalParams {
  store: EmojiPluginStore;
  offsetKey: string;
  getEditorState(): EditorState;
  setEditorState(state: EditorState): void;
  children: ReactNode;
}

export default function EmojiSuggestionsPortal({
  children,
  store,
  getEditorState,
  setEditorState,
  offsetKey,
}: EmojiSuggestionsPortalParams): ReactElement {
  const ref = useRef<HTMLSpanElement>(null);

  const updatePortalClientRect = useCallback(() => {
    store.updatePortalClientRect(offsetKey, () =>
      ref.current!.getBoundingClientRect()
    );
  }, [store, offsetKey]);

  useEffect(() => {
    store.register(offsetKey);
    updatePortalClientRect();

    // trigger a re-render so the EmojiSuggestions becomes active
    setEditorState(getEditorState());

    return () => {
      store.register(offsetKey);
    };
  }, [updatePortalClientRect, store, getEditorState, setEditorState]);

  return <span ref={ref}>{children}</span>;
}
