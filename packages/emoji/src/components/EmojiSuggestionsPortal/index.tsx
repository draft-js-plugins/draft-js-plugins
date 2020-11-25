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
  children: ReactNode;
}

export default function EmojiSuggestionsPortal({
  children,
  store,
  offsetKey,
}: EmojiSuggestionsPortalParams): ReactElement {
  const ref = useRef<HTMLSpanElement>(null);

  const updatePortalClientRect = useCallback(() => {
    store.updatePortalClientRect(offsetKey, () =>
      ref.current?.getBoundingClientRect()
    );
  }, [store, offsetKey]);

  useEffect(() => {
    store.register(offsetKey);
    updatePortalClientRect();

    // trigger a re-render so the EmojiSuggestions becomes active
    store.setEditorState!(store.getEditorState!());

    return () => {
      store.unregister(offsetKey);
    };
  }, [updatePortalClientRect, store]);

  return <span ref={ref}>{children}</span>;
}
