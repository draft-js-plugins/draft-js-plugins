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
    store.setReferenceElement(ref.current);

    // trigger a re-render so the EmojiSuggestions becomes active
    store.setEditorState!(store.getEditorState!());

    return () => {
      store.unregister(offsetKey);
      store.setReferenceElement(null);
    };
  }, [updatePortalClientRect, store]);

  return <span ref={ref}>{children}</span>;
}
