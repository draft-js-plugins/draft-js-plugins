import { EditorState } from 'draft-js';
import { ReactElement, ReactNode } from 'react';
import { MentionPluginStore } from '.';
export interface MentionSuggestionsPortalProps {
    offsetKey: string;
    store: MentionPluginStore;
    getEditorState(): EditorState;
    setEditorState(state: EditorState): void;
    children: ReactNode;
}
export default function MentionSuggestionsPortal(props: MentionSuggestionsPortalProps): ReactElement;
